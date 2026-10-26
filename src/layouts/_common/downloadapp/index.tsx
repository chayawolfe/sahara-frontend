// @mui
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// components
// import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
//
import { useLocation, useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
    const drawer = useBoolean();

    const isMdUp = useResponsive('up', 'md');

    const router = useLocation();

    const navigate = useNavigate();
    const handleClose = () => {
        drawer.onFalse();
        if (router.pathname.split('/')[1] === 'download') {
            navigate('/');
            drawer.onFalse();
        }
    };
    useEffect(() => {
        if (router.pathname.split('/')[1] === 'download') {
            drawer.onTrue();
        }
    }, [drawer, router.pathname]);

    console.log('=======================download23456========================');

    return (
        <>
            <Stack direction="row" spacing={1} alignItems="center" onClick={drawer.onTrue}>
                {isMdUp && (
                    <Tooltip title="App Download?" arrow>
                        <IconButton
                            size="small"
                            sx={{
                                p: 0.8,
                                bgcolor: '#0C1221',
                                borderRadius: 0.75,
                                width: '69px',
                                display: 'flex',
                                gap: 1
                            }}
                        >
                            <Image
                                src="/assets/icons/navbar/ic_android.svg"
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
                            <Image
                                src="/assets/icons/navbar/ic_apple.svg"
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
                    </Tooltip>
                )}
            </Stack>

            <Drawer
                open={drawer.value}
                onClose={handleClose}
                anchor="right"
                PaperProps={{
                    sx: {
                        width: 1,
                        maxWidth: 293,
                        height: isMdUp ? 'calc(100vh - 80px)' : 'calc(100vh - 49px)',
                        top: isMdUp ? 80 : 49,
                        '& .css-jjtu05': { background: '#192333' },
                        backdropFilter: 'unset !important'
                    }
                }}
            >
                <Box
                    component="img"
                    src="/assets/icons/app/app_download.svg"
                    sx={{
                        cursor: 'pointer',
                        transition: (theme) =>
                            theme.transitions.create('color', {
                                duration: 250
                            })
                    }}
                />
            </Drawer>
        </>
    );
}
