import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// components
import Logo from 'src/components/logo';
import { NavSectionHorizontal } from 'src/components/nav-section';
import { useSettingsContext } from 'src/components/settings';
//
import { useNavData } from './config-navigation';
import { HeaderShadow } from '../_common';
// import NavTools from './nav-tools';

// ----------------------------------------------------------------------

function NavHorizontal() {
    const theme = useTheme();

    const settings = useSettingsContext();

    const navData = useNavData();

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                bgcolor: theme.palette.background.default
            }}
        >
            <Container maxWidth={settings.themeStretch && false} sx={{ px: '130px !important' }}>
                <Toolbar
                    sx={{
                        px: '0px !important',
                        display: 'flex',
                        justifyContent: 'space-between',
                        '& a .MuiListItemText-root span': {
                            fontSize: '15px !important',
                            fontWeight: 700,
                            color: 'white'
                        },
                        '& .MuiListItemText-root': {
                            margin: 0
                        },
                        '& a:nth-of-type(6) .MuiButtonBase-root': {
                            width: '65px'
                        }
                    }}
                >
                    {/* <Logo sx={{ mr: 2.5 }} /> */}
                    <NavSectionHorizontal data={navData} py={3} gap={0.5} />

                    {/* <NavTools /> */}
                </Toolbar>
            </Container>
            <HeaderShadow />
        </AppBar>
    );
}

export default memo(NavHorizontal);
