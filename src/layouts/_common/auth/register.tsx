import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { useSearchParams, useRouter } from 'src/routes/hooks';
// assets
import { countries } from 'src/assets/data';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
// locales
import { useLocales } from 'src/locales';
// ----------------------------------------------------------------------

const authinputStyle = {
    bgcolor: '#0C1221',
    '& fieldset': {
        display: 'none'
    },
    borderRadius: '3px',
    'input::placeholder': {
        color: '#384359'
    }
};

type Props = {
    onLoginStatus: VoidFunction;
    onHandleClose: VoidFunction;
};

export default function JwtRegisterView({ onLoginStatus, onHandleClose }: Props) {
    const { t } = useLocales();

    const { register } = useAuthContext();

    const router = useRouter();

    const { enqueueSnackbar } = useSnackbar();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get('returnTo');

    const password = useBoolean();

    const isMdUp = useResponsive('up', 'md');

    // const _roles = ['EUR', 'USD', 'GBP', 'AUD', 'ARS', 'BRL', 'MAD'];

    const RegisterSchema = Yup.object().shape({
        firstname: Yup.string().required('Prénom required'),
        lastname: Yup.string().required('Nom required'),
        country: Yup.string().required('Choose a Nation'),
        username: Yup.string().required("Nom d'utilisateur a required"),
        email: Yup.string().required('E-mail is required').email('Email must be a valid email address'),
        password: Yup.string().required('Mot de passe is required'),
        confirmNewPassword: Yup.string().oneOf([Yup.ref('password')], 'Mot de passe must match'),
        phonenumber: Yup.string().required('Numéro de téléphone a required')
    });

    const defaultValues = {
        firstname: '',
        lastname: '',
        country: '',
        username: '',
        email: '',
        password: '',
        phonenumber: ''
    };

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues
    });

    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await register?.(
                data.email,
                data.password,
                data.firstname,
                data.lastname,
                data.username,
                data.country,
                data.phonenumber
            );

            router.push(returnTo || PATH_AFTER_LOGIN);
        } catch (error) {
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
                        <Typography>{t('header.register')}</Typography>
                    </>
                ) : (
                    <>
                        <Box sx={{ width: '20px', height: '50px', bgcolor: '#D9B80B', marginRight: 2 }} />
                        <Stack direction="row" flexGrow={1} justifyContent="space-evenly">
                            <Box component="img" src="/assets/icons/auth/loginHome.svg" onClick={onHandleClose} />
                            <Stack direction="row" sx={{ position: 'relative' }}>
                                <Button
                                    sx={{
                                        bgcolor: '#1E2738',
                                        borderRadius: 0,
                                        fontWeight: 600,
                                        pr: '20px'
                                    }}
                                    onClick={onLoginStatus}
                                >
                                    {t('header.register')}
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
                                        bgcolor: '#D9B80B',
                                        zIndex: 1,
                                        borderRadius: 0,
                                        color: '#0C1221',
                                        px: 3
                                    }}
                                >
                                    {t('header.register')}
                                </Button>
                            </Stack>
                            <Box component="img" src="/assets/icons/auth/bx_x.svg" onClick={onHandleClose} />
                        </Stack>
                    </>
                )}
            </Stack>

            <Stack spacing={1.5} p={8}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Stack spacing={0.5}>
                        <Typography variant="caption">{t('register.firstname')}</Typography>
                        <RHFTextField
                            size="small"
                            name="firstname"
                            placeholder={t('register.firstname')}
                            sx={authinputStyle}
                        />
                    </Stack>
                    <Stack spacing={0.5}>
                        <Typography variant="caption">{t('register.lastname')}</Typography>
                        <RHFTextField
                            size="small"
                            name="lastname"
                            placeholder={t('register.lastname')}
                            sx={authinputStyle}
                        />
                    </Stack>
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.username')}</Typography>
                    <RHFTextField
                        size="small"
                        name="username"
                        autoComplete="off"
                        placeholder={t('register.username')}
                        sx={authinputStyle}
                    />
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.email')}</Typography>
                    <RHFTextField size="small" name="email" placeholder={t('register.email')} sx={authinputStyle} />
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('login.password')}</Typography>
                    <RHFTextField
                        size="small"
                        autoComplete="new-password"
                        name="password"
                        placeholder={t('login.password')}
                        sx={authinputStyle}
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
                    />
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.confirm_password')}</Typography>
                    <RHFTextField
                        size="small"
                        autoComplete="new-password"
                        name="confirmNewPassword"
                        placeholder={t('register.confirm_password')}
                        sx={authinputStyle}
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
                    />
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.nation')}</Typography>
                    <RHFAutocomplete
                        name="country"
                        placeholder={t('register.nation')}
                        size="small"
                        sx={authinputStyle}
                        options={countries.map((country) => country.label)}
                        getOptionLabel={(option) => option}
                        renderOption={(props, option) => {
                            const { code, label, phone } = countries.filter((country) => country.label === option)[0];

                            if (!label) {
                                return null;
                            }

                            return (
                                <li {...props} key={label}>
                                    <Iconify
                                        key={label}
                                        icon={`circle-flags:${code.toLowerCase()}`}
                                        width={28}
                                        sx={{ mr: 1 }}
                                    />
                                    {label} ({code}) +{phone}
                                </li>
                            );
                        }}
                    />
                </Stack>

                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.phonenumber')}</Typography>
                    <RHFTextField
                        size="small"
                        name="phonenumber"
                        autoComplete="off"
                        placeholder={t('register.phonenumber')}
                        sx={authinputStyle}
                    />
                </Stack>

                <Stack direction="row">
                    <Checkbox />
                    <Typography
                        sx={{
                            color: '#4D586C'
                        }}
                        variant="caption"
                    >
                        {t('register.accept_content')}
                    </Typography>
                </Stack>

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
                        {t('header.register')}
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
                        {t('header.login')}
                    </Typography>
                </Stack>
                {/* <LoadingButton
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Create account
                </LoadingButton> */}
            </Stack>
        </FormProvider>
    );
}
