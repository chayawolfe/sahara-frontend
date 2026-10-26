import { useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';

// icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
// components
import { useSnackbar } from 'src/components/snackbar';
import { useResponsive } from 'src/hooks/use-responsive';
import { useNavigate } from 'react-router';

// apis
import { useGameContext } from '../casino/context';
import './view/style.css';

// ----------------------------------------------------------------------

const LiveCasinoCarousel = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const { playURL, gameInformation } = useGameContext();
    const [open, setOpen] = useState(true);

    const backPage = () => {
        navigate(gameInformation.beforePath);
        setOpen(false);
    };

    const fullscreen = () => {
        const elem = document.getElementById('mygame');
        if (elem?.requestFullscreen) {
            elem?.requestFullscreen();
        }
    };

    useEffect(() => {
        if (playURL === 'no' || !playURL) {
            enqueueSnackbar('Game provider server error', { variant: 'error' });
        }
    }, [enqueueSnackbar, playURL]);

    return (
        <>
            {mdUp ? (
                <Box
                    sx={{
                        mt: {
                            xs: -3,
                            lg: -5
                        },
                        height: 'calc(100vh - 64*2px)',
                        position: 'relative',
                        background: '#2D3343',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                        overflow: 'auto',
                        px: 30,
                        py: 5
                    }}
                >
                    {playURL !== 'no' && (
                        <>
                            <iframe
                                id="mygame"
                                style={{ width: '100%', height: '100%', border: 0 }}
                                src={playURL}
                                title="game play"
                            />
                            <Box
                                sx={{
                                    pl: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 2
                                }}
                            >
                                <Link
                                    href="#"
                                    underline="hover"
                                    // onClick={handleClose}
                                    width={25}
                                    height={25}
                                    sx={{
                                        borderRadius: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                >
                                    <StarBorderIcon />
                                </Link>
                                <Link
                                    href="#"
                                    underline="hover"
                                    onClick={fullscreen}
                                    width={25}
                                    height={25}
                                    sx={{
                                        borderRadius: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 3,
                                        color: 'white'
                                    }}
                                >
                                    <OpenInFullIcon />
                                </Link>
                            </Box>
                        </>
                    )}
                </Box>
            ) : (
                <>
                    {playURL !== 'no' && (
                        <Dialog fullScreen open={open} onClose={backPage}>
                            <Box
                                sx={{
                                    position: 'fixed',
                                    pl: 3,
                                    pt: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Link
                                    href="#"
                                    underline="hover"
                                    onClick={backPage}
                                    width={25}
                                    height={25}
                                    sx={{
                                        background: 'white',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <CloseIcon />
                                </Link>
                            </Box>
                            <Stack
                                sx={{
                                    borderRadius: 1,
                                    bgcolor: 'background.default',
                                    height: 'calc(100vh)'
                                }}
                                direction="row"
                                flexWrap="wrap"
                                justifyContent="space-between"
                            >
                                <iframe id="mygame" style={{ width: '100%' }} src={playURL} title="game play" />
                            </Stack>
                        </Dialog>
                    )}
                </>
            )}
        </>
    );
};

export default LiveCasinoCarousel;
