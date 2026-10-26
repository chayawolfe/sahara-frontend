import { format } from 'date-fns';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// utils
import { fcustomCurrency } from 'src/utils/format-number';
// components
import Label from 'src/components/label';

// ----------------------------------------------------------------------

type Props = {
    row: any;
};

export default function TransactionTableRow({ row }: Props) {
    const { type, date, from, to, inAmount, outAmount, bonus, note } = row;
    return (
        <TableRow hover>
            <TableCell>{format(new Date(date), 'yyyy-MM-dd h:mm:ss')}</TableCell>

            <TableCell>{type}</TableCell>
            <TableCell>{from}</TableCell>
            <TableCell>{to}</TableCell>
            <TableCell>
                <Label variant="soft" color="success">
                    {fcustomCurrency(inAmount)}
                </Label>
            </TableCell>

            <TableCell>
                <Label variant="soft" color="error">
                    {fcustomCurrency(outAmount)}
                </Label>
            </TableCell>
            <TableCell>
                <Label variant="soft" color="info">
                    {fcustomCurrency(bonus)}
                </Label>
            </TableCell>
            <TableCell>{note}</TableCell>
        </TableRow>
    );
}
