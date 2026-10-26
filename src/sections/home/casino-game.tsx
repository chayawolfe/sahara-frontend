// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { useCarousel } from 'src/components/carousel';
import { useSnackbar } from 'src/components/snackbar';
import { useNavigate } from 'react-router';

// apis
import { opengame, pragmaticPlay } from 'src/api/game';
import { useGameContext } from '../casino/context';

const imagList = [
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/1.png`,
        title: 'Pragmatic Play',
        gameid: '2314',
        name: 'Jewel Rush'
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/2.png`,
        title: 'Pragmatic Play',
        gameid: '2147',
        name: 'Club Troplcana'
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/3.png`,
        title: 'Netent',
        gameid: '6:1068',
        name: 'Twin Spin Xtreme'
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/4.png`,
        title: 'Netent',
        gameid: '6:1090',
        name: 'Joker Staxx'
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/5.png`,
        title: 'Booming',
        gameid: 'boomingsevendx',
        name: "Gonzo's Gold"
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/6.png`,
        title: 'Habanero',
        gameid: '14:1024',
        name: 'Bird of Thunder'
    },
    {
        img: `${ASSETS_API}/home/gallery/desktop/casino/7.png`,
        title: 'Novomatic',
        gameid: '602',
        name: 'Book of SOL'
    }
];

const HomeLive = () => {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { gameURLset, gameInfoSet } = useGameContext();

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 3
    });

    const openGamePlay = async (item: any) => {
        try {
            await gameInfoSet(window.location.pathname, item.title, item.name);
            if (item.title === 'Pragmatic Play') {
                const result = await pragmaticPlay(item.gameid, item.title);
                if (result.url === undefined) {
                    gameURLset(result);
                    if (!mdUp) {
                        window.open(result, '_blank');
                    }
                } else {
                    gameURLset(result.url);
                    if (!mdUp) {
                        window.open(result.url, '_blank');
                    }
                }
            } else {
                const result = await opengame(item.gameid, item.title, window.location.pathname);
                if (result.data === undefined) {
                    gameURLset(result);
                    if (!mdUp) {
                        window.open(result, '_blank');
                    }
                } else {
                    gameURLset(result.data);
                    if (!mdUp) {
                        window.open(result.data, '_blank');
                    }
                }
            }
            if (mdUp) {
                navigate(`/open/${item.title}/${item.gameid}`);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    if (!mdUp) {
        return (
            <Stack
                spacing={2}
                sx={{
                    p: (theme) => theme.spacing(1)
                }}
            >
                <Typography component="span" ml={1}>
                    CASINO GAMES
                </Typography>
                <Stack position="relative" sx={{ '& .slick-track': { display: 'flex', gap: 1 } }}>
                    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                        {imagList.map((item: any, key: any) => (
                            <Card
                                sx={{
                                    borderRadius: 0,
                                    bgcolor: 'transparent',
                                    overflow: 'initial',
                                    position: 'relative',
                                    mx: 1
                                }}
                                key={key}
                            >
                                <Image
                                    borderRadius={1}
                                    sx={{ cursor: 'pointer', zIndex: 1 }}
                                    onClick={() => {
                                        openGamePlay(item);
                                    }}
                                    src={item.img}
                                />
                                <Box
                                    component="img"
                                    ml="110px"
                                    mb="-60px"
                                    width="90px"
                                    borderRadius={1}
                                    sx={{ cursor: 'pointer', zIndex: 2, position: 'absolute', right: 0, top: -40 }}
                                    src={`${ASSETS_API}/home/gallery/desktop/livecasino/hotIcons.svg`}
                                />
                                {/* <Typography
                                    variant="h6"
                                    textAlign="center"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 45,
                                        bgcolor: 'rgba(217, 184, 11, 0.55)',
                                        zIndex: 3,
                                        width: 1
                                    }}
                                >
                                    PROVIDER
                                </Typography> */}
                            </Card>
                        ))}
                    </Carousel>
                </Stack>
            </Stack>
        );
    }

    return (
        <Stack
            sx={{
                p: (theme) => theme.spacing(5, 1, 5, 1)
            }}
        >
            <Typography variant="h3">JEUX DE CASINO</Typography>
            <Box sx={{ border: '5px solid #D9B80B', width: 155 }} />
            <Stack spacing={1.5} mt={3} direction="row">
                {imagList.map((item: any, key: any) => (
                    <Card
                        sx={{
                            maxWidth: 400,
                            borderRadius: 0,
                            bgcolor: 'transparent',
                            overflow: 'initial',
                            position: 'relative'
                        }}
                        key={key}
                    >
                        {/* <Image src={item} /> */}
                        <Image
                            borderRadius={1}
                            sx={{ cursor: 'pointer', zIndex: 1 }}
                            onClick={() => {
                                openGamePlay(item);
                            }}
                            src={item.img}
                        />
                        <Box
                            component="img"
                            ml="110px"
                            mb="-60px"
                            width="90px"
                            borderRadius={1}
                            sx={{ cursor: 'pointer', zIndex: 2, position: 'absolute', right: 0, top: -40 }}
                            src={`${ASSETS_API}/home/gallery/desktop/livecasino/hotIcons.svg`}
                        />
                        {/* <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                                position: 'absolute',
                                bottom: 45,
                                bgcolor: 'rgba(217, 184, 11, 0.55)',
                                zIndex: 3,
                                width: 1
                            }}
                        >
                            {item.title}
                        </Typography> */}
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};

export default HomeLive;
