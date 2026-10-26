import { useState, useEffect } from 'react';

// @mui
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';

// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// auth
// components
import Image from 'src/components/image';
// locales
import { useLocales } from 'src/locales';

import AuthLogin from './auth/login';
import AuthReset from './auth/reset';
import AuthRegister from './auth/register';
import DownloadAPP from './downloadapp/index';
import { useSportsContext } from '../../sections/casino/sportsbook';

const AuthInput = () => {
    const { t } = useLocales();

    const isMdUp = useResponsive('up', 'md');

    const { activeLogin, setLogin } = useSportsContext();

    const [open, setOpen] = useState(false);

    const [loginStatus, setLoginStatus] = useState('login');

    const handleClose = () => {
        setOpen(false);

        setLogin('fail');
    };

    const loginOpen = (data: string) => {
        setOpen(true);

        setLoginStatus(data);
    };

    useEffect(() => {
        if (activeLogin === 'login') {
            loginOpen('login');
        } else if (activeLogin === 'register') {
            loginOpen('register');
        }
    }, [activeLogin]);

    return (
        <>
            <Stack direction="row" spacing={1} alignItems="center">
                {isMdUp ? (
                    <>
                        <DownloadAPP />
                        <Tooltip title="Forgot Password?" arrow>
                            <IconButton
                                sx={{
                                    p: 1,
                                    bgcolor: '#0C1221',
                                    borderRadius: 0.75,
                                    height: 1
                                }}
                                onClick={() => loginOpen('reset')}
                            >
                                <Image
                                    src="/assets/icons/navbar/forgot.svg"
                                    sx={{
                                        color: 'text.secondary',
                                        cursor: 'pointer',
                                        transition: (theme) =>
                                            theme.transitions.create('color', {
                                                duration: 250
                                            }),
                                        '&:hover': {
                                            color: 'text.primary'
                                        },
                                        '& span': {
                                            display: 'flex !important'
                                        }
                                    }}
                                />
                            </IconButton>
                        </Tooltip>

                        <Button
                            variant="contained"
                            sx={{
                                height: 1,
                                px: 2.5,
                                borderRadius: 0.75,
                                bgcolor: '#D9B80B',
                                whiteSpace: 'nowrap',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                            onClick={() => loginOpen('login')}
                        >
                            {t('header.login')}
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                height: 1,
                                px: 2.5,
                                borderRadius: 0.75,
                                bgcolor: 'white',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                            onClick={() => loginOpen('register')}
                        >
                            {t('header.register')}
                        </Button>
                    </>
                ) : (
                    <>
                        <DownloadAPP />

                        <IconButton
                            sx={{
                                borderRadius: 0.75,
                                height: 25
                            }}
                            onClick={() => loginOpen('login')}
                        >
                            <Image
                                src="/assets/icons/app/user.svg"
                                sx={{
                                    color: 'text.secondary',
                                    cursor: 'pointer',
                                    transition: (theme) =>
                                        theme.transitions.create('color', {
                                            duration: 250
                                        }),
                                    '&:hover': {
                                        color: 'text.primary'
                                    },
                                    '& span': {
                                        display: 'flex !important'
                                    },
                                    '& img': {
                                        height: '20px'
                                    }
                                }}
                            />
                        </IconButton>
                    </>
                    // <Button
                    //     onClick={() => navigate('auth/login')}
                    //     sx={{ height: 1, px: 1.5, borderRadius: 0.75 }}
                    //     size="small"
                    //     variant="outlined"
                    //     startIcon={<Iconify icon="solar:login-2-bold-duotone" />}
                    // >
                    //     Login
                    // </Button>
                )}
            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                sx={{
                    '& form': { bgcolor: '#18202F' },
                    '& .MuiPaper-root': {
                        ...(!isMdUp && {
                            width: { xs: '100%' },
                            maxWidth: { xs: '100%' },
                            margin: { xs: 0 }
                        })
                    }
                }}
            >
                {loginStatus === 'login' ? (
                    <AuthLogin
                        onLoginStatus={() => loginOpen('register')}
                        onPassReset={() => loginOpen('reset')}
                        onHandleClose={handleClose}
                    />
                ) : (
                    (loginStatus === 'register' && (
                        <AuthRegister onLoginStatus={() => loginOpen('login')} onHandleClose={handleClose} />
                    )) || <AuthReset onLoginStatus={() => loginOpen('login')} />
                )}
            </Dialog>
        </>
    );
};

export default AuthInput;
