import { format } from 'date-fns';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// utils
import { fcustomCurrency } from 'src/utils/format-number';
// ----------------------------------------------------------------------

export default function TransactionTableRow({ row }: any) {
    const { transactionId, detail, game_id, provider_id, createdAt, amount, after_credit } = row;

    return (
        <TableRow hover>
            <TableCell>{transactionId}</TableCell>
            <TableCell>{format(new Date(createdAt), 'dd MMM yyyy p')}</TableCell>
            <TableCell>{detail.resultType}</TableCell>
            <TableCell>{game_id?.name}</TableCell>
            <TableCell>{provider_id?.name}</TableCell>

            <TableCell>{fcustomCurrency(amount)}</TableCell>

            <TableCell>{fcustomCurrency(after_credit)}</TableCell>
        </TableRow>
    );
}
