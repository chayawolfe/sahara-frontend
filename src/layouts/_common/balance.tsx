// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';

// auth
import { useAuthContext } from 'src/auth/hooks';
// untils
import { fcustomCurrency } from 'src/utils/format-number';

const Balance = () => {
    const { user } = useAuthContext();
    return (
        <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{
                bgcolor: '#0C1221',
                height: { md: 36, xs: 30 },
                px: { md: 1.5, xs: 0.5 },
                borderRadius: { md: 1, xs: 0.8 }
            }}
        >
            <Iconify
                icon="solar:wallet-money-bold-duotone"
                sx={{
                    color: 'text.secondary',
                    width: { xs: '16px', md: '25px' }
                }}
            />
            <Stack sx={{ borderRadius: 1 }} direction="row">
                <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                    {fcustomCurrency(user?.balance) || 0.0}
                </Typography>
                <Typography
                    component="span"
                    variant="overline"
                    color="textSecondary"
                    sx={{ pl: 0.5, fontSize: { xs: '10px', md: '12px' } }}
                >
                    TND
                </Typography>
            </Stack>
            {/* <Tooltip title="Deposit">
                <IconButton size="small" component={RouterLink} href={paths.user.root}>
                    <Iconify icon="solar:double-alt-arrow-up-bold-duotone" />
                </IconButton>
            </Tooltip> */}
        </Stack>
    );
};

export default Balance;
