// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { useCarousel } from 'src/components/carousel';
import { useSnackbar } from 'src/components/snackbar';
import { useNavigate } from 'react-router';

// apis
import { opengame } from 'src/api/game';
import { useGameContext } from '../casino/context';

const HomeLive = () => {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { gameURLset, gameInfoSet } = useGameContext();

    const _livecarousel = useCarousel({
        autoplay: true,
        slidesToShow: 3
    });

    const imagList = [
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/1.png`,
            title: 'Crazy Time',
            gameid: '0',
            provider: 'Evolution'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/2.png`,
            title: 'War of Elements',
            gameid: '11:1009',
            provider: 'Pragmatic Play Live'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/3.png`,
            title: 'WheelBet',
            gameid: '11:1009',
            provider: 'Pragmatic Play Live'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/4.png`,
            title: 'Golden Super 6',
            gameid: '0',
            provider: 'Portomaso'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/5.png`,
            title: 'Casino Hold’em',
            gameid: '12101',
            provider: 'TVBet'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/6.png`,
            title: 'Dice',
            gameid: '0',
            provider: 'Portomaso'
        },
        {
            img: `${ASSETS_API}/home/gallery/desktop/livecasino/7.png`,
            title: 'Monopoly',
            gameid: '0',
            provider: 'VivoLive'
        }
    ];

    const openGamePlay = async (item: any) => {
        try {
            await gameInfoSet(window.location.pathname, item.provider, item.title);

            const result = await opengame(item.gameid, item.provider, window.location.pathname);
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
            if (mdUp) {
                navigate(`/open/${item.provider}/${item.gameid}`);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    if (!mdUp) {
        return (
            <>
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(1)
                    }}
                >
                    <Typography component="span" ml={1}>
                        LIVE CASINO
                    </Typography>
                    <Stack position="relative" sx={{ '& .slick-track': { display: 'flex', gap: 1 } }}>
                        <Carousel ref={_livecarousel.carouselRef} {..._livecarousel.carouselSettings}>
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
                                            bottom: 20,
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

                <Box sx={{ position: 'relative' }} mt={2}>
                    <Image
                        alt={`${ASSETS_API}/home/carousel/mobile/home_tournament.png`}
                        src={`${ASSETS_API}/home/carousel/mobile/home_tournament.png`}
                        sx={{
                            borderRadius: 0
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            gap: 1,
                            position: 'absolute',
                            top: 10,
                            left: 25
                        }}
                    >
                        <Typography color="#D9B80B" variant="h3" fontWeight={900}>
                            TOURNOI
                        </Typography>
                        <Stack alignItems="flex-start">
                            <Typography fontSize={13} fontWeight={500}>
                                Suivez les
                                <Box component="span" color="#D9B80B">
                                    {' '}
                                    retransmissions
                                </Box>
                            </Typography>
                            <Typography fontSize={13} fontWeight={500}>
                                en direct directement ici
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            <Button
                                variant="outlined"
                                size="medium"
                                sx={{
                                    borderRadius: '2px',
                                    bgcolor: '#D9B80B',
                                    px: 3,
                                    color: '#0C1221',
                                    fontSize: '10px',
                                    height: '25px',
                                    fontWeight: 700
                                }}
                                href="/tournaments"
                            >
                                Demande
                            </Button>
                            {/* <Button
                                sx={{
                                    fontSize: '10px',
                                    height: '25px',
                                    fontWeight: 700
                                }}
                            >
                                Se connecter
                            </Button> */}
                        </Stack>
                    </Box>
                </Box>
            </>
        );
    }

    return (
        <Stack
            sx={{
                p: (theme) => theme.spacing(0, 1, 15, 1)
            }}
        >
            <Typography variant="h3">CASINO EN DIRECT</Typography>
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
                            sx={{
                                cursor: 'pointer',
                                zIndex: 1,
                                '& img': {
                                    width: 330
                                }
                            }}
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
