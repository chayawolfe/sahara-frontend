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

const HomeGallery = () => {
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
            console.log(gameId);

            const result = await opengame(gameId, 'gallary', window.location.pathname);
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
                            Casino Games
                        </Typography>
                    </Typography>
                    <Button>See All</Button>
                </Stack>
                <Box position="relative">
                    <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/1.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/1.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        openGamePlay('1234');
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/2.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/2.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/3.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/3.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/4.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/4.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/5.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/5.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/6.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/6.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/7.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/7.jpg`}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    alt={`${ASSETS_API}/home/gallery/mobile/8.jpg`}
                                    src={`${ASSETS_API}/home/gallery/mobile/8.jpg`}
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
                    TOP
                    <Typography variant="h3" component="span" ml={1} color="primary">
                        CASINO GAMES
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
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/10.png`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('103');
                        }}
                    />
                    <Image
                        alt="game1"
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/9.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('4289');
                        }}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/8.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('441');
                        }}
                    />
                    <Image
                        alt="game1"
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/7.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('476');
                        }}
                    />
                </Stack>
                <Stack flexGrow={1}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/big_1.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/1.jpg`}
                        sx={{ borderRadius: 2, height: 1, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('6925');
                        }}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/5.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/3.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('7000');
                        }}
                    />
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/6.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/4.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('7012');
                        }}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/7.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/5.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('7053');
                        }}
                    />
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/8.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/6.jpg`}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('7048');
                        }}
                    />
                </Stack>
                <Stack flexGrow={1}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/big_2.jpg`}
                        src={`${ASSETS_API}/home/gallery/desktop/home_img/2.jpg`}
                        sx={{ borderRadius: 2, height: 1, cursor: 'pointer' }}
                        onClick={() => {
                            openGamePlay('8388');
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default HomeGallery;
