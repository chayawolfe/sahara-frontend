import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
// locales
import { useLocales } from 'src/locales';

type Props = {
    onLoginStatus: VoidFunction;
};

const ResetComponent = ({ onLoginStatus }: Props) => {
    const { t } = useLocales();

    const { enqueueSnackbar } = useSnackbar();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email and Username is required').email('Email must be a valid email address')
    });

    const defaultValues = {
        email: ''
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
            // await login?.(data.email, data.password);
            enqueueSnackbar('Success', { variant: 'success' });
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
                <Box sx={{ width: '20px', height: '50px', bgcolor: '#D9B80B', marginRight: 2 }} />
                <Typography>{t('reset.reset_title')}</Typography>
            </Stack>

            <Stack spacing={1} p={8}>
                <Stack spacing={0.5}>
                    <Typography variant="caption">{t('register.email')}</Typography>
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
                        placeholder={t('register.email')}
                        autoComplete="off"
                    />
                </Stack>

                <Typography color="#4D586C" variant="caption" textAlign="center">
                    {t('reset.explain')}
                </Typography>

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
                        {t('reset.reset')}
                    </LoadingButton>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ResetComponent;
