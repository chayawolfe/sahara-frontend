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

const HomeMini = () => {
    const mdUp = useResponsive('up', 'md');

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: mdUp ? 5 : 2,
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

    const renderCarousel = (
        <Box position="relative">
            <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/1.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/1.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/2.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/2.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/3.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/3.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/4.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/4.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/5.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/5.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box>
                    {/* <Box pr={1}>
                        <Image
                            alt={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/3.jpeg`}
                            src={`${ASSETS_API}/home/mini/${mdUp ? 'desktop' : 'mobile'}/3.jpeg`}
                            ratio="1/1"
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Box> */}
                </Carousel>
            </CarouselArrows>
        </Box>
    );

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
                {renderCarousel}
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
                    MINI
                    <Typography variant="h3" component="span" ml={1} color="primary">
                        GAMES
                    </Typography>
                </Typography>
            </Box>
            <Stack
                spacing={1.5}
                sx={{
                    borderRadius: 3,
                    borderTopLeftRadius: 0,
                    p: 3,
                    bgcolor: 'background.default',
                    boxShadow: 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)'
                }}
            >
                {renderCarousel}
            </Stack>
        </Stack>
    );
};

export default HomeMini;
