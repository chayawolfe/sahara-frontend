import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// config
import { ASSETS_API } from 'src/config-global';
import { useNavigate } from 'react-router';

// components
import Image from 'src/components/image';
import { useSettingsContext } from 'src/components/settings';
//
import { HeaderShadow } from '../_common';

// import footer icons

export const footerHeadIcons = [`${ASSETS_API}/footer/icons/flag.svg`, `${ASSETS_API}/footer/icons/solution.svg`];

// ----------------------------------------------------------------------

function NavHorizontal() {
    const theme = useTheme();

    const navigate = useNavigate();

    const settings = useSettingsContext();

    // const navData = useNavData();

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
                    <Stack direction="row">
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ borderRadius: '5px', px: 2, py: 1 }}
                        >
                            <Image src={footerHeadIcons[0]} />
                            <Typography>Français</Typography>
                        </Stack>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ borderRadius: '5px', px: 2, py: 1, cursor: 'pointer' }}
                            onClick={() => navigate('/contact-us/contacts')}
                        >
                            <Image src={footerHeadIcons[1]} />
                            <Typography>Soutien</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center" sx={{ borderRadius: '5px', px: 2, py: 1 }}>
                        <Link href="#" color="#C5C7CB">
                            Chances de gagner
                        </Link>
                        <PlayArrowIcon />
                    </Stack>
                </Toolbar>
            </Container>
            <HeaderShadow />
        </AppBar>
    );
}

export default memo(NavHorizontal);
