// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// icons

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../view/style.css';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import { useSnackbar } from 'src/components/snackbar';
import { useNavigate } from 'react-router';

// apis
import { opengame, multigameOpen, twogamePlay, pragmaticPlay } from 'src/api/game';

// casino game provider game list
import { useGameContext } from '../../casino/context';

const imgList = [
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/1.png`,
        title: 'Roulette'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/2.png`,
        title: 'Dice'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/3.png`,
        title: 'Bingo'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/4.png`,
        title: 'Roulette'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/5.png`,
        title: 'Blackjack'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/6.png`,
        title: 'Baccarat'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/7.png`,
        title: 'Roulette'
    },
    {
        img: `${ASSETS_API}/live-casino/provider-each/vivo/8.png`,
        title: 'Roulette'
    }
];

const HomeGallery = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();

    const { gameInfoSet, providerGameList, gameURLset } = useGameContext();
    const navigate = useNavigate();

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 3
    });

    const _carousel = useCarousel({
        autoplay: true,
        slidesToShow: 8,
        infinite: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 7,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1630,
                settings: {
                    slidesToShow: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1258,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const playgame = async (item: any) => {
        try {
            await gameInfoSet(window.location.pathname, item.provider.name, item.name);
            if (item.provider.name === 'multigames') {
                const result = await multigameOpen(item.gameid, item.provider.name);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            } else if (item.provider.name === 'jetx') {
                const result = await twogamePlay(item.gameid, item.provider.name);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            } else if (item.provider.name === 'riseup-pragmatic') {
                const result = await pragmaticPlay(item.gameid, item.provider.name);
                if (result.url === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.url);
                }
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            } else {
                const result = await opengame(item.gameid, item.provider.name, window.location.pathname);
                if (result.data === undefined) {
                    gameURLset(result);
                } else {
                    gameURLset(result.data);
                }
                navigate(`/open/${item.provider.name}/${item.gameid}`);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    const openGamePlay = async () => {
        const rows: any = providerGameList.filter((obj: any) => obj.provider.name === 'VivoLive');
        playgame(rows[0]);
    };

    const handleImageError = (event: any) => {
        // Handle the image load error here
        event.target.src = 'https://static.inpcdn.com/20,0588c020ea6844.webp'; // Replace with your fallback image URL
    };

    if (!mdUp) {
        return (
            <Stack
                spacing={2}
                sx={{
                    p: (theme) => theme.spacing(2, 1, 2, 1)
                }}
            >
                <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                        component="img"
                        src={`${ASSETS_API}/casino/providers/vivolive.png`}
                        sx={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Typography component="h2" fontSize="20px" ml={1} fontWeight={900}>
                        VIVO LIVE
                    </Typography>
                </Stack>
                <Box position="relative">
                    <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                            {imgList.map((item, key) => (
                                <Box>
                                    <Image
                                        onClick={openGamePlay}
                                        alt={item.title}
                                        src={item.img}
                                        key={key}
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            ))}
                        </Carousel>
                    </CarouselArrows>
                </Box>
            </Stack>
        );
    }

    return (
        <Stack
            sx={{
                p: (theme) => theme.spacing(1)
            }}
        >
            <Card sx={{ bgcolor: 'transparent' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                        component="img"
                        src={`${ASSETS_API}/casino/providers/vivolive.png`}
                        sx={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Typography variant="h3" ml={1}>
                        VIVO LIVE
                    </Typography>
                </Stack>

                <CarouselArrows filled shape="rounded" onNext={_carousel.onNext} onPrev={_carousel.onPrev} mt={2}>
                    <Carousel ref={_carousel.carouselRef} {..._carousel.carouselSettings}>
                        {imgList.length ? (
                            imgList.map((item: any, key: number) => (
                                <Box key={key} className="static_layout_1" sx={{ width: 208, height: 240 }}>
                                    <Box className="position_ab">
                                        <Box className="hover-wrapper" sx={{ position: 'relative' }}>
                                            <Box component="span" className="title">
                                                Lobby
                                            </Box>
                                            <Box className="pause" onClick={openGamePlay}>
                                                <ArrowRightIcon fontSize="large" />
                                            </Box>
                                            <Box component="span" className="go">
                                                VIVO LIVE
                                            </Box>
                                            <StarOutlineIcon sx={{ position: 'absolute', top: 10, right: 10 }} />
                                        </Box>
                                        <Image onError={handleImageError} src={item.img} borderRadius={1} />
                                        {/* <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: '40px',
                                                width: '100%',
                                                textAlign: 'center',
                                                background: 'rgb(217 184 11 / 55%)'
                                            }}
                                        >
                                            {item.title}
                                        </Box> */}
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography>No Game Search Result</Typography>
                        )}
                    </Carousel>
                </CarouselArrows>
                {/* </Stack> */}
            </Card>
        </Stack>
    );
};

export default HomeGallery;
