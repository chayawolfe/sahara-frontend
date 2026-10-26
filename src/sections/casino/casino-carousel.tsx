// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
// import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const HomeCarousel = () => {
    const isMobile = useResponsive('down', 'md');
    // const _carousels = [
    //     `${ASSETS_API}/casino/${!isMobile ? 'one.png' : '1.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'two.png' : '2.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'one.png' : '1.png'}`,
    //     `${ASSETS_API}/casino/${!isMobile ? 'two.png' : '2.png'}`
    // ];
    const _carousels = [`${ASSETS_API}/bg/casino_banner.png`];
    const _carouselsMobile = [`${ASSETS_API}/casino/mobile/banner.png`];
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
                    xs: 0,
                    lg: -5
                },
                position: 'relative'
            }}
        >
            {isMobile
                ? _carouselsMobile.map((item, index: number) => <CarouselMobileItem key={item} item={item} />)
                : _carousels.map((item, index: number) => <CarouselItem key={item} item={item} />)}
        </Box>
    );
};

export default HomeCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Box sx={{ maxHeight: 500 }} py={1}>
            <Image alt={item} src={item} sx={{ borderRadius: 0, width: 1, '& img': { minHeight: 200 } }} />
            <Box
                sx={{
                    // background: `url(${item})`,
                    // backgroundSize: 'contain',
                    // height: 550,
                    // backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 2,
                    position: 'absolute',
                    top: 20,
                    left: 50
                }}
                p={5}
            >
                <Stack direction="row" spacing={2}>
                    <Typography
                        variant="h1"
                        color="#D9B80B"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        JEUX DE
                    </Typography>
                    <Typography
                        variant="h1"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgb(161 161 161 / 75%)' }}
                    >
                        CASINO
                    </Typography>
                </Stack>

                <Stack>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{
                            textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgb(161 161 161 / 75%)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {`Obtenez jusqu'à 100% de bonus `}
                    </Typography>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{
                            textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgb(161 161 161 / 75%)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        de bienvenue sur les sports et le casino
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

function CarouselMobileItem({ item }: { item: string }) {
    return (
        <Box>
            <Image
                alt={item}
                src={item}
                sx={{
                    borderRadius: 0,
                    '& img': { minHeight: 136, maxHeight: 480, objectFit: 'unset' }
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
                    left: 15
                }}
            >
                <Stack direction="row" spacing={1}>
                    <Typography
                        variant="h3"
                        color="#D9B80B"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        JEUX DE
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        CASINO
                    </Typography>
                </Stack>

                <Stack>
                    <Typography fontSize="13px" color="#FFFFFF" fontWeight={500} lineHeight="15.23px">
                        {`Obtenez jusqu'à 100% de bonus de`}
                    </Typography>
                    <Typography fontSize="13px" color="#FFFFFF" fontWeight={500} lineHeight="15.23px">
                        bienvenue sur les sports et le casino
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            height: '25px',
                            width: '93px',
                            borderRadius: '3px',
                            bgcolor: '#D9B80B',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        S’inscrire
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            height: '25px',
                            borderRadius: '3px',
                            bgcolor: 'transparent',
                            color: 'white',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Se connecter
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
