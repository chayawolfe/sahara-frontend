import { useCallback, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

// icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useSnackbar } from 'src/components/snackbar';
import { useResponsive } from 'src/hooks/use-responsive';
// hook
import { useNavigate } from 'react-router';
// apis
import { opengame, twogamePlay, multigameOpen } from 'src/api/game';
import { useGameContext } from '../casino/context';
import './view/style.css';

// ----------------------------------------------------------------------

const _carousels = [`${ASSETS_API}/aviator/bg.png`, `${ASSETS_API}/live-casino/2.png`];

const LiveCasinoCarousel = () => {
    const mdUp = useResponsive('up', 'md');

    const navigate = useNavigate();

    const { initGetGame, gameInfoSet, providerGameList, gameURLset, playURL } = useGameContext();

    const { enqueueSnackbar } = useSnackbar();

    const openGamePlay = useCallback(
        async (item: any) => {
            try {
                await gameInfoSet('/', item.provider.name, item.name);
                if (item.sevice === 'multigames') {
                    const result = await multigameOpen(item.gameid, item.provider.name);
                    gameURLset(result.data);
                } else if (item.provider.name === 'jetx') {
                    console.log('two');
                    const result = await twogamePlay(item.gameid, item.provider.name);
                    gameURLset(result.data);
                } else {
                    const result = await opengame(item.gameid, item.provider.name, window.location.pathname);
                    gameURLset(result.data);
                }
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            } catch (error) {
                enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
            }
        },
        [gameURLset, enqueueSnackbar, navigate, gameInfoSet]
    );

    const fullscreen = () => {
        const elem = document.getElementById('mygame');
        if (elem?.requestFullscreen) {
            elem?.requestFullscreen();
        }
    };

    useEffect(() => {
        initGetGame('aviator');
    }, [initGetGame]);

    useEffect(() => {
        if (providerGameList.length > 0) {
            openGamePlay(providerGameList[0]);
        }
    }, [providerGameList, openGamePlay]);

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
                    {providerGameList.length > 0 && (
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
                        overflow: 'auto',
                        backgroundPosition: 'center'
                    }}
                >
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
                                        openGamePlay(item);
                                    }}
                                >
                                    <Image src={item.image} height={!mdUp ? '186px' : '100%'} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default LiveCasinoCarousel;
