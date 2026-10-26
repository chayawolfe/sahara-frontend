// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
import { useSnackbar } from 'src/components/snackbar';

// apis
import { opengame } from 'src/api/game';

const HomeLive = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 2,
        ...CarouselDots({
            rounded: true,
            sx: {
                mt: {
                    xs: 1,
                    md: 3
                }
            }
        })
    });

    const openGamePlay = async (gameId: string) => {
        try {
            const result = await opengame(gameId, 'home', window.location.pathname);
            window.open(result.data, '_blank');
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
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography>
                        Top
                        <Typography component="span" ml={1} color="primary">
                            Live Casino Games
                        </Typography>
                    </Typography>
                    <Button>See All</Button>
                </Stack>
                <Box position="relative">
                    <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/1.jpg`}
                                    src={`${ASSETS_API}/home/gallery/1.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/2.jpg`}
                                    src={`${ASSETS_API}/home/gallery/2.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/3.jpg`}
                                    src={`${ASSETS_API}/home/gallery/3.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/4.jpg`}
                                    src={`${ASSETS_API}/home/gallery/4.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/5.jpg`}
                                    src={`${ASSETS_API}/home/gallery/5.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/6.jpg`}
                                    src={`${ASSETS_API}/home/gallery/6.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                        </Carousel>
                    </CarouselArrows>
                </Box>
            </Stack>
        );
    }

    return (
        <Stack
            sx={{
                p: (theme) => theme.spacing(5, 1, 5, 1)
            }}
        >
            <Box
                sx={{
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    alignSelf: 'flex-start',
                    px: 3,
                    py: 1,
                    boxShadow: 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }}
            >
                <Typography variant="h3">
                    LIVE
                    <Typography variant="h3" component="span" ml={1} color="primary">
                        GAMES
                    </Typography>
                </Typography>
            </Box>
            <Stack
                spacing={1.5}
                direction="row"
                sx={{
                    borderRadius: 3,
                    borderTopLeftRadius: 0,
                    p: 3,
                    bgcolor: 'background.default',
                    boxShadow: 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)'
                }}
            >
                <Stack spacing={1.5} direction="row">
                    <Image
                        src={`${ASSETS_API}/home/gallery/1.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('8423');
                        }}
                    />
                    <Image
                        src={`${ASSETS_API}/home/gallery/2.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('6667');
                        }}
                    />
                    <Image
                        src={`${ASSETS_API}/home/gallery/3.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('7839');
                        }}
                    />
                    <Image
                        src={`${ASSETS_API}/home/gallery/4.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('8109');
                        }}
                    />
                    <Image
                        src={`${ASSETS_API}/home/gallery/5.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('8419');
                        }}
                    />
                    <Image
                        src={`${ASSETS_API}/home/gallery/6.jpg`}
                        borderRadius={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('8424');
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default HomeLive;
