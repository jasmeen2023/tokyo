import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

interface LabelProps {
  className?: string;
  color: string;
  children?: ReactNode;
}

const LabelWrapper = styled('span')<LabelProps>(({ theme, color }) => ({
  padding: theme.spacing(0.5, 1),
  fontSize: theme.typography.pxToRem(13),
  borderRadius: theme.general.borderRadius,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: theme.spacing(3),
  backgroundColor: 'white',
  border: 'solid 0.5px',
  borderColor: color,
  color: 'black',
}));

const OutLinedLabel: FC<LabelProps> = ({
  className,
  color = 'secondary',
  children,
  ...rest
}) => {
  return (
    <LabelWrapper color={color} className={'MuiLabel-' + color} {...rest}>
      {children}
    </LabelWrapper>
  );
};

OutLinedLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default OutLinedLabel;
