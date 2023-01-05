import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

interface LabelProps {
  className?: string;
  color: string;
  children?: ReactNode;
}

const LabelWrapper = styled('span')<LabelProps>(
  ({ theme, color }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: ${theme.spacing(0.5, 1)};
      font-size: ${theme.typography.pxToRem(13)};
      border-radius: ${theme.general.borderRadius};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: ${theme.spacing(3)};
      background-color: ${color};
      color: white}
      }
`
);

const Label: FC<LabelProps> = ({
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

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default Label;
