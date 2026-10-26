import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Image from 'src/components/image';
// untils
import { fcustomCurrency } from 'src/utils/format-number';

export default function TournamentsTable({ arrayData }: any) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ background: '#192333' }}>
                <TableHead sx={{ '& th': { background: 'transparent' } }}>
                    <TableRow>
                        <TableCell align="center">N*</TableCell>
                        <TableCell align="center">JOUEUR</TableCell>
                        <TableCell align="center">PARIS</TableCell>
                        <TableCell align="center">POINTS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arrayData.map(
                        (row: any, index: any) =>
                            index < 20 &&
                            (index < 3 ? (
                                <TableRow
                                    key={index}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        background: '#2D394D',
                                        '& th': { p: 1 },
                                        '& td': { p: 1 }
                                    }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        <Image
                                            src="/assets/icons/tournament/mask.png"
                                            sx={{
                                                color: 'text.secondary',
                                                cursor: 'pointer',
                                                transition: (theme) =>
                                                    theme.transitions.create('color', {
                                                        duration: 250
                                                    }),
                                                '&:hover': {
                                                    color: 'text.primary'
                                                },
                                                width: 24
                                            }}
                                        />
                                    </TableCell>

                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{fcustomCurrency(row.outamount)}</TableCell>
                                    <TableCell align="center">{fcustomCurrency(row.outamount * 10)}</TableCell>
                                </TableRow>
                            ) : (
                                <TableRow
                                    key={index}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '& th': { p: 1 },
                                        '& td': { p: 1 }
                                    }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {index + 1}
                                    </TableCell>

                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{fcustomCurrency(row.outamount)}</TableCell>
                                    <TableCell align="center">{fcustomCurrency(row.outamount * 10)}</TableCell>
                                </TableRow>
                            ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
