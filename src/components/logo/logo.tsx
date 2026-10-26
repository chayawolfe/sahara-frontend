import { forwardRef } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Link, Stack } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
    disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
    const logoIcon = (
        <Box
            component="img"
            src="/logo/hand.svg"
            sx={{ width: 40, height: 40, cursor: 'pointer', }}
        />
    );

    const logoText = (
        <Box
            component="img"
            src="/logo/logo.svg"
            sx={{ height: 30, cursor: 'pointer' }}
        />
    );

    const logo = (
        <Stack direction="row" alignItems="center" sx={{ ...sx }} {...other}>
            {logoIcon}
            {logoText}
        </Stack>
    );


    if (disabledLink) {
        return logo;
    }

    return (
        <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
            {logo}
        </Link>
    );
});

export default Logo;
