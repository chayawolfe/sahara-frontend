// @mui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useAuthContext } from 'src/auth/hooks';
// components

import { useSettingsContext } from 'src/components/settings';
import Logo from 'src/components/logo';
//

import { HEADER, NAV } from '../config-layout';

import NavTools from './nav-tools';
// import FreeSpin from '../_common/freespin';

// ----------------------------------------------------------------------

type Props = {
    onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
    const theme = useTheme();

    const { user } = useAuthContext();

    const settings = useSettingsContext();

    const isNavHorizontal = settings.themeLayout === 'horizontal';

    const isNavMini = settings.themeLayout === 'mini';

    const lgUp = useResponsive('up', 'lg');

    const offset = useOffSetTop(HEADER.H_DESKTOP);

    const offsetTop = offset && !isNavHorizontal;

    const renderContent = (
        <>
            <Logo />
            <NavTools />
        </>
    );

    return (
        <AppBar
            position={isNavHorizontal ? 'static' : 'fixed'}
            sx={{
                display: 'felx',
                alignItems: 'center',
                justifyContent: 'center',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
                    height: HEADER.H_DESKTOP,
                    ...(offsetTop && {
                        height: HEADER.H_DESKTOP_OFFSET
                    }),
                    ...(isNavHorizontal && {
                        width: 1,
                        bgcolor: 'background.default',
                        height: HEADER.H_DESKTOP_OFFSET,
                        borderBottom: `dashed 1px ${theme.palette.divider}`
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI + 1}px)`
                    })
                }),
                ...(!lgUp && {
                    background: '#1E2738',
                    position: 'sticky',
                    top: 0
                })
            }}
        >
            <Container maxWidth={settings.themeStretch && false} sx={{ px: '130px !important' }}>
                <Toolbar
                    sx={{
                        height: 1,
                        px: '0px !important',
                        display: 'felx',
                        justifyContent: 'space-between'
                    }}
                >
                    {renderContent}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
