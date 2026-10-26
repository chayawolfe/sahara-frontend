import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// components
import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';
import { useNavigate } from 'react-router';
//
import { HeaderShadow } from '../_common';
import NavTools from './nav-tools';
import GameInfo from './game-info';
import { useGameContext } from '../../sections/casino/context';

// ----------------------------------------------------------------------

function NavHorizontal() {
    const theme = useTheme();

    const navigate = useNavigate();

    const settings = useSettingsContext();

    const { gameInformation } = useGameContext();

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                bgcolor: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Button
                variant="contained"
                startIcon={<PlayArrowIcon sx={{ transform: 'rotate(180deg)' }} />}
                size="medium"
                sx={{
                    borderRadius: 0,
                    px: 5,
                    bgcolor: '#D9B80B',
                    whiteSpace: 'nowrap',
                    color: '#0C1221',
                    fontWeight: 700
                }}
                onClick={() => navigate(gameInformation.beforePath)}
            >
                Revenir
            </Button>
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <Toolbar
                    sx={{
                        px: '0px !important',
                        display: 'flex',
                        justifyContent: 'space-between',
                        '& a .MuiListItemText-root span': {
                            fontSize: '12px !important',
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
                    <GameInfo />
                    <Logo sx={{ mr: 2.5 }} />

                    {/* <NavSectionHorizontal data={navData} p={3} /> */}

                    <NavTools />
                </Toolbar>
            </Container>
            <HeaderShadow />
        </AppBar>
    );
}

export default memo(NavHorizontal);
