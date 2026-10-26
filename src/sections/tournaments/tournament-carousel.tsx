// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// config
import { ASSETS_API } from 'src/config-global';
// untils
import { fcustomCurrency } from 'src/utils/format-number';
// components
// import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------
const _mobilecarousels = [`${ASSETS_API}/bg/mobile/tournament_banner.png`];

const HomeCarousel = () => {
    const isMobile = useResponsive('down', 'md');
    // const _carousels = [
    //     `${ASSETS_API}/casino/${!isMobile ? 'one.png' : '1.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'two.png' : '2.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'one.png' : '1.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'two.png' : '2.png'}`
    // ];
    const _carousels = [`${ASSETS_API}/bg/tournament.svg`];
    // const _carousels = [`${ASSETS_API}/casino/${!isMobile ? 'banner.svg' : 'banner.svg'}`];

    // const carousel = useCarousel({
    //     autoplay: true,
    //     ...CarouselDots({
    //         rounded: true,
    //         sx: { mt: 1 }
    //     })
    // });

    return (
        <Box
            sx={{
                mt: {
                    xs: -3,
                    lg: -5
                },
                position: 'relative'
            }}
        >
            {/* <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}> */}
            {/* <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}> */}
            {!isMobile ? (
                _carousels.map((item, index: number) => <CarouselItem key={item} item={item} />)
            ) : (
                <CarouselMobileItem />
            )}
            {/* </Carousel> */}
            {/* </CarouselArrows> */}
        </Box>
    );
};

export default HomeCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Box sx={{ maxHeight: 500 }} py={1}>
            {/* <Image alt={item} src={item} sx={{ borderRadius: 0, width: 1, '& img': { minHeight: 200 } }} /> */}
            <Box
                sx={{
                    background: `url(${item})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2
                }}
                p={11}
            >
                <Stack direction="row" spacing={2}>
                    <Stack alignItems="center" justifyContent="center">
                        <Typography color="#192333" sx={{ fontSize: '15px', fontWeight: 400, lineHeight: 0 }}>
                            2024
                        </Typography>
                        <Typography color="#192333" sx={{ fontSize: '24px', fontWeight: 900 }}>
                            TOURNOIS
                        </Typography>
                        <Typography color="#192333" sx={{ fontSize: '32px', fontWeight: 300 }} mt={1}>
                            SUPER
                            <Box component="span" color="#FBFBFB">
                                &nbsp;PRIX
                            </Box>
                        </Typography>
                        <Button
                            sx={{
                                bgcolor: '#192333',
                                fontSize: '14px',
                                fontWeight: 700,
                                py: 2,
                                px: 6
                            }}
                        >
                            VOIR LES PRIX
                        </Button>
                    </Stack>
                </Stack>

                <Stack spacing={1}>
                    <Stack
                        direction="row"
                        sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                        p={2}
                        gap={4}
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1}>
                            <Box component="img" src={`${ASSETS_API}/tournament/bank.svg`} />
                            <Typography>Pari minimum</Typography>
                        </Stack>
                        <Typography>TND {fcustomCurrency(0)}</Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                        p={2}
                        gap={4}
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1}>
                            <Box component="img" src={`${ASSETS_API}/tournament/recently.svg`} />
                            <Typography>Commencer</Typography>
                        </Stack>
                        <Typography>01 Janvier 2024</Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                        p={2}
                        gap={4}
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1}>
                            <Box component="img" src={`${ASSETS_API}/tournament/gift.svg`} />
                            <Typography>Prix</Typography>
                        </Stack>
                        <Typography>Voir tout</Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                        p={2}
                        gap={4}
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1}>
                            <Box component="img" src={`${ASSETS_API}/tournament/time.svg`} />
                            <Typography>Date de fin</Typography>
                        </Stack>
                        <Typography>31 Décembre 2024</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

function CarouselMobileItem() {
    return (
        <Box sx={{ maxHeight: 500 }} pb={1}>
            <Box
                sx={{
                    background: `url(${_mobilecarousels[0]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 2
                }}
                p={4}
            >
                <Stack alignItems="flex-end" justifyContent="flex-end" spacing={1}>
                    <Typography color="white" sx={{ fontSize: '15px', fontWeight: 400, lineHeight: 1 }}>
                        2024
                    </Typography>
                    <Typography color="white" sx={{ fontSize: '24px', fontWeight: 900, lineHeight: 1 }}>
                        TOURNOIS
                    </Typography>
                    <Typography color="white" sx={{ fontSize: '32px', fontWeight: 300, lineHeight: 1 }}>
                        SUPER
                        <Box component="span" color="#FBFBFB" fontWeight={500}>
                            &nbsp;PRIX
                        </Box>
                    </Typography>
                    <Button
                        sx={{
                            bgcolor: 'white',
                            fontSize: '10px',
                            fontWeight: 700,
                            py: 1,
                            px: 3,
                            color: '#0C1221',
                            borderRadius: '3px'
                        }}
                    >
                        VOIR LES PRIX
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
