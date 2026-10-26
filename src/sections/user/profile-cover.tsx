// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
// types
import { IUserProfileCover } from 'src/types/user';
// theme
// import { bgGradient } from 'src/theme/css';
// config
import { ASSETS_API } from 'src/config-global';
// ----------------------------------------------------------------------

export default function ProfileCover({ name, avatarUrl, role }: IUserProfileCover) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                // ...bgGradient({
                //     color: alpha(theme.palette.primary.darker, 0.625),
                //     imgUrl: `${ASSETS_API}/account/bg.png`
                // }),
                height: 1,
                color: 'common.white',
                background: `url(${ASSETS_API}/account/bg.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top'
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    left: { md: 24 },
                    bottom: { md: 24 },
                    zIndex: { md: 10 },
                    pt: { xs: 6, md: 0 },
                    position: { md: 'absolute' }
                }}
            >
                <Avatar
                    src={`${avatarUrl}`}
                    alt={name}
                    sx={{
                        mx: 'auto',
                        width: { xs: 64, md: 128 },
                        height: { xs: 64, md: 128 },
                        border: `solid 2px ${theme.palette.common.white}`
                    }}
                />

                <ListItemText
                    sx={{
                        mt: 3,
                        ml: { md: 3 },
                        textAlign: { xs: 'center', md: 'unset' }
                    }}
                    primary={name}
                    primaryTypographyProps={{
                        typography: 'h4'
                    }}
                    secondaryTypographyProps={{
                        mt: 0.5,
                        color: 'inherit',
                        component: 'span',
                        typography: 'body2',
                        sx: { opacity: 0.48 }
                    }}
                />
            </Stack>
        </Box>
    );
}
