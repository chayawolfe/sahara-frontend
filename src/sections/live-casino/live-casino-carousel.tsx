import { useEffect } from 'react';
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

import { useGameContext } from '../casino/context';

// ----------------------------------------------------------------------

const LiveCasinoCarousel = () => {
    const isMobile = useResponsive('down', 'md');
    const { initGetGame } = useGameContext();
    const _carousels = !isMobile
        ? [`${ASSETS_API}/bg/livecasino_banner.png`]
        : [`${ASSETS_API}/home/carousel/mobile/banner.png`];
    // const _carousels = [`${ASSETS_API}/live-casino/${isMobile ? 'mobile' : 'desktop'}/banner.png`];

    useEffect(() => {
        initGetGame('livecasino');
    }, [initGetGame]);

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
                ? _carousels.map((item) => <CarouselMobileItem key={item} item={item} />)
                : _carousels.map((item) => <CarouselItem key={item} item={item} />)}
        </Box>
    );
};

export default LiveCasinoCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Box sx={{ maxHeight: 500 }} py={3}>
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
                        color="#D9B80B"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        CASINO
                    </Typography>
                    <Typography
                        variant="h1"
                        className="bannerBigText"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        EN DIRECT
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
                        Des jeux en direct passionnants,
                    </Typography>
                    <Typography
                        variant="h3"
                        className="bannerSmallText"
                        sx={{
                            textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgb(161 161 161 / 75%)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        uniquement les meilleurs fournisseurs
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
                        CASINO
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75)' }}
                    >
                        EN DIRECT
                    </Typography>
                </Stack>

                <Stack>
                    <Typography fontSize="13px" color="#D4D4D4" fontWeight={500} lineHeight="15.23px">
                        Des jeux en direct passionnants,
                    </Typography>
                    <Typography fontSize="13px" color="#D4D4D4" fontWeight={500} lineHeight="15.23px">
                        uniquement les meilleurs fournisseurs
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
                            width: '93px',
                            borderRadius: '3px',
                            bgcolor: 'transparent',
                            color: 'white',
                            whiteSpace: 'nowrap',
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
