// @mui
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// config
import { ASSETS_API } from 'src/config-global';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { useSnackbar } from 'src/components/snackbar';
import { opengame } from 'src/api/game';

import Image from 'src/components/image';
import Carousel, { useCarousel } from 'src/components/carousel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useNavigate } from 'react-router';
import { useGameContext } from '../casino/context';

export const _carousels = [
    { name: 'Pragmatic Play', img: `${ASSETS_API}/home/nav/desktop/1.svg`, service: 'vip-casino' },
    { name: 'Netent', img: `${ASSETS_API}/home/nav/desktop/2.svg`, service: 'vip-casino' },
    { name: 'Habanero', img: `${ASSETS_API}/home/nav/desktop/3.svg`, service: 'vip-casino' },
    { name: 'Evolution', img: `${ASSETS_API}/home/nav/desktop/4.svg`, service: 'live-casino' },
    { name: 'EGT', img: `${ASSETS_API}/home/nav/desktop/5.svg`, service: 'vip-casino' },
    { name: 'GoldenRace', img: `${ASSETS_API}/home/nav/desktop/6.svg`, service: 'virtual' },
    { name: 'Playson', img: `${ASSETS_API}/home/nav/desktop/7.svg`, service: 'vip-casino' },
    { name: 'ISoftBet', img: `${ASSETS_API}/home/nav/desktop/8.svg`, service: 'casino' },
    { name: 'Yggdrasil', img: `${ASSETS_API}/home/nav/desktop/9.svg`, service: 'vip-casino' },
    { name: 'Amatic', img: `${ASSETS_API}/home/nav/desktop/10.svg`, service: 'vip-casino' }
];

export const _carouselMobiles = [
    { name: 'Pragmatic Play', img: `${ASSETS_API}/casino/providers/pragmatic-play-live.png`, service: 'vip-casino' },
    { name: 'Netent', img: `${ASSETS_API}/casino/providers/netent.png`, service: 'vip-casino' },
    { name: 'Habanero', img: `${ASSETS_API}/casino/providers/habanero.png`, service: 'vip-casino' },
    { name: 'Evolution', img: `${ASSETS_API}/casino/providers/evolution-live.png`, service: 'live-casino' },
    { name: 'EGT', img: `${ASSETS_API}/casino/providers/egt.png`, service: 'vip-casino' },
    { name: 'VivoLive', img: `${ASSETS_API}/casino/providers/vivolive.png`, service: 'live-casino' },
    { name: 'Playson', img: `${ASSETS_API}/casino/providers/playson.png`, service: 'vip-casino' },
    { name: 'ISoftBet', img: `${ASSETS_API}/casino/providers/isoftbet.png`, service: 'casino' },
    { name: 'Yggdrasil', img: `${ASSETS_API}/casino/providers/yggdrasil.png`, service: 'vip-casino' },
    { name: 'Amatic', img: `${ASSETS_API}/casino/providers/amatic.png`, service: 'vip-casino' }
];

const homeBanners = [
    `${ASSETS_API}/home/carousel/mobile/home_sport.png`,
    `${ASSETS_API}/home/carousel/mobile/home_casino.png`
];

