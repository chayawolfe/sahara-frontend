import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// untils
import { fcustomCurrency } from 'src/utils/format-number';
// apis
import { getMonthlyRanking } from 'src/api/game';

export default function TournamentsTable() {
    const [rankingArray, setRankingArray] = useState([]);

    const init = async () => {
        try {
            const res = await getMonthlyRanking();
            setRankingArray(res.users);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        init();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ background: '#192333' }}>
                <TableHead sx={{ '& th': { background: 'transparent' } }}>
                    <TableRow>
                        <TableCell align="center">MOIS</TableCell>
                        <TableCell align="center">JOUEUR</TableCell>
                        <TableCell align="center">PARIS</TableCell>
                        <TableCell align="center">POINTS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rankingArray.map(
                        (row: any, index) =>
                            index < 10 && (
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
                            )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
