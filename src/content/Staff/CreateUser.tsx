import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DialogContent, InputAdornment, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TransitionProps } from '@mui/material/transitions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useRegister } from '@/hooks/auth/register/useRegister';
const DialogWrapper = styled(Dialog)(() => ({}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

function CreateUser(props) {
  const { onClose, snack, open } = props;

  const handleClose = () => {
    onClose(snack);
  };

  const handleCloseSuccess = (value: boolean) => {
    onClose(value);
  };

  const addUser = Yup.object().shape({
    // role: Yup.string().required('Required').nullable(),
    email: Yup.string().required('Required'),
    // email: Yup.string().email('Invalid').required('Required'),
    phone: Yup.string().matches(
      /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/m,
      'Invalid Phone Number'
    ),
    password: Yup.string().matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm
    ),
  });

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(addUser),
  });

  const createUserHook = useRegister();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const authenticateUser = async (authData) => {
    const res = await createUserHook.mutateAsync(authData);
    return res;
  };

  const onSubmit = async (data) => {
    try {
      const res: any = await authenticateUser({
        ...data,
        type: 'staff',
      });
      if (
        res.status === 'success' &&
        ['admin', 'agent'].includes(res.user.role)
      ) {
        handleCloseSuccess(true);
      }
    } catch (error: any) {
      return;
    }
  };

  return (
    <DialogWrapper
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth='sm'
      fullWidth
      scroll='paper'
      onClose={handleClose}
    >
      <DialogTitle>Create User</DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel>Select User Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='role'
            onChange={(event) => {
              const name = getValues('name');
              if (!name || ['Field Agent', 'Admin'].includes(name)) {
                if (event.target.value === 'agent') {
                  setValue('name', 'Field Agent');
                }
                if (event.target.value === 'admin') {
                  setValue('name', 'Admin');
                }
              }
            }}
          >
            <FormControlLabel
              {...register('role')}
              value='admin'
              control={<Radio size='small' />}
              label='Admin'
            />
            <FormControlLabel
              {...register('role')}
              value='agent'
              control={<Radio size='small' />}
              label='Field Agent'
            />
          </RadioGroup>
        </FormControl>

        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete='off'
        >
          <TextField
            {...register('name')}
            fullWidth
            name='name'
            margin='normal'
            label='Name'
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            {...register('email')}
            fullWidth
            required
            name='email'
            margin='normal'
            label='Email address'
          />

          <TextField
            {...register('phone')}
            fullWidth
            required
            name='phone'
            margin='normal'
            label='Phone'
          />

          <TextField
            {...register('password')}
            fullWidth
            required
            name='password'
            type={showPassword ? 'text' : 'password'}
            margin='normal'
            label='Password'
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            type='submit'
            loading={createUserHook?.isLoading}
            fullWidth
            sx={{ my: 2.6, p: 1.4 }}
            variant='contained'
            color='primary'
          >
            Invite & Create User
          </LoadingButton>
        </Box>
      </DialogContent>
    </DialogWrapper>
  );
}

CreateUser.propTypes = {
  snack: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

CreateUser.defaultProps = {
  snack: false,
  open: false,
};

export default CreateUser;
