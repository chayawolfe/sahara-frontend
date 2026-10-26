import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
// utils
import { fData } from 'src/utils/format-number';
// assets
import { countries } from 'src/assets/data';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFUploadAvatar, RHFAutocomplete } from 'src/components/hook-form';
// auth
import { useAuthContext } from 'src/auth/hooks';
// apis
import { quickUpdateUser } from 'src/api/user';
// ----------------------------------------------------------------------

export default function ProfileAccount() {
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useAuthContext();
    const UpdateUserSchema = Yup.object().shape({
        username: Yup.string().optional(),
        firstname: Yup.string().optional(),
        lastname: Yup.string().optional(),
        email: Yup.string().optional().email('Email must be a valid email address'),
        avatar: Yup.mixed<any>().nullable().optional(),
        country: Yup.string().optional()
    });

    const defaultValues: {
        username: string;
        email: string;
        avatar: any;
        firstname: string;
        lastname: string;
        birthday: string;
        password: string;
        country: string;
        address: string;
        city: string;
        state: string;
        phonenumber: string;
    } = {
        username: user?.username || '',
        email: user?.email || '',
        avatar: user?.avatar.split('http').length === 1 ? `${ASSETS_API}/${user?.avatar}` : user?.avatar || null,
        firstname: user?.firstname || null,
        lastname: user?.lastname || null,
        birthday: user?.createdAt || '',
        password: user?.password || '',
        country: user?.country || '',
        address: user?.address || '',
        city: user?.city || '',
        state: user?.state || '',
        phonenumber: user?.phonenumber || ''
    };
    const methods = useForm({
        resolver: yupResolver(UpdateUserSchema),
        defaultValues
    });
    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await quickUpdateUser(user?.id, data);
            enqueueSnackbar('Update success!');
        } catch (error) {
            console.error(error);
        }
    });

    const handleDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file)
            });

            if (file) {
                setValue('avatar', newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={3}>
                <Grid xs={12} md={3}>
                    <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
                        <RHFUploadAvatar
                            name="avatar"
                            maxSize={3145728}
                            onDrop={handleDrop}
                            helperText={
                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 3,
                                        mx: 'auto',
                                        display: 'block',
                                        textAlign: 'center',
                                        color: 'text.disabled'
                                    }}
                                >
                                    Allowed *.jpeg, *.jpg, *.png, *.gif
                                    <br /> max size of {fData(3145728)}
                                </Typography>
                            }
                        />

                        <Stack spacing={2} sx={{ mt: 3 }}>
                            <Stack
                                spacing={2}
                                direction="row"
                                justifyContent="space-between"
                                sx={{ bgcolor: 'background.default', p: 2, borderRadius: 1 }}
                            >
                                <Stack spacing={1} direction="row" alignItems="center">
                                    <Iconify icon="solar:wallet-money-bold-duotone" width={24} />
                                    <Typography color="textSecondary">Balance</Typography>
                                </Stack>
                                <Stack spacing={1} direction="row" alignItems="center">
                                    <Typography>{user?.balance || 0.0}</Typography>
                                    <Typography color="textSecondary">EUR</Typography>
                                </Stack>
                            </Stack>
                            <Button fullWidth variant="contained" color="primary">
                                Deposit
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
                <Grid xs={12} md={4.5}>
                    <Card>
                        <CardHeader
                            title="User Profile"
                            titleTypographyProps={{
                                color: 'textSecondary'
                            }}
                        />
                        <Stack rowGap={3} columnGap={2} sx={{ p: 3 }}>
                            <RHFTextField name="username" label="Username" />
                            <RHFTextField name="password" label="Password" type="password" />
                            <RHFTextField name="firstname" label="firstname" />
                            <RHFTextField name="lastname" label="lastname" />
                            <RHFTextField name="email" label="Email Address" />
                            <RHFTextField name="phonenumber" label="Phone Number" />
                        </Stack>
                    </Card>
                </Grid>
                <Grid xs={12} md={4.5}>
                    <Card>
                        <CardHeader
                            title="Personal Info"
                            titleTypographyProps={{
                                color: 'textSecondary'
                            }}
                        />
                        <Stack rowGap={3} columnGap={2} sx={{ p: 3 }}>
                            <RHFTextField name="birthday" label="Birth Date" />
                            <RHFAutocomplete
                                name="country"
                                label="Country"
                                options={countries.map((country) => country.label)}
                                getOptionLabel={(option) => option}
                                renderOption={(props, option) => {
                                    const { code, label, phone } = countries.filter(
                                        (country) => country.label === option
                                    )[0];

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
                            <RHFTextField name="state" label="State/Region" />
                            <RHFTextField name="city" label="City" />
                            <RHFTextField name="address" label="Address" />

                            <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
                                Save Changes
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
