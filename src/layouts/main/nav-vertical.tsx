import { useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

// dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

// hooks
import { useResponsive } from 'src/hooks/use-responsive';
import { useNavigate } from 'react-router';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { NavSectionVertical } from 'src/components/nav-section';
import Image from 'src/components/image';
//
import { NAV } from '../config-layout';
import { useSportsNavData, useCasinoNavData, useFooterNavData } from './config-navigationMini';
import { NavToggleButton } from '../_common';
import DownloadAPP from '../_common/downloadapp';
// ----------------------------------------------------------------------

type Props = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
    const pathname = usePathname();

    const lgUp = useResponsive('up', 'lg');

    const navigate = useNavigate();

    const navSportsData = useSportsNavData();

    const navCasinoData = useCasinoNavData();

    const navFooterData = useFooterNavData();

    const [open, setOpen] = useState(false);

    const [selectStatus, setSelectStatus] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column'
                },
                background: '#0C1221',
                pb: 6
            }}
        >
            <Stack direction="row" flexGrow={1} justifyContent="space-evenly" p={1}>
                <Box component="img" src="/assets/icons/auth/loginHome.svg" onClick={() => navigate('/')} />
                <Stack direction="row" sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            bgcolor: selectStatus ? '#D9B80B' : '#1E2738',
                            borderRadius: 0,
                            color: selectStatus ? '#0C1221' : 'white',
                            fontWeight: 600,
                            fontSize: '15px',
                            lineHeight: '17.58px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 1,
                            pr: 3
                        }}
                        onClick={() => {
                            setSelectStatus(true);
                        }}
                    >
                        SPORT
                    </Box>
                    <Box
                        sx={{
                            transform: 'skew(-20deg)',
                            width: '13px',
                            height: '40px',
                            zIndex: 2,
                            background: '#0C1221',
                            position: 'absolute',
                            right: '47%',
                            top: '-2px'
                        }}
                    />
                    <Box
                        sx={{
                            bgcolor: !selectStatus ? '#D9B80B' : '#1E2738',
                            color: !selectStatus ? '#0C1221' : 'white',
                            zIndex: 1,
                            borderRadius: 0,
                            fontSize: '15px',
                            lineHeight: '17.58px',
                            fontWeight: 600,
                            p: 1,
                            pl: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => {
                            setSelectStatus(false);
                        }}
                    >
                        CASINO
                    </Box>
                </Stack>
                <Box component="img" src="/assets/icons/auth/bx_x.svg" onClick={onCloseNav} />
            </Stack>
            {selectStatus ? (
                <NavSectionVertical
                    data={navSportsData}
                    sx={{
                        '& .MuiButtonBase-root': {
                            p: 0,
                            minHeight: '30px',
                            fontWeight: 500,
                            color: '#4E596F'
                        },
                        '& span': { margin: 0 },
                        '& ul': {
                            p: 0
                        }
                    }}
                />
            ) : (
                <NavSectionVertical
                    data={navCasinoData}
                    sx={{
                        '& .MuiButtonBase-root': {
                            p: 0,
                            minHeight: '30px',
                            fontWeight: 500,
                            color: '#4E596F'
                        },
                        '& span': { margin: 0 },
                        '& ul': {
                            p: 0
                        }
                    }}
                />
            )}
            <NavSectionVertical
                data={navFooterData}
                mt={2.5}
                sx={{
                    '& .MuiButtonBase-root': {
                        minHeight: '30px',
                        fontWeight: 500,
                        color: '#4E596F'
                    },
                    '& span': { margin: 0 }
                }}
            />

            <Stack direction="row" sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ bgcolor: '#1E2738', px: 2, py: 1, maxWidth: '139px' }}
                    flexGrow={1}
                >
                    <Image src={`${ASSETS_API}/footer/icons/flag.svg`} />
                    <Typography>Français</Typography>
                </Stack>
                <Divider orientation="vertical" flexItem sx={{ background: '#354158' }} />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    flexGrow={1}
                    borderRadius={0}
                    sx={{ bgcolor: '#1E2738', px: 2, py: 1 }}
                    onClick={() => navigate('/contact-us/contacts')}
                >
                    <Image src={`${ASSETS_API}/footer/icons/solution.svg`} />
                    <Typography>Soutien</Typography>
                </Stack>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.W_VERTICAL }
            }}
        >
            <NavToggleButton />
            {lgUp && <DownloadAPP />}
            {lgUp ? (
                <Stack
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.W_VERTICAL,
                        borderRight: (theme) => `dashed 1px ${theme.palette.divider}`
                    }}
                >
                    {renderContent}
                </Stack>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    PaperProps={{
                        sx: {
                            width: NAV.W_VERTICAL
                        }
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { margin: 0, width: '100%' } }}
            >
                <DialogContent sx={{ p: 0 }}>
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            right: 5,
                            zIndex: 1,
                            fontSize: 32,
                            color: '#9d9d9d',
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    />
                    <Image alt="License" src={`${ASSETS_API}/footer/license.png`} />
                </DialogContent>
            </Dialog>
        </Box>
    );
}
