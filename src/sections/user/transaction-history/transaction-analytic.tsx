// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
// utils
import { fShortenNumber, fCurrency } from 'src/utils/format-number';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
    icon: string;
    title: string;
    total: number;
    percent: number;
    price: number;
    color?: string;
};

export default function TransactionAnalytic({ title, total, icon, color, percent, price }: Props) {
    return (
        <Stack
            spacing={2.5}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 1, minWidth: 200 }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
                <Iconify icon={icon} width={32} sx={{ color, position: 'absolute' }} />

                <CircularProgress
                    variant="determinate"
                    value={percent}
                    size={56}
                    thickness={2}
                    sx={{ color, opacity: 0.48 }}
                />

                <CircularProgress
                    variant="determinate"
                    value={100}
                    size={56}
                    thickness={3}
                    sx={{
                        top: 0,
                        left: 0,
                        opacity: 0.48,
                        position: 'absolute',
                        color: (theme) => alpha(theme.palette.grey[500], 0.16)
                    }}
                />
            </Stack>

            <Stack spacing={0.5}>
                <Typography variant="subtitle1">{title}</Typography>

                <Box component="span" sx={{ color: 'text.disabled', typography: 'body2' }}>
                    {fShortenNumber(total)} invoices
                </Box>

                <Typography variant="subtitle2">{fCurrency(price)}</Typography>
            </Stack>
        </Stack>
    );
}
