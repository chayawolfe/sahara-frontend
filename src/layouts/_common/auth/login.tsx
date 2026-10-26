import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
// locales
import { useLocales } from 'src/locales';

type Props = {
    onLoginStatus: VoidFunction;
    onPassReset: VoidFunction;
    onHandleClose: VoidFunction;
};

const Login = ({ onLoginStatus, onPassReset, onHandleClose }: Props) => {
    const { t } = useLocales();

    const { login } = useAuthContext();

    const { enqueueSnackbar } = useSnackbar();

    const password = useBoolean();

    const isMdUp = useResponsive('up', 'md');

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email and Username is required'),
        password: Yup.string().required('Password is required')
    });

    const defaultValues = {
        email: '',
        password: ''
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log(data, 'login.info');
            await login?.(data.email, data.password);
        } catch (error) {
            reset();
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    bgcolor: '#0C1221'
                }}
            >
                {isMdUp ? (
                    <>
                        <Box sx={{ width: '20px', height: '50px', bgcolor: '#D9B80B', marginRight: 2 }} />
                        <Typography>{t('header.login')}</Typography>
                    </>
                ) : (
                    <>
                        <Box sx={{ width: '20px', height: '50px', bgcolor: '#D9B80B', marginRight: 2 }} />
                        <Stack direction="row" flexGrow={1} justifyContent="space-evenly">
                            <Box component="img" src="/assets/icons/auth/loginHome.svg" onClick={onHandleClose} />
                            <Stack direction="row" sx={{ position: 'relative' }}>
                                <Button
                                    sx={{
                                        bgcolor: '#D9B80B',
                                        borderRadius: 0,
                                        color: '#0C1221',
                                        fontWeight: 600,
                                        pr: '20px'
                                    }}
                                >
                                    {t('header.login')}
                                </Button>
                                <Box
                                    sx={{
                                        transform: 'skew(-20deg)',
                                        width: '15px',
                                        height: '40px',
                                        zIndex: 2,
                                        background: '#0C1221',
                                        position: 'absolute',
                                        right: '44%',
                                        top: '-2px'
                                    }}
                                />
                                <Button
                                    sx={{
                                        bgcolor: '#1E2738',
                                        zIndex: 1,
                                        borderRadius: 0,
                                        px: 3
                                    }}
                                    onClick={onLoginStatus}
                                >
                                    S’incrire
                                </Button>
                            </Stack>
                            <Box component="img" src="/assets/icons/auth/bx_x.svg" onClick={onHandleClose} />
                        </Stack>
                    </>
                )}
            </Stack>

            <Stack spacing={1} p={8}>
                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('login.email_username')}</Typography>
                    <RHFTextField
                        size="small"
                        name="email"
                        sx={{
                            bgcolor: '#0C1221',
                            '& fieldset': {
                                display: 'none'
                            },
                            borderRadius: '3px',
                            'input::placeholder': {
                                color: '#384359'
                            }
                        }}
                        placeholder={t('login.email_username')}
                        autoComplete="off"
                    />
                </Stack>

                <Stack spacing={0.5} mt={1}>
                    <Typography variant="caption">{t('login.password')}</Typography>

                    <RHFTextField
                        name="password"
                        size="small"
                        type={password.value ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={password.onToggle} edge="end">
                                        <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            bgcolor: '#0C1221',
                            '& fieldset': {
                                display: 'none'
                            },
                            borderRadius: '3px',
                            'input::placeholder': {
                                color: '#384359'
                            }
                        }}
                        placeholder={t('login.password')}
                    />
                </Stack>

                <Link
                    color="#4D586C"
                    variant="caption"
                    sx={{ cursor: 'pointer' }}
                    textAlign="right"
                    onClick={onPassReset}
                >
                    {t('login.forgot_faq')}
                </Link>

                <Stack direction="row" spacing={2} mt={1}>
                    <IconButton
                        size="small"
                        sx={{
                            p: 1,
                            bgcolor: '#0C1221',
                            borderRadius: 0.75,
                            display: 'flex',
                            gap: 1
                        }}
                        onClick={onLoginStatus}
                    >
                        <ArrowBackIcon
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
                    <LoadingButton
                        fullWidth
                        color="primary"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        sx={{ bgcolor: '#D9B80B' }}
                    >
                        {t('header.login')}
                    </LoadingButton>
                </Stack>

                <Stack direction="row" spacing={1} mt={2} justifyContent="center">
                    <Typography variant="caption">{t('login.account_faq')}</Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#D9B80B',
                            cursor: 'pointer'
                        }}
                        onClick={onLoginStatus}
                    >
                        {t('header.register')}
                    </Typography>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default Login;
