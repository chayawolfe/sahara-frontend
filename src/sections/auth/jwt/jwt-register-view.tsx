import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
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

// ----------------------------------------------------------------------

export default function JwtRegisterView() {
    const { register } = useAuthContext();

    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState('');

    const searchParams = useSearchParams();

    const returnTo = searchParams.get('returnTo');

    const password = useBoolean();

    const _roles = ['EUR', 'USD', 'GBP', 'AUD', 'ARS', 'BRL', 'MAD'];

    const RegisterSchema = Yup.object().shape({
        firstname: Yup.string().required('First name required'),
        lastname: Yup.string().required('Last name required'),
        country: Yup.string().required('Choose a country'),
        username: Yup.string().required('Username a required'),
        currency: Yup.string().required('Currency a required'),
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        password: Yup.string().required('Password is required')
    });

    const defaultValues = {
        firstname: '',
        lastname: '',
        country: '',
        username: '',
        currency: '',
        email: '',
        password: ''
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
        console.log(data, 'console log');
        try {
            await register?.(
                data.email,
                data.password,
                data.firstname,
                data.lastname,
                data.username,
                data.country,
                data.currency
            );

            router.push(returnTo || PATH_AFTER_LOGIN);
        } catch (error) {
            console.error(error);
            // reset();
            setErrorMsg(typeof error === 'string' ? error : error.message);
        }
    });

    const renderHead = (
        <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
            <Typography variant="h4">Get started absolutely free</Typography>

            <Stack direction="row" spacing={0.5}>
                <Typography variant="body2"> Already have an account? </Typography>

                <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
                    Sign in
                </Link>
            </Stack>
        </Stack>
    );

    const renderTerms = (
        <Typography
            component="div"
            sx={{
                color: 'text.secondary',
                mt: 2.5,
                typography: 'caption',
                textAlign: 'center'
            }}
        >
            {'By signing up, I agree to '}
            <Link underline="always" color="text.primary">
                Terms of Service
            </Link>
            {' and '}
            <Link underline="always" color="text.primary">
                Privacy Policy
            </Link>
            .
        </Typography>
    );

    const renderForm = (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
                {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField name="firstname" label="First name" />
                    <RHFTextField name="lastname" label="Last name" />
                </Stack>

                <RHFTextField name="email" label="Email address" />
                <RHFAutocomplete
                    name="country"
                    label="Country"
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
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField name="username" autoComplete="off" label="Username" />
                    <RHFAutocomplete
                        name="currency"
                        label="currency"
                        autoHighlight
                        options={_roles.map((option) => option)}
                        renderOption={(props, option) => (
                            <li {...props} key={option}>
                                {option}
                            </li>
                        )}
                    />
                </Stack>

                <RHFTextField
                    autoComplete="new-password"
                    name="password"
                    label="Password"
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

                <LoadingButton
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Create account
                </LoadingButton>
            </Stack>
        </FormProvider>
    );

    return (
        <>
            {renderHead}

            {renderForm}

            {renderTerms}
        </>
    );
}
