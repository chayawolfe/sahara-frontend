import { useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useSnackbar } from 'src/components/snackbar';
import { useNavigate } from 'react-router';

// icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// apis
import { opengame, twogamePlay, multigameOpen } from 'src/api/game';
// casino game provider game list
import { useGameContext } from '../casino/context';
// import './view/style.css';

const CasinoGameList = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const { providerGameList, providerName, gameURLset } = useGameContext();
    const [loadedItems, setLoadedItems] = useState(14);

    const openGamePlay = async (gameId: string, title: string, sevice: string) => {
        try {
            console.log(sevice, 'sevice');
            if (sevice === 'multigames') {
                const result = await multigameOpen(gameId, title);
                navigate(`/live-casino/${providerName}/${gameId}`);
                gameURLset(result.data);
            } else if (title === 'jetx') {
                console.log('two');
                const result = await twogamePlay(gameId, title);
                navigate(`/live-casino/${providerName}/${gameId}`);
                gameURLset(result.data);
            } else {
                const result = await opengame(gameId, title, window.location.pathname);
                navigate(`/live-casino/${providerName}/${gameId}`);
                gameURLset(result.data);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    // error image
    const handleImageError = (event: any) => {
        // Handle the image load error here
        event.target.src = 'https://static.inpcdn.com/20,0588c020ea6844.webp'; // Replace with your fallback image URL
    };

    useEffect(() => {
        function handleScroll() {
            const container = document.getElementById('root') as HTMLElement;
            if (container.scrollTop + container.clientHeight + 700 > container.scrollHeight) {
                setLoadedItems((prevLoadedItems) => prevLoadedItems + 14);
            }
        }

        const container = document.getElementById('root') as HTMLElement;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [providerGameList]);

    const itemsToShow = providerGameList.slice(0, loadedItems);
    return (
        <Stack spacing={2} sx={{ mt: 5 }}>
            {mdUp ? (
                <Card>
                    <CardHeader
                        title={`${providerName}  ${providerGameList.length} games`}
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        {itemsToShow.length ? (
                            itemsToShow.map((item: any, key: number) => (
                                <Box key={key} className="static_layout">
                                    <Box className="position_ab">
                                        <Box
                                            className="hover-wrapper"
                                            onClick={() => {
                                                openGamePlay(item.gameid, item.provider.name, item.sevice);
                                            }}
                                        >
                                            <Box component="span" className="title">
                                                {item.name}
                                            </Box>
                                            <Box className="pause">
                                                <ArrowRightIcon fontSize="large" />
                                            </Box>
                                            <Box component="span" className="go">
                                                {item.provider.name}
                                            </Box>
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
                        {/* <iframe src={gameURL} title="game play" /> */}
                    </Stack>
                </Card>
            ) : (
                <Card>
                    <CardHeader
                        title={providerName}
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Grid container sx={{ padding: 2 }} spacing={1}>
                        {itemsToShow.map((item: any, key: number) => (
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
