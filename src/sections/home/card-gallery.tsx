// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';

const HomeGallery = () => (
    <>
        <Stack
            sx={{
                p: (theme) => theme.spacing(5, 1, 5, 1)
            }}
            direction="row"
            justifyContent="space-between"
            spacing={3}
        >
            <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
                <Image src={`${ASSETS_API}/home/card/desktop/1.png`} />

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        width: 450,
                        bgcolor: '#D9B80B',
                        position: 'absolute',
                        top: 311,
                        left: -10,
                        textTransform: 'capitalize',
                        fontSize: '11px',
                        padding: '0.8px 48px',
                        transform: 'rotate(345deg)',
                        boxShadow:
                            'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
                    }}
                >
                    SPORT
                </Typography>

                <CardContent sx={{ bgcolor: '#192333', position: 'absolute', top: 400 }}>
                    <Typography variant="h5">PARIEZ SUR LES MEILLEURS CHAMPIONNATS ET LIGUES DU MONDE</Typography>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button sx={{ border: '1px solid', borderRadius: '2px', px: 4 }} href="/sports">
                            JOUE
                        </Button>
                        <Button endIcon={<ArrowRightIcon />} href="/sports">
                            En savoir plus
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
                <Image src={`${ASSETS_API}/home/card/desktop/2.png`} />

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        width: 450,
                        bgcolor: '#D9B80B',
                        position: 'absolute',
                        top: 300,
                        left: -10,
                        textTransform: 'capitalize',
                        fontSize: '11px',
                        padding: '0.8px 48px',
                        transform: 'rotate(347deg)',
                        boxShadow:
                            'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
                    }}
                >
                    CASINO
                </Typography>

                <CardContent sx={{ bgcolor: '#192333', position: 'absolute', top: 400 }}>
                    <Typography variant="h5">SEULEMENT LES MEILLEURS FOURNISSEURS SUR Betgold216</Typography>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button sx={{ border: '1px solid', borderRadius: '2px', px: 4 }} href="/casino">
                            JOUE
                        </Button>
                        <Button endIcon={<ArrowRightIcon />} href="/casino">
                            En savoir plus
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
                <Image src={`${ASSETS_API}/home/card/desktop/3.png`} />

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        width: 450,
                        bgcolor: '#D9B80B',
                        position: 'absolute',
                        top: 300,
                        left: -10,
                        textTransform: 'capitalize',
                        fontSize: '11px',
                        padding: '0.8px 48px',
                        transform: 'rotate(347deg)',
                        boxShadow:
                            'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
                    }}
                >
                    CASINO EN DIRECT
                </Typography>

                <CardContent sx={{ bgcolor: '#192333', position: 'absolute', top: 400 }}>
                    <Typography variant="h5">LES JEUX LES PLUS EXCITANTS ET AMUSANTS EN DIRECT DES STUDIOS</Typography>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button sx={{ border: '1px solid', borderRadius: '2px', px: 4 }} href="/live-casino">
                            JOUE
                        </Button>
                        <Button endIcon={<ArrowRightIcon />} href="/live-casino">
                            En savoir plus
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>

        <Box
            sx={{
                p: (theme) => theme.spacing(5, 1, 5, 1),
                display: 'grid',
                gridTemplateColumns: '30% 68%',
                gap: 3
            }}
        >
            <Card sx={{ maxWidth: 400, borderRadius: 0, bgcolor: 'transparent' }}>
                <Box
                    sx={{
                        background: `url(${ASSETS_API}/home/card/desktop/two_2.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        p: 2,
                        height: 1,
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 2.5,
                            mb: 8,
                            borderRadius: 0.75,
                            bgcolor: '#D9B80B',
                            whiteSpace: 'nowrap'
                        }}
                        href="/sports"
                        // onClick={() => loginOpen('login')}
                    >
                        Joue maintenant
                    </Button>
                </Box>
            </Card>

            <Card sx={{ borderRadius: 0, bgcolor: 'transparent' }}>
                <Box
                    sx={{
                        background: `url(${ASSETS_API}/home/card/desktop/two_1.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        p: 8
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h1">NOUVEAU</Typography>
                        <Typography variant="h1">TOURNOI</Typography>
                    </Stack>

                    <Typography variant="h3" maxWidth="50%">
                        Suivez les
                        <Box component="span" sx={{ color: '#D9B80B' }}>
                            &nbsp;&nbsp;retransmissions en direct&nbsp;&nbsp;
                        </Box>
                        directement ici
                    </Typography>

                    <Stack direction="row" spacing={2} mt={5}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                height: 1,
                                px: 2.5,
                                borderRadius: 0.75,
                                bgcolor: '#D9B80B',
                                whiteSpace: 'nowrap'
                            }}
                            href="/sports"

                            // onClick={() => loginOpen('login')}
                        >
                            Joue maintenant
                        </Button>
                        {/* <Button
                            variant="contained"
                            size="large"
                            sx={{
                                height: 1,
                                borderRadius: 0.75,
                                bgcolor: 'transparent',
                                color: 'white',
                                whiteSpace: 'nowrap'
                            }}
                            endIcon={<ArrowRightIcon />}
                            href="/tournaments"
                        >
                            En savoir plus
                        </Button> */}
                    </Stack>
                </Box>
            </Card>
        </Box>
    </>
);

export default HomeGallery;
