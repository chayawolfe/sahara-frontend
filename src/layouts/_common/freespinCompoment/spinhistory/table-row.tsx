import { format } from 'date-fns';

// import { useState } from 'react';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';

// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';

// untils
import { fcustomCurrency } from 'src/utils/format-number';
// ----------------------------------------------------------------------

export default function TransactionTableRow({ row }: any) {
    // const [detailOpen, setDetailOpen] = useState(false);

    // const handleClose = () => {
    //     setDetailOpen(false);
    // };

    // const handleOpen = async () => {
    //     setDetailOpen(true);
    // };

    return (
        <TableRow hover>
            <TableCell>{row._id}</TableCell>
            <TableCell>{fcustomCurrency(row.value)}</TableCell>
            <TableCell>{format(new Date(row.createdAt), 'yyyy-MM-dd h:mm:ss')}</TableCell>
        </TableRow>
    );
}
