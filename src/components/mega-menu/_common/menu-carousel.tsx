// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// routes
import { RouterLink } from 'src/routes/components';
//
import Image from '../../image';
import TextMaxLine from '../../text-max-line';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from '../../carousel';
//
import { MenuCarouselProps } from '../types';

// ----------------------------------------------------------------------

export default function MenuCarousel({ products, numberShow, sx }: MenuCarouselProps) {
    const theme = useTheme();

    const carousel = useCarousel({
        slidesToShow: numberShow,
        slidesToScroll: numberShow,
        ...CarouselDots({
            sx: { mt: 3 }
        })
    });

    return (
        <Box sx={{ position: 'relative', pt: 2, ...sx }}>
            <CarouselArrows
                filled
                onNext={carousel.onNext}
                onPrev={carousel.onPrev}
                leftButtonProps={{
                    size: 'small',
                    sx: { top: 'calc(50% - 40px)', left: -8 }
                }}
                rightButtonProps={{
                    size: 'small',
                    sx: { top: 'calc(50% - 40px)', right: -8 }
                }}
            >
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    {products.map((product) => (
                        <Box key={product.name} sx={{ px: 1, textAlign: 'center' }}>
                            <Link
                                component={RouterLink}
                                href={product.path}
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: 'block',
                                    transition: theme.transitions.create('all'),
                                    '&:hover': { color: 'primary.main' }
                                }}
                            >
                                <Image
                                    alt={product.coverUrl}
                                    src={product.coverUrl}
                                    ratio="1/1"
                                    disabledEffect
                                    sx={{ borderRadius: 1, mb: 1 }}
                                />

                                <TextMaxLine variant="caption" sx={{ fontWeight: 'fontWeightSemiBold' }}>
                                    {product.name}
                                </TextMaxLine>
                            </Link>
                        </Box>
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
}
