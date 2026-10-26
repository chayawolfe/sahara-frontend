// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// config
import { ASSETS_API } from 'src/config-global';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Image from 'src/components/image';
// import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';

import { useResponsive } from 'src/hooks/use-responsive';
import { useSportsContext } from '../casino/sportsbook';
// ----------------------------------------------------------------------

const HomeCarousel = () => {
    const isMobile = useResponsive('down', 'md');

    // const carousel = useCarousel({
    //     autoplay: true,
    //     ...CarouselDots({
    //         rounded: true,
    //         sx: {
    //             mt: {
    //                 xs: 1,
    //                 md: 3
    //             }
    //         }
    //     })
    // });

    const _carousels = !isMobile
        ? [`${ASSETS_API}/bg/home_banner.png`]
        : [`${ASSETS_API}/home/carousel/mobile/banner.png`];

    return (
        <Box
            sx={{
                mt: {
                    xs: -3,
                    lg: -5
                },
                position: 'relative',
                '& .component-image.MuiBox-root': {
                    width: '100%'
                }
            }}
        >
            {!isMobile
                ? _carousels.map((item) => <CarouselItem key={item} item={item} />)
                : _carousels.map((item) => <CarouselMobileItem key={item} item={item} />)}
        </Box>
    );
};

export default HomeCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    const { setLogin } = useSportsContext();
    const { user } = useAuthContext();

    const handleClick = () => {
        document.getElementById('clickId')?.click();
    }
    return (
        <Box onClick={handleClick}>
            <a href="https://games.api.com" id="clickId" target="_blank" rel="noreferrer" style={{ display: 'none' }}>
                &nbsp;
            </a>
            <Image
                alt={item}
                src={item}
                sx={{
                    borderRadius: 0,
                    '& img': { minHeight: 200, maxHeight: 480, objectFit: 'unset' }
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 2,
                    position: 'absolute',
                    top: 30,
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
                        BOOSTER
                    </Typography>
                    <Typography
                        variant="h1"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        COMBO
                    </Typography>
                </Stack>

                <Stack>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.7)' }}
                    >
                        Découvrez le bonus de bienvenue sur
                    </Typography>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.7)' }}
                    >
                        Betgold216 avec votre shop de confiance
                    </Typography>
                </Stack>
                {!user && (
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ height: 1, px: 2.5, borderRadius: 0.75, bgcolor: '#D9B80B', whiteSpace: 'nowrap' }}
                            onClick={() => {
                                setLogin('login');
                            }}
                        >
                            Se connecter
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                height: 1,
                                borderRadius: 0.75,
                                bgcolor: 'transparent',
                                color: 'white',
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => {
                                setLogin('register');
                            }}
                            endIcon={<ArrowRightIcon />}
                        >
                            {`S'inscrire`}
                        </Button>
                    </Stack>
                )}
            </Box>
        </Box>
    );
}

function CarouselMobileItem({ item }: { item: string }) {
    const { setLogin } = useSportsContext();
    const handleClick = () => {
        document.getElementById('clickId')?.click();
    }
    return (
        <Box mb={2} onClick={handleClick}>
            <a href="https://games.api.com" id="clickId" target="_blank" rel="noreferrer" style={{ display: 'none' }}>
                &nbsp;
            </a>
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
                        BOOSTER
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        COMBO
                    </Typography>
                </Stack>

                <Stack mt="-5px">
                    <Typography
                        fontSize="13px"
                        color="#FFFFFF"
                        fontWeight={500}
                        lineHeight="15.23px"
                    // sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.7)' }}
                    >
                        Découvrez le bonus de bienvenue sur
                    </Typography>
                    <Typography
                        fontSize="13px"
                        color="#FFFFFF"
                        fontWeight={500}
                        lineHeight="15.23px"
                    // sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.7)' }}
                    >
                        Betgold216 avec votre shop de confiance
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            px: 3,
                            borderRadius: '3px',
                            bgcolor: '#D9B80B',
                            whiteSpace: 'nowrap',
                            fontSize: '12px',
                            fontWeight: 700,
                            height: '25px'
                        }}
                        onClick={() => {
                            setLogin('register');
                        }}
                    >
                        S’inscrire
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            borderRadius: '3px',
                            bgcolor: 'transparent',
                            color: 'white',
                            whiteSpace: 'nowrap',
                            height: '25px'
                        }}
                        onClick={() => {
                            setLogin('login');
                        }}
                        endIcon={<ArrowRightIcon />}
                    >
                        Se connecter
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
