// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { useRouter } from 'src/routes/hooks';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Image from 'src/components/image';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------

const OPTIONS = [
    {
        label: 'Home',
        linkTo: '/'
    },
    {
        label: 'Profile',
        linkTo: paths.user.profile
    }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const router = useRouter();

    const { user } = useAuthContext();

    const { logout } = useAuthContext();

    const popover = usePopover();

    const handleLogout = async () => {
        try {
            await logout();
            popover.onClose();
            router.replace('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleClickItem = (path: string) => {
        popover.onClose();
        router.push(path);
    };

    return (
        <>
            {/* <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.05)}
                onClick={popover.onOpen}
                sx={{
                    width: 40,
                    height: 40,
                    background: (theme) => alpha(theme.palette.grey[500], 0.08),
                    ...(popover.open && {
                        background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    })
                }}
            > */}
            <IconButton
                size="small"
                onClick={popover.onOpen}
                sx={{
                    p: 0.8,
                    bgcolor: { md: '#0C1221' },
                    borderRadius: 0.75,
                    display: 'flex',
                    gap: 1
                }}
            >
                <Image
                    src="/assets/icons/navbar/user_account.svg"
                    sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: (theme) =>
                            theme.transitions.create('color', {
                                duration: 250
                            }),
                        '&:hover': {
                            color: 'text.primary'
                        }
                    }}
                />
            </IconButton>

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
                <Box sx={{ p: 2, pb: 1.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {user?.username}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {user?.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                    {OPTIONS.map((option) => (
                        <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <MenuItem onClick={handleLogout} sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}>
                    Logout
                </MenuItem>
            </CustomPopover>
        </>
    );
}
