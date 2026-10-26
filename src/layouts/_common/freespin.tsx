import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

// components
import { varHover } from 'src/components/animate';

import FreeSpin from './freespinCompoment';
// ----------------------------------------------------------------------
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    },
    '& .MuiPaper-root': {
        background: 'transparent',
        boxShadow: 'none'
    }
}));

export default function GiftPopover() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            component={m.div}
            animate={{
                rotate: [0, 360]
            }}
            transition={{
                duration: 12,
                ease: 'linear',
                repeat: Infinity
            }}
        >
            <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.05)}
                aria-label="settings"
                sx={{
                    width: 50,
                    height: 50
                }}
                onClick={handleClickOpen}
            >
                <Box component="img" src="/assets/icons/navbar/spin3.png" />
            </IconButton>

            <BootstrapDialog
                fullWidth
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        zIndex: 1
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <FreeSpin />
                </DialogContent>
            </BootstrapDialog>
        </Box>
    );
}
