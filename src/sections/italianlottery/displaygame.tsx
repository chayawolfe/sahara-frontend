import { useCallback, useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useSnackbar } from 'src/components/snackbar';
// hook
import { useLocation, useNavigate } from 'react-router';

// icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// apis
import {
    opengame,
    twogamePlay,
    multigameOpen,
    pragmaticPlay,
    gameget,
    eachgameget,
    searchGameName
} from 'src/api/game';
// casino game provider game list
import { useGameContext } from '../casino/context';
import './view/style.css';

const CasinoGameList = () => {
    const mdUp = useResponsive('up', 'md');

    const router = useLocation();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const [providerGameList, setProviderGameList] = useState([]);

    let providerName = router.pathname.split('/')[2];
    if (providerName) {
        providerName = providerName.replace('%20', ' ');
    }
    const { gameSearchName, gameInfoSet, gameURLset } = useGameContext();

    const openGamePlay = async (item: any) => {
        try {
            await gameInfoSet(window.location.pathname, item.provider.name, item.name);
            if (item.sevice === 'multigames') {
                const result = await multigameOpen(item.gameid, item.provider.name);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
            } else if (item.provider.name === 'jetx') {
                const result = await twogamePlay(item.gameid, item.provider.name);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
            } else if (item.sevice === 'riseup-pragmatic') {
                const result = await pragmaticPlay(item.gameid, item.provider.name);
                if (result.url === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.url);
                }
            } else {
                const result = await opengame(item.gameid, item.provider.name, window.location.pathname);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
            }
            navigate(`/open/${item.provider.name}/${item.gameid}`);
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    // error image
    const handleImageError = (event: any) => {
        // Handle the image load error here
        event.target.src = 'https://static.inpcdn.com/20,0588c020ea6844.webp'; // Replace with your fallback image URL
    };

    const init = useCallback(async () => {
        if (providerName === undefined || providerName === '') {
            const res = await gameget('italianlottery');

            setProviderGameList(res.data);
        } else {
            const res = await eachgameget(providerName);
            setProviderGameList(res);
        }
    }, [providerName]);

    useEffect(() => {
        init();
    }, [init]);

    // search games
    const search = useCallback(async () => {
        if (gameSearchName !== '') {
            const res = await searchGameName({ category: 'italianlottery', name: gameSearchName });
            setProviderGameList(res.data);
        } else {
            init();
        }
    }, [gameSearchName, init]);

    useEffect(() => {
        search();
    }, [search]);

    return (
        <Stack spacing={2}>
            {mdUp ? (
                <Card sx={{ bgcolor: 'transparent' }}>
                    <Typography variant="h3">JEUX DE COURSE</Typography>
                    <Box sx={{ border: '5px solid #D9B80B', width: 155 }} />
                    <Stack
                        spacing={1.5}
                        // sx={{ p: 2, mt: 1, mx: 2, mb: 3, borderRadius: 1 }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        mt={2}
                    >
                        {providerGameList.length ? (
                            providerGameList.map((item: any, key: number) => (
                                <Box key={key} className="static_layout" sx={{ width: 208, height: 312 }}>
                                    <Box className="position_ab">
                                        <Box className="hover-wrapper" sx={{ position: 'relative' }}>
                                            <Box component="span" className="title">
                                                {item.name}
                                            </Box>
                                            <Box
                                                className="pause"
                                                onClick={() => {
                                                    openGamePlay(item);
                                                }}
                                            >
                                                <ArrowRightIcon fontSize="large" />
                                            </Box>
                                            <Box component="span" className="go">
                                                {item.provider.name}
                                            </Box>
                                            <StarOutlineIcon sx={{ position: 'absolute', top: 10, right: 10 }} />
                                        </Box>
                                        <Image
                                            onError={handleImageError}
                                            className="gameItemImg"
                                            src={item.image}
                                            borderRadius={1}
                                        />
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography>No Game Search Result</Typography>
                        )}
                    </Stack>
                </Card>
            ) : (
                <Card sx={{ background: '#192333' }}>
                    <CardHeader
                        title={providerName}
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
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
                                    <Image onError={handleImageError} src={item.image} />

                                    <Typography variant="body2" color="text.secondary">
                                        {item.provider.name}
                                    </Typography>
                                    <Typography variant="body1">{item.name}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            )}
        </Stack>
    );
};

export default CasinoGameList;
