import { useState, useRef } from 'react';

// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoolean } from 'src/hooks/use-boolean';
import { useSnackbar } from 'src/components/snackbar';
import { mailsend } from 'src/api/user';

const defaultValues: any = {
    name: '',
    surname: '',
    email: '',
    nation: '',
    contact: '',
    phoneNumber: '',
    message: ''
};

const Contacts = () => {
    const mdUp = useResponsive('up', 'md');

    const isSubmitting = useBoolean(false);

    const { enqueueSnackbar } = useSnackbar();

    const [phone, setPhone] = useState('');

    const interval = useRef<boolean>(true);

    const [mailinfo, setMailInfo] = useState<any>(defaultValues);

    const handleChange = (newPhone: any) => {
        matchIsValidTel(newPhone);
        setPhone(newPhone);
        setMailInfo({ ...mailinfo, phoneNumber: newPhone });
    };

    const TextFieldStyle = {
        bgcolor: 'background.paper',
        '& fieldset': {
            borderRadius: 0
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (interval.current) {
                isSubmitting.onTrue();
                const res = await mailsend(mailinfo);
                if (res) {
                    enqueueSnackbar("We've received your request, We will update you soon.", {
                        variant: 'success'
                    });
                    setMailInfo(defaultValues);
                    interval.current = false;
                    isSubmitting.onFalse();
                    setTimeout(() => {
                        interval.current = true;
                    }, 10000);
                }
            } else {
                enqueueSnackbar('You are trying to send many messages now!', { variant: 'error' });
            }
        } catch (error) {
            isSubmitting.onFalse();
            console.log(error);
        }
    };

    return (
        <Stack spacing={3} alignItems={mdUp ? 'flex-start' : 'center'} component="form" onSubmit={handleSubmit}>
            <Typography variant="h3">Affiliations</Typography>
            <Stack spacing={2}>
                <Typography color="textSecondary">Do you want to work with our iGaming services?</Typography>
                <Typography color="textSecondary">Fill out the form to be contacted.</Typography>
            </Stack>
            <Grid container xs={12} sm={12} spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Name</Typography>
                        <TextField
                            id="outlined"
                            required
                            sx={TextFieldStyle}
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, name: e.target.value });
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Surname</Typography>
                        <TextField
                            required
                            id="outlined"
                            type="text"
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, surname: e.target.value });
                            }}
                            sx={TextFieldStyle}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Email address</Typography>
                        <TextField
                            id="outlined"
                            type="email"
                            required
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, email: e.target.value });
                            }}
                            sx={TextFieldStyle}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Telephone number</Typography>
                        <MuiTelInput
                            defaultCountry="IT"
                            forceCallingCode
                            value={phone}
                            required
                            onChange={handleChange}
                            sx={{
                                bgcolor: 'background.paper',
                                '& fieldset': {
                                    borderRadius: 0
                                }
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Nation</Typography>
                        <TextField
                            id="outlined"
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, nation: e.target.value });
                            }}
                            required
                            sx={TextFieldStyle}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>ID Skype / Telegram</Typography>
                        <TextField
                            required
                            id="outlined"
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, contact: e.target.value });
                            }}
                            sx={TextFieldStyle}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Your message</Typography>
                        <TextField
                            multiline
                            rows={10}
                            onChange={(e) => {
                                setMailInfo({ ...mailinfo, message: e.target.value });
                            }}
                            id="outlined"
                            required
                            type="text"
                            sx={TextFieldStyle}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <LoadingButton
                        variant="contained"
                        rel="noopener"
                        sx={{
                            bgcolor: 'rgba(13, 73, 204, 0.4)',
                            border: '1px solid #0D49CC',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: 18,
                            width: '100%'
                        }}
                        type="submit"
                        loading={isSubmitting.value}
                    >
                        Submit
                    </LoadingButton>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Contacts;
