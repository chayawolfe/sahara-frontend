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
        id: 'sepa',
        logo: `${ASSETS_API}/account/payments/withdraw/1.png`,
        name: 'SEPA',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'mifinity',
        logo: `${ASSETS_API}/account/payments/withdraw/2.png`,
        name: 'MiFinity',
        fee: 0,
        limit: {
            min: 20,
            max: 2000
        }
    },
    {
        id: 'skrill',
        logo: `${ASSETS_API}/account/payments/withdraw/3.png`,
        name: 'SKRILL',
        fee: 0,
        limit: {
            min: 20,
            max: 4000
        }
    },
    {
        id: 'neteller',
        logo: `${ASSETS_API}/account/payments/withdraw/4.png`,
        name: 'Neteller',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'bitcoin',
        logo: `${ASSETS_API}/account/payments/withdraw/5.png`,
        name: 'Bitcoin',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'ethereum',
        logo: `${ASSETS_API}/account/payments/withdraw/6.png`,
        name: 'Ethereum',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'litecoin',
        logo: `${ASSETS_API}/account/payments/withdraw/7.png`,
        name: 'Litecoin',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'bitcoin-cash',
        logo: `${ASSETS_API}/account/payments/withdraw/8.png`,
        name: 'Bitcoin Cash',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'ripple',
        logo: `${ASSETS_API}/account/payments/withdraw/9.png`,
        name: 'Ripple',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'dash',
        logo: `${ASSETS_API}/account/payments/withdraw/10.png`,
        name: 'Dash',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'dogecoin',
        logo: `${ASSETS_API}/account/payments/withdraw/11.png`,
        name: 'Dogecoin',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'monero',
        logo: `${ASSETS_API}/account/payments/withdraw/12.png`,
        name: 'Monero',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'usd-tether',
        logo: `${ASSETS_API}/account/payments/withdraw/13.png`,
        name: 'USD Tether',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'tron',
        logo: `${ASSETS_API}/account/payments/withdraw/14.png`,
        name: 'TRON',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'usd-coin',
        logo: `${ASSETS_API}/account/payments/withdraw/15.png`,
        name: 'USD Coin',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'bnb-coin',
        logo: `${ASSETS_API}/account/payments/withdraw/16.png`,
        name: 'BNB Coin',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    },
    {
        id: 'binance-usd',
        logo: `${ASSETS_API}/account/payments/withdraw/17.png`,
        name: 'Binance USD',
        fee: 0,
        limit: {
            min: 50,
            max: 7500
        }
    }
];

export default function WithdrawMoney() {
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
            min: number;
            max: number;
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
                                                {limit.min} EUR
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
                                                {limit.max} EUR
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
