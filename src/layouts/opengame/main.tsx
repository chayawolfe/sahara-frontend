// @mui
import Box, { BoxProps } from '@mui/material/Box';
// hooks
import { useLocation } from 'react-router';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { useSettingsContext } from 'src/components/settings';
//
import { HEADER, NAV } from '../config-layout';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }: BoxProps) {
    const settings = useSettingsContext();

    const lgUp = useResponsive('up', 'lg');

    const router = useLocation();

    const isNavHorizontal = settings.themeLayout === 'horizontal';

    const isNavMini = settings.themeLayout === 'mini';

    if (isNavHorizontal) {
        return (
            <Box
                component="main"
                className={router.pathname.split('/')[1]}
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    pt: 3,
                    pb: 10,
                    ...(lgUp && {
                        pt: 5,
                        pb: 0
                    })
                }}
            >
                {children}
            </Box>
        );
    }

    return (
        <Box
            component="main"
            className={router.pathname.split('/')[1]}
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                py: `${HEADER.H_MOBILE + SPACING}px`,
                ...(lgUp && {
                    px: 2,
                    py: `${HEADER.H_DESKTOP + SPACING}px`,
                    width: `calc(100% - ${NAV.W_VERTICAL}px)`,
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI}px)`
                    })
                }),
                ...sx
            }}
            {...other}
        >
            {children}
        </Box>
    );
}
