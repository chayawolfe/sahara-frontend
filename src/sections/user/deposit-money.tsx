// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const payments = [
    {
        id: 'bank-transfer',
        logo: `${ASSETS_API}/account/payments/deposit/1.png`,
        name: 'SEPA Payments',
        fee: 0,
        limit: {
            min: 10,
            max: 5000
        }
    },
    {
        id: 'visa-mc',
        logo: `${ASSETS_API}/account/payments/deposit/2.png`,
        name: 'Visa/MC',
        fee: 0,
        limit: {
            min: 20,
            max: 5000
        }
    },
    {
        id: 'credit-card',
        logo: `${ASSETS_API}/account/payments/deposit/3.png`,
        name: 'Credit Card',
        fee: 0,
        limit: {
            min: 10,
            max: 2000
        }
    },
    {
        id: 'mastercard',
        logo: `${ASSETS_API}/account/payments/deposit/4.png`,
        name: 'MasterCard',
        fee: 0,
        limit: {
            min: 10,
            max: 1500
        }
    },
    {
        id: 'apple-pay',
        logo: `${ASSETS_API}/account/payments/deposit/5.png`,
        name: 'Apple Pay',
        fee: 0,
        limit: {
            min: 10,
            max: 2000
        }
    },
    {
        id: 'google-pay',
        logo: `${ASSETS_API}/account/payments/deposit/6.png`,
        name: 'Google Pay',
        fee: 0,
        limit: {
            min: 10,
            max: 2000
        }
    },
    {
        id: 'miFinity',
        logo: `${ASSETS_API}/account/payments/deposit/7.png`,
        name: 'MiFinity',
        fee: 0,
        limit: {
            min: 10,
            max: 2000
        }
    },
    {
        id: 'neosurf-europe',
        logo: `${ASSETS_API}/account/payments/deposit/8.png`,
        name: 'Neosurf Europe',
        fee: 0,
        limit: {
            min: 10,
            max: 1000
        }
    },
    {
        id: 'skrill',
        logo: `${ASSETS_API}/account/payments/deposit/9.png`,
        name: 'SKRILL',
        fee: 0,
        limit: {
            min: 10,
            max: 4000
        }
    },
    {
        id: 'neteller',
        logo: `${ASSETS_API}/account/payments/deposit/10.png`,
        name: 'Neteller',
        fee: 0,
        limit: {
            min: 10,
            max: 4000
        }
    },
    {
        id: 'paysafecard',
        logo: `${ASSETS_API}/account/payments/deposit/11.png`,
        name: 'Paysafecard',
        fee: 0,
        limit: {
            min: 10,
            max: 1000
        }
    },
    {
        id: 'bitcoin',
        logo: `${ASSETS_API}/account/payments/deposit/12.png`,
        name: 'Bitcoin',
        fee: 0,
        limit: {}
    },
    {
        id: 'ethereum',
        logo: `${ASSETS_API}/account/payments/deposit/13.png`,
        name: 'Ethereum',
        fee: 0,
        limit: {}
    },
    {
        id: 'litecoin',
        logo: `${ASSETS_API}/account/payments/deposit/14.png`,
        name: 'Litecoin',
        fee: 0,
        limit: {}
    },
    {
        id: 'bitcoin-cash',
        logo: `${ASSETS_API}/account/payments/deposit/15.png`,
        name: 'Bitcoin Cash',
        fee: 0,
        limit: {}
    },
    {
        id: 'ripple',
        logo: `${ASSETS_API}/account/payments/deposit/16.png`,
        name: 'Ripple',
        fee: 0,
        limit: {}
    },
    {
        id: 'dash',
        logo: `${ASSETS_API}/account/payments/deposit/17.png`,
        name: 'Dash',
        fee: 0,
        limit: {}
    },
    {
        id: 'tether-USD',
        logo: `${ASSETS_API}/account/payments/deposit/18.png`,
        name: 'Tether USD ',
        fee: 0,
        limit: {}
    },
    {
        id: 'tron',
        logo: `${ASSETS_API}/account/payments/deposit/19.png`,
        name: 'TRON',
        fee: 0,
        limit: {}
    },
    {
        id: 'dogecoin',
        logo: `${ASSETS_API}/account/payments/deposit/20.png`,
        name: 'Dogecoin',
        fee: 0,
        limit: {}
    },
    {
        id: 'usd-coin',
        logo: `${ASSETS_API}/account/payments/deposit/21.png`,
        name: 'USD Coin',
        fee: 0,
        limit: {}
    },
    {
        id: 'binance-usd',
        logo: `${ASSETS_API}/account/payments/deposit/22.png`,
        name: 'Binance USD',
        fee: 0,
        limit: {}
    },
    {
        id: 'monero',
        logo: `${ASSETS_API}/account/payments/deposit/23.png`,
        name: 'Monero',
        fee: 0,
        limit: {}
    },
    {
        id: 'bnb-Coin',
        logo: `${ASSETS_API}/account/payments/deposit/24.png`,
        name: 'BNB Coin',
        fee: 0,
        limit: {}
    }
];

export default function DepositMoney() {
    return (
        <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
            }}
        >
            {payments.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
            ))}
        </Box>
    );
}

// ----------------------------------------------------------------------

type PaymentCardProps = {
    payment: {
        id: string;
        name: string;
        logo: string;
        fee: number;
        limit: {
            min?: number;
            max?: number;
        };
    };
};

function PaymentCard({ payment }: PaymentCardProps) {
    const { name, logo, fee, limit } = payment;

    return (
        <Card
            variant="outlined"
            sx={{
                p: 3,
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 2.5
            }}
        >
            <Image alt={name} src={logo} sx={{ width: 1, maxWidth: 150 }} />

            <Link variant="subtitle1" color="text.primary">
                {name}
            </Link>

            <Table
                sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    overflow: 'hidden',
                    '& .MuiTableCell-root': {
                        py: 1
                    }
                }}
            >
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ borderRightStyle: 'dashed', borderWidth: 1, borderRightColor: 'divider' }}>
                            Fee:
                        </TableCell>
                        <TableCell colSpan={2}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {fee}%
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            sx={{
                                borderRightStyle: 'dashed',
                                borderWidth: 1,
                                borderRightColor: 'divider'
                            }}
                        >
                            Limit:
                        </TableCell>
                        <TableCell sx={{ padding: '0px !important', borderBottom: 'none' }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRightStyle: 'dashed',
                                                borderWidth: 1,
                                                borderRightColor: 'divider',
                                                borderBottomColor: 'divider'
                                            }}
                                        >
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                Min:
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottomColor: 'divider'
                                            }}
                                        >
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {limit?.min ? `${limit.min} EUR` : '-'}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderRightStyle: 'dashed',
                                                borderWidth: 1,
                                                borderRightColor: 'divider'
                                            }}
                                        >
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                Max:
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {limit?.max ? `${limit.max} EUR` : '-'}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow />
                                </TableBody>
                            </Table>
                        </TableCell>
                    </TableRow>
                    <TableRow />
                </TableBody>
            </Table>
        </Card>
    );
}