const HomeNav = () => {
    // const smUp = useResponsive('up', 'sm');
    const navigate = useNavigate();
    const isMobile = useResponsive('down', 'md');
    const { enqueueSnackbar } = useSnackbar();

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    const { providerGame, gameURLset, gameInfoSet } = useGameContext();

    const openGamePlay = async (item: any, gameId: string, name: string) => {
        try {
            await gameInfoSet(window.location.pathname, item.name, name);

            const result = await opengame(gameId, item.name, window.location.pathname);
            if (result.data === undefined) {
                gameURLset(result);
                if (isMobile) {
                    window.open(result, '_blank');
                }
            } else {
                gameURLset(result.data);
                if (isMobile) {
                    window.open(result.data, '_blank');
                }
            }
            if (!isMobile) {
                navigate(`/open/${item.name}/${gameId}`);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    const onchangeprovider = (data: any) => {
        if (data.name === 'Evolution' || data.name === 'VivoLive') {
            openGamePlay(data, '0', 'Lobby Desktop');
            // providerGame(data.name);
            // navigate(`/live-casino`);
        } else if (data.name === 'GoldenRace') {
            openGamePlay(data, '10100', 'Goldenrace');
            // providerGame(data.name);
            // navigate(`/live-casino`);
        } else {
            providerGame(data.name);
            navigate(`/${data.service}/${data.name}`);
        }
    };

    return (
        <>
            {!isMobile ? (
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    {_carousels.map((item, index: number) => (
                        <CarouselItem key={item.name} item={item} selectProvider={onchangeprovider} />
                    ))}
                </Carousel>
            ) : (
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    {_carouselMobiles.map((item, index: number) => (
                        <CarouselMobileItem key={item.name} item={item} selectProvider={onchangeprovider} />
                    ))}
                </Carousel>
            )}
            {isMobile && (
                <Stack my={2} spacing={2}>
                    <Box sx={{ position: 'relative' }}>
                        <Image
                            alt={homeBanners[0]}
                            src={homeBanners[0]}
                            sx={{
                                borderRadius: 0
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                gap: 2,
                                position: 'absolute',
                                top: 52,
                                right: 18
                            }}
                        >
                            <Stack alignItems="flex-end">
                                <Typography fontSize={13} fontWeight={900} lineHeight="15.23px">
                                    PARIEZ SUR LES MEILLEURS
                                </Typography>
                                <Typography fontSize={13} fontWeight={900} lineHeight="15.23px">
                                    CHAMPIONNATS ET LIGUES DU MONDE
                                </Typography>
                            </Stack>

                            <Stack direction="column" spacing={1} alignItems="flex-end">
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    sx={{ borderRadius: '2px', border: '1px solid #FFFFFF', px: 3, height: '31px' }}
                                    href="/sports"
                                >
                                    PARIEZ
                                </Button>
                                {/* <Stack direction="row" alignItems="center">
                                    <ArrowLeftIcon />
                                    <Typography fontSize="10px" fontWeight={500}>
                                        En savoir plus
                                    </Typography>
                                </Stack> */}
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={{ position: 'relative' }}>
                        <Image
                            alt={homeBanners[1]}
                            src={homeBanners[1]}
                            sx={{
                                borderRadius: 0
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                gap: 2,
                                position: 'absolute',
                                top: 52,
                                right: 18
                            }}
                        >
                            <Stack alignItems="flex-end">
                                <Typography fontSize={13} fontWeight={900} lineHeight="15.23px">
                                    SEULEMENT LES MEILLEURS
                                </Typography>
                                <Typography fontSize={13} fontWeight={900} lineHeight="15.23px">
                                    FOURNISSEURS SUR Betgold216
                                </Typography>
                            </Stack>

                            <Stack direction="column" spacing={1} alignItems="flex-end">
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    sx={{ borderRadius: '2px', border: '1px solid #FFFFFF', px: 3, height: '31px' }}
                                    href="/casino"
                                >
                                    PARIEZ
                                </Button>
                                {/* <Stack direction="row" alignItems="center">
                                    <ArrowLeftIcon />
                                    <Typography fontSize="10px" fontWeight={500}>
                                        En savoir plus
                                    </Typography>
                                </Stack> */}
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            )}
        </>
    );
};

export default HomeNav;

function CarouselItem({ item, selectProvider }: { item: any; selectProvider: any }) {
    return (
        <Stack
            sx={{ maxHeight: 500, mr: 1, alignItems: 'center' }}
            pt={{ xs: 2, md: 4 }}
            onClick={() => {
                selectProvider(item);
            }}
        >
            <Image alt={item.img} src={item.img} />
        </Stack>
    );
}

function CarouselMobileItem({ item, selectProvider }: { item: any; selectProvider: any }) {
    return (
        <Stack
            sx={{ maxHeight: 500, mr: 1, alignItems: 'center', bgcolor: '#192333' }}
            p={{ xs: 1 }}
            pt={{ md: 4 }}
            gap={0.5}
            borderRadius="10px"
            maxWidth={70}
            onClick={() => {
                selectProvider(item);
            }}
        >
            <Image alt={item} src={item.img} width={27} />
            <Typography fontSize={10} whiteSpace="nowrap">
                {item.name}
            </Typography>
        </Stack>
    );
}
