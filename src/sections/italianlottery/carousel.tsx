// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const HomeCarousel = () => {
    const isMobile = useResponsive('down', 'md');
    const _carousels = isMobile
        ? [`${ASSETS_API}/bg/mobile/lottery_banner.png`]
        : [`${ASSETS_API}/bg/lottery_banner.png`];

    // const _carousels = [`${ASSETS_API}/bg/${!isMobile ? 'racing_banner.svg' : 'racing_banner.svg'}`];

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
            {isMobile
                ? _carousels.map((item, index: number) => <CarouselMobileItem key={item} item={item} />)
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
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        LES
                    </Typography>
                    <Typography
                        variant="h1"
                        color="#D9B80B"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        COURSE
                    </Typography>
                </Stack>

                <Stack>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{
                            textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Jeux de course, instantanés,
                    </Typography>

                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{
                            textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        rapides et amusants
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
                    top: 20,
                    left: 15
                }}
            >
                <Stack direction="row" spacing={1}>
                    <Typography
                        variant="h3"
                        color="#D9B80B"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        JEUX
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        DE LOTERIE
                    </Typography>
                </Stack>

                <Stack mt="-10px">
                    <Typography fontSize="13px" color="#FFFFFF" fontWeight={500} lineHeight="15.23px">
                        Participez aux loteries, tirages
                    </Typography>
                    <Typography fontSize="13px" color="#FFFFFF" fontWeight={500} lineHeight="15.23px">
                        différents toutes les 5 minutes
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            height: '25px',
                            borderRadius: '3px',
                            bgcolor: '#D9B80B',
                            whiteSpace: 'nowrap',
                            width: '93px',
                            fontSize: '12px',
                            fontWeight: 700
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
                            whiteSpace: 'nowrap',
                            width: '93px',
                            fontSize: '12px',
                            fontWeight: 700
                        }}
                    >
                        Se connecter
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
