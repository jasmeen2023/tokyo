import {
  Box,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  useTheme,
} from '@mui/material';
import { Avatar } from '@mui/material';

import Link from '@/components/Link';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
          color: ${theme.palette.text.primary};
          display: flex;
          text-decoration: none;
          margin: 0 auto;
          font-weight: ${theme.typography.fontWeightBold};
  `
);

const LogoSignWrapper = styled(Box)(
  () => `
          width: 615px;
          height: 303px;
  `
);

const LogoSign = styled(Box)(
  ({ theme }) => `
          background: ${theme.general.reactFrameworkColor};
          width: 18px;
          height: 18px;
          border-radius: ${theme.general.borderRadiusSm};
          position: relative;
          transform: rotate(45deg);
          top: 3px;
          left: 17px;
  
          &:after, 
          &:before {
              content: "";
              display: block;
              width: 18px;
              height: 18px;
              position: absolute;
              top: -1px;
              right: -20px;
              transform: rotate(0deg);
              border-radius: ${theme.general.borderRadiusSm};
          }
  
          &:before {
              background: ${theme.palette.primary.main};
              right: auto;
              left: 0;
              top: 20px;
          }
  
          &:after {
              background: ${theme.palette.secondary.main};
          }
  `
);

const LogoSignInner = styled(Box)(
  ({ theme }) => `
          width: 16px;
          height: 16px;
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 5;
          border-radius: ${theme.general.borderRadiusSm};
          background: ${theme.header.background};
  `
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100],
  },
}));

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

function LogoIcon() {
  const theme = useTheme();

  return (
    <TooltipWrapper
      title='Tokyo Free Black Next.js Typescript Admin Dashboard'
      arrow
    >
      <LogoWrapper href='/'>
        {/* <Badge
            sx={{
              '.MuiBadge-badge': {
                fontSize: theme.typography.pxToRem(11),
                right: -2,
                top: 8,
              },
            }}
            overlap='circular'
            color='success'
            badgeContent='1.0'
          > */}
        {/* <LogoSignWrapper> */}
        {/* <LogoSign>
                <LogoSignInner />
              </LogoSign> */}

        <AvatarWrapper src='/logo/svg/freedome-logo.svg' />
        {/* <FreedomLogo /> */}
        {/* <Image
          src='/logo/image/logo.png'
          alt='Monkey&Banana'
          width={70}
          height={70}
        ></Image> */}
        {/* </LogoSignWrapper> */}
        {/* </Badge> */}
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default LogoIcon;
