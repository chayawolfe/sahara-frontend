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
import StarIcon from '@mui/icons-material/Star';
// apis
import {
    opengame,
    twogamePlay,
    multigameOpen,
    pragmaticPlay,
    gameget,
    eachgameget,
    searchGameName,
    setFavoriteGame,
    getFavoriteGames,
    getRecentlyGames
} from 'src/api/game';

// casino game provider game list
import { useGameContext } from './context';
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
    const { gameSearchName, gameURLset, gameInfoSet, playURL } = useGameContext();




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
                    if (!mdUp) {
                        if (!browserInfo.isChrome) {
                            navigate(`/open/${item.provider.name}/${item.gameid}`);
                        } else {
                            window.open(result, '_blank');
                        }
                    }
                } else {
                    gameURLset(result.url);
                    if (!mdUp) {
                        if (!browserInfo.isChrome) {
                            navigate(`/open/${item.provider.name}/${item.gameid}`);
                        } else {
                            window.open(result.url, '_blank');
                        }
                    }
                }
            } else {
                const result = await opengame(item.gameid, item.provider.name, window.location.pathname);
                if (result.data === undefined) {
                    gameURLset(result);
                    if (!mdUp) {
                        if (!browserInfo.isChrome) {
                            navigate(`/open/${item.provider.name}/${item.gameid}`);
                        } else {
                            window.open(result, '_blank');
                        }
                    }
                } else {
                    gameURLset(result.data);
                    if (!mdUp) {
                        if (!browserInfo.isChrome) {
                            navigate(`/open/${item.provider.name}/${item.gameid}`);
                        } else {
                            window.open(result.data, '_blank');
                        }
                    }
                }
            }
            if (mdUp) {
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    const [browserInfo, setBrowserInfo] = useState({
        isChrome: false
    });

    useEffect(() => {
        // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        const userAgent = window.navigator.userAgent;
        const chromeAgent = userAgent.indexOf("Chrome") > -1;
        let safariAgent = userAgent.indexOf("Safari") > -1;

        // Discard Safari since it also includes "Chrome" in its user-agent string
        if ((chromeAgent) && (safariAgent)) safariAgent = false;

        if (chromeAgent && !safariAgent) {
            const versionArray = userAgent.substring(userAgent.indexOf("Chrome") + 7).split(" ");
            const version = versionArray[0].split('.')[0]; // Get major version number
            setBrowserInfo({
                isChrome: true
            });
        }
    }, []);

    // error image
    const handleImageError = (event: any) => {
        event.target.src = 'https://static.inpcdn.com/20,0588c020ea6844.webp'; // Replace with your fallback image URL
    };

    const init = useCallback(async () => {
        try {
            if (providerName === undefined || providerName === '') {
                const res = await gameget('casino');

                setProviderGameList(res.data);
            } else if (providerName === 'favorite') {
                const res = await getFavoriteGames('casino');
                setProviderGameList(res);
            } else if (providerName === 'recently') {
                const res = await getRecentlyGames('casino');
                setProviderGameList(res);
            } else {
                const res = await eachgameget(providerName);
                setProviderGameList(res);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    }, [providerName, enqueueSnackbar]);

    // search games
    const search = useCallback(async () => {
        if (gameSearchName !== '') {
            const res = await searchGameName({ category: 'casino', name: gameSearchName });
            setProviderGameList(res.data);
        } else {
            init();
        }
    }, [gameSearchName, init]);

    useEffect(() => {
        init();
    }, [init]);

    useEffect(() => {
        search();
    }, [search]);

    const favoriteGame = useCallback(
        async (item: any) => {
            try {
                await setFavoriteGame(item.gameid);
                init();
            } catch (error) {
                enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
            }
        },
        [init, enqueueSnackbar]
    );

    return (
        <Stack spacing={2}>
            {/* <a href="https://opengame.api.com" id="clickId" target="_blank" rel="noreferrer" style={{ display: 'none' }}>
                &nbsp;
            </a> */}
            {mdUp ? (
                <Card sx={{ bgcolor: 'transparent' }}>
                    <Typography variant="h3">JEUX DE CASINO</Typography>
                    <Box sx={{ border: '5px solid #D9B80B', width: 155 }} />
                    <Stack spacing={1.5} direction="row" flexWrap="wrap" justifyContent="space-between" mt={2} gap={1}>
                        {providerGameList.length ? (
                            providerGameList.map((item: any, key: number) => (
                                <Box key={key} className="static_layout">
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
                                            {!item.favorite ? (
                                                <StarOutlineIcon
                                                    onClick={() => {
                                                        favoriteGame(item);
                                                    }}
                                                    sx={{ position: 'absolute', top: 0, right: 10 }}
                                                />
                                            ) : (
                                                <StarIcon
                                                    onClick={() => {
                                                        favoriteGame(item);
                                                    }}
                                                    sx={{ position: 'absolute', top: 0, right: 10, color: '#faaf00' }}
                                                />
                                            )}
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
                        sx={{ padding: '8px 24px 0px' }}
                    />
                    <Grid container sx={{ px: 2, py: 1 }} spacing={1}>
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
                                    {/* 
                                    <Typography variant="body2" color="text.secondary">
                                        {item.provider.name}
                                    </Typography>
                                    <Typography variant="body1">{item.name}</Typography> */}
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
