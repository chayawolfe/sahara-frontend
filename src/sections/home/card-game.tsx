// @mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';

// apis

const CardGame = () => (
    <Stack
        sx={{
            p: (theme) => theme.spacing(5, 1, 5, 1)
        }}
        direction="row"
        justifyContent="space-between"
        spacing={3}
    >
        <Card
            sx={{
                maxWidth: 400,
                borderRadius: 0,
                bgcolor: 'transparent'
            }}
        >
            <Image src={`${ASSETS_API}/home/cardgame/desktop/1.png`} />

            <Stack
                sx={{
                    position: 'absolute',
                    top: 385,
                    left: '17%'
                }}
                direction="column"
                alignItems="center"
                gap={2}
            >
                <Stack alignItems="center" justifyContent="center">
                    <Typography variant="h4" sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}>
                        TOUS LES SPORT
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#D9B80B"
                        lineHeight={0.5}
                        sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}
                    >
                        DANS LE MONDE
                    </Typography>
                </Stack>
                <Button
                    sx={{
                        borderRadius: '2px',
                        px: 8,
                        py: 1,
                        mt: 2,
                        bgcolor: '#ECEEFF',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: 900
                    }}
                    href="/sports"
                >
                    JOUE MAINTENANT
                </Button>
            </Stack>
        </Card>

        <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
            <Image src={`${ASSETS_API}/home/cardgame/desktop/2.png`} />

            <Stack
                sx={{
                    position: 'absolute',
                    top: 385,
                    left: '17%'
                }}
                direction="column"
                alignItems="center"
                gap={2}
            >
                <Stack alignItems="center" justifyContent="center">
                    <Typography variant="h4" sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}>
                        NOVEAUX PARIS
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#D9B80B"
                        lineHeight={0.5}
                        sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}
                    >
                        DE COURSE
                    </Typography>
                </Stack>
                <Button
                    sx={{
                        borderRadius: '2px',
                        px: 8,
                        py: 1,
                        mt: 2,
                        bgcolor: '#ECEEFF',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: 900
                    }}
                    href="/racing"
                >
                    JOUE MAINTENANT
                </Button>
            </Stack>
        </Card>

        <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
            <Image src={`${ASSETS_API}/home/cardgame/desktop/3.png`} />

            <Stack
                sx={{
                    position: 'absolute',
                    top: 385,
                    left: '17%'
                }}
                direction="column"
                alignItems="center"
                gap={2}
            >
                <Stack alignItems="center" justifyContent="center">
                    <Typography variant="h4" sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}>
                        LES MEILLEURS
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#D9B80B"
                        lineHeight={0.5}
                        sx={{ textShadow: '0 0 10px black, 0 0 7px black' }}
                    >
                        JEUX DU MONDE
                    </Typography>
                </Stack>
                <Button
                    sx={{
                        borderRadius: '2px',
                        px: 8,
                        py: 1,
                        mt: 2,
                        bgcolor: '#ECEEFF',
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: 900
                    }}
                    href="/sports"
                >
                    JOUE MAINTENANT
                </Button>
            </Stack>
        </Card>
    </Stack>
);

export default CardGame;
