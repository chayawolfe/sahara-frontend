import { format } from 'date-fns';

import { useState } from 'react';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// ----------------------------------------------------------------------

export default function TransactionTableRow({ row }: any) {
    const [detailOpen, setDetailOpen] = useState(false);

    const handleClose = () => {
        setDetailOpen(false);
    };

    const handleOpen = async () => {
        setDetailOpen(true);
    };

    return (
        <>
            <TableRow hover sx={{ cursor: 'pointer' }} onClick={handleOpen}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.from_id.username}</TableCell>
                <TableCell>{row.to_id.username}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{format(new Date(row.createdAt), 'yyyy-MM-dd h:mm:ss')}</TableCell>
            </TableRow>
            <Dialog open={detailOpen} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h3">{row.title}</Typography>
                        <Typography sx={{ textDecoration: 'underline' }}>
                            {format(new Date(row.createdAt), 'yyyy-MM-dd h:mm:ss')}
                        </Typography>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <Typography component="span" dangerouslySetInnerHTML={{ __html: row.content }} />
                </DialogContent>
            </Dialog>
        </>
    );
}
