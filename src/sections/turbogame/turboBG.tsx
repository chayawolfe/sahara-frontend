import { useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
// icons
import HomeIcon from '@mui/icons-material/Home';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useSnackbar } from 'src/components/snackbar';
import { useResponsive } from 'src/hooks/use-responsive';

// apis
import { opengame, twogamePlay, multigameOpen, pragmaticPlay } from 'src/api/game';
import { useGameContext } from '../casino/context';
import './view/style.css';

// ----------------------------------------------------------------------

const _carousels = [`${ASSETS_API}/bg/bg_turbogames.png`];

const LiveCasinoCarousel = () => {
    const { initGetGame } = useGameContext();

    const mdUp = useResponsive('up', 'md');
    const [open, setOpen] = useState(false);

    const { providerGameList, gameURLset, playURL } = useGameContext();

    const { enqueueSnackbar } = useSnackbar();

    const openGamePlay = async (gameId: string, title: string, sevice: string) => {
        try {
            console.log(sevice, 'sevice');
            if (sevice === 'multigames') {
                const result = await multigameOpen(gameId, title);
                // navigate(`/turbogame/${providerName}/${gameId}`);
                gameURLset(result.data);
                setOpen(true);
            } else if (title === 'jetx') {
                console.log('two');
                const result = await twogamePlay(gameId, title);
                // navigate(`/turbogame/${providerName}/${gameId}`);
                gameURLset(result.data);
                setOpen(true);
            } else if (sevice === 'riseup-pragmatic') {
                const result = await pragmaticPlay(gameId, title);
                gameURLset(result.url);
                setOpen(true);
            } else {
                const result = await opengame(gameId, title, window.location.pathname);
                // navigate(`/turbogame/${providerName}/${gameId}`);
                gameURLset(result.data);
                setOpen(true);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fullscreen = () => {
        const elem = document.getElementById('mygame');
        if (elem?.requestFullscreen) {
            elem?.requestFullscreen();
        }
    };

    useEffect(() => {
        initGetGame('turbogames');
    }, [initGetGame]);

    return (
        <>
            {mdUp ? (
                <Box
                    sx={{
                        mt: {
                            xs: -3,
                            lg: -5
                        },
                        height: '100vh',
                        position: 'relative',
                        background: `url(${_carousels[0]})`,
                        backgroundSize: 'cover',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        overflow: 'auto'
                    }}
                >
                    {providerGameList.map((item: any, key: number) => (
                        <Card key={key} sx={{ boxShadow: 'none', bgcolor: 'transparent' }}>
                            <Stack
                                spacing={1.5}
                                sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1 }}
                                direction="row"
                                flexWrap="wrap"
                                justifyContent="space-between"
                                onClick={() => {
                                    openGamePlay(item.gameid, item.provider.name, item.sevice);
                                }}
                            >
                                <Box className="static_layout">
                                    <Box className="position_ab">
                                        <Box className="hover-wrapper">
                                            <Box component="span" className="title">
                                                {item.name}
                                            </Box>
                                        </Box>
                                        <Image
                                            sx={{
                                                width: '15rem !important',
                                                height: '12rem !important'
                                            }}
                                            className="gameItemImg"
                                            src={item.image}
                                            borderRadius={1}
                                        />
                                    </Box>
                                </Box>

                                {/* <iframe src={gameURL} title="game play" /> */}
                            </Stack>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: {
                            xs: -3,
                            lg: -5
                        },
                        position: 'relative',
                        background: `url(${_carousels[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        overflow: 'auto',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <Stack spacing={2} sx={{ mt: 5 }}>
                        <Grid container sx={{ padding: 2 }} spacing={1}>
                            {providerGameList.map((item: any, key: number) => (
                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        borderRadius: '5px'
                                    }}
                                    key={key}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            borderRadius: '5px',
                                            bgcolor: 'background.neutral',
                                            width: '100%'
                                        }}
                                        onClick={() => {
                                            openGamePlay(item.gameid, item.provider.name, item.sevice);
                                        }}
                                    >
                                        <Image src={item.image} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Box>
            )}
            {mdUp ? (
                <Dialog fullWidth open={open} onClose={handleClose} maxWidth="lg">
                    <Box
                        sx={{
                            position: 'fixed',
                            pl: 3,
                            pt: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 2
                        }}
                    >
                        <Link
                            href="#"
                            underline="hover"
                            onClick={handleClose}
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
                            <HomeIcon />
                        </Link>
                        <Link
                            href="#"
                            underline="hover"
                            onClick={fullscreen}
                            width={25}
                            height={25}
                            sx={{
                                background: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 3
                            }}
                        >
                            <OpenInFullIcon />
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh - 200px)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={playURL} title="game play" />
                    </Stack>
                </Dialog>
            ) : (
                <Dialog fullScreen open={open} onClose={handleClose}>
                    <Box sx={{ position: 'fixed', pl: 3, pt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Link
                            href="#"
                            underline="hover"
                            onClick={handleClose}
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
                            <HomeIcon />
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
    );
};

export default LiveCasinoCarousel;
