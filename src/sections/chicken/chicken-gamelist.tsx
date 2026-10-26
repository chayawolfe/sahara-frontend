// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';

const CasinoGameList = () => {
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

    return (
        <Stack spacing={2} sx={{ mt: 5 }}>
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="POPULAR SLOTS"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Popluar
                            <Typography component="span" ml={1} color="primary">
                                Slots
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="EXCLUSIVE GAMES"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Exclusive
                            <Typography component="span" ml={1} color="primary">
                                Games
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="BONUS BUY"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Bonus
                            <Typography component="span" ml={1} color="primary">
                                Buy
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="MEGAWAYS"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Mega
                            <Typography component="span" color="primary">
                                Ways
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="JACKPOT GAMES"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Jackpot
                            <Typography component="span" ml={1} color="primary">
                                Games
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
            {mdUp ? (
                <Card>
                    <CardHeader
                        title="NEW GAME"
                        titleTypographyProps={{
                            color: 'textSecondary'
                        }}
                    />
                    <Stack
                        spacing={1.5}
                        sx={{ p: 2, mt: 3, mx: 2, mb: 3, borderRadius: 1, bgcolor: 'background.default' }}
                        direction="row"
                    >
                        <Image src="https://static.inpcdn.com/30,0971f30e375472.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/3,4886197c4c4a.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/39,0bd420c59a889c.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/27,07349010e7ca51.webp" borderRadius={1} />
                        <Image src="https://static.inpcdn.com/13,03918d95151b55.webp" borderRadius={1} />
                    </Stack>
                </Card>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        p: (theme) => theme.spacing(0, 1, 0, 1)
                    }}
                >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>
                            New
                            <Typography component="span" ml={1} color="primary">
                                Games
                            </Typography>
                        </Typography>
                        <Button>See All</Button>
                    </Stack>
                    <Box position="relative">
                        <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        src="https://static.inpcdn.com/30,0971f30e375472.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        src="https://static.inpcdn.com/3,4886197c4c4a.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        src="https://static.inpcdn.com/39,0bd420c59a889c.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        src="https://static.inpcdn.com/27,07349010e7ca51.webp"
                                        sx={{
                                            borderRadius: 1,
                                            mr: 1
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        alt="https://static.inpcdn.com/13,03918d95151b55.webp"
                                        src="https://static.inpcdn.com/13,03918d95151b55.webp"
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
            )}
        </Stack>
    );
};

export default CasinoGameList;
