import { useEffect, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Dialog from '@mui/material/Dialog';

// config
import { ASSETS_API } from 'src/config-global';
import { useResponsive } from 'src/hooks/use-responsive';
// untils
import { fcustomCurrency } from 'src/utils/format-number';
// apis
import { getRanking } from 'src/api/game';

import Table from './table-row';
import MonthlyTable from './monthly-table-row';

const Tournament = () => {
    const isMobile = useResponsive('down', 'md');
    const [open, setOpen] = useState(false);
    const [rankingArray, setRankingArray] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const init = async () => {
        try {
            const res = await getRanking();
            setRankingArray(res.users.reverse());
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        init();
    }, []);

    if (isMobile) {
        return (
            <Grid container spacing={2} py={2}>
                <Grid item xs={12} md={6} lg={8}>
                    <Stack spacing={2} pb={3}>
                        <Stack
                            spacing={1}
                            direction="row"
                            display="grid"
                            gridTemplateColumns="48% 48%"
                            justifyContent="space-between"
                        >
                            <Stack
                                direction="row"
                                gap={1}
                                justifyContent="space-between"
                                alignItems="center"
                                p="5px"
                                py={2}
                                sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                            >
                                <Stack direction="row" spacing={1}>
                                    <Box component="img" src={`${ASSETS_API}/tournament/bank.svg`} />
                                    <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                                        Pari minimum
                                    </Typography>
                                </Stack>
                                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                                    $ {fcustomCurrency(0)}
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                                p="5px"
                                py={2}
                                gap={1}
                                justifyContent="space-between"
                            >
                                <Stack direction="row" spacing={1}>
                                    <Box component="img" src={`${ASSETS_API}/tournament/gift.svg`} />
                                    <Typography variant="caption">Prix</Typography>
                                </Stack>
                                <Typography sx={{ textDecoration: 'underline' }} variant="caption">
                                    Voir tout
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack
                            spacing={1}
                            direction="row"
                            display="grid"
                            gridTemplateColumns="48% 48%"
                            justifyContent="space-between"
                        >
                            <Stack
                                direction="row"
                                gap={1}
                                p="5px"
                                py={2}
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                            >
                                <Stack direction="row" spacing={1}>
                                    <Box component="img" src={`${ASSETS_API}/tournament/recently.svg`} />
                                    <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                                        Commencer
                                    </Typography>
                                </Stack>
                                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                                    01 January, 2024
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                sx={{ bgcolor: '#0C1221A8', opacity: 0.8, border: '1px solid #314256' }}
                                p="5px"
                                py={2}
                                gap={1}
                                justifyContent="space-between"
                            >
                                <Stack direction="row" spacing={1}>
                                    <Box component="img" src={`${ASSETS_API}/tournament/time.svg`} />
                                    <Typography variant="caption">Date de fin </Typography>
                                </Stack>
                                <Typography variant="caption">31 Décembre 2024</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Card sx={{ borderRadius: 0 }}>
                        <CardContent sx={{ bgcolor: '#192333' }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    sx={{
                                        bgcolor: '#D9B80B',
                                        borderRadius: '5px',
                                        color: '#192333',
                                        fontSize: '12px',
                                        fontWeight: 800
                                    }}
                                >
                                    BACK
                                </Button>
                                <Typography sx={{ fontSize: '16px', fontWeight: 500, flexGrow: 1 }} textAlign="center">
                                    LISTE DES PRIX CLASSEMENT ANNUAL
                                </Typography>
                            </Stack>

                            <Stack mt={5} spacing={2}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        1
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ère
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT ANNUEL:
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        iPhone 15 Pro
                                    </Link>
                                </Stack>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        2
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ème
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT ANNUEL:
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        Play Station 5
                                    </Link>
                                </Stack>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        3
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ème
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT ANNUEL:
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        Asus PC
                                    </Link>
                                </Stack>
                            </Stack>

                            <Typography
                                my={5}
                                sx={{ fontSize: '16px', fontWeight: 900, flexGrow: 1 }}
                                textAlign="center"
                            >
                                LISTE DES PRIX CLASSEMENT MENSEUL
                            </Typography>

                            <Stack spacing={2}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        1
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ère
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT MENSUEL:
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        50 TND Gift Card
                                    </Link>
                                </Stack>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        2
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ème
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT MENSUEL:
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        40 TND Gift Card
                                    </Link>
                                </Stack>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={1}
                                    sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                    p={1}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            bgcolor: '#192333',
                                            fontSize: '40px',
                                            fontWeight: 900,
                                            borderRadius: '5px'
                                        }}
                                        px={2.5}
                                    >
                                        3
                                        <Typography
                                            variant="caption"
                                            sx={{ position: 'absolute', top: '10px', right: 6 }}
                                        >
                                            ème
                                        </Typography>
                                    </Box>
                                    <Typography flexGrow={1} fontWeight={800} variant="caption">
                                        PRIX DE CLASSEMENT MENSUEL:{' '}
                                    </Typography>
                                    <Link underline="always" color="#A8AFBE" fontWeight={900} fontSize="10px">
                                        30 TND Gift Card
                                    </Link>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ borderRadius: 0 }}>
                        <CardContent sx={{ bgcolor: '#192333' }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    sx={{
                                        bgcolor: '#D9B80B',
                                        fontWeight: 800,
                                        color: '#192333',
                                        py: 1,
                                        borderRadius: '5px'
                                    }}
                                >
                                    ANNÉE
                                </Button>
                                <Typography variant="h6" color="#FFFFFF">
                                    CLASSIQUE
                                </Typography>
                                <Button
                                    sx={{
                                        bgcolor: '#2D394D',
                                        fontWeight: 800,
                                        color: '#A8AFBE',
                                        py: 1,
                                        borderRadius: '5px'
                                    }}
                                    onClick={handleOpen}
                                >
                                    MOIS
                                </Button>
                            </Stack>

                            <Table arrayData={rankingArray} />
                        </CardContent>
                    </Card>
                    <Card sx={{ borderRadius: 0, mt: 3 }}>
                        <CardContent sx={{ bgcolor: '#192333' }}>
                            <Typography variant="h6" textAlign="center">
                                COMMENT PARTICIPER ?
                            </Typography>

                            <Grid container spacing={3} m={0}>
                                <Grid item xs={12} md={6} lg={6}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: '40px',
                                                minWidth: '40px',
                                                height: '40px',
                                                background: '#2D394D',
                                                borderRadius: '5px'
                                            }}
                                        />
                                        <Typography variant="caption">Jouez à nos jeux et gagnez des points</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: '40px',
                                                minWidth: '40px',
                                                height: '40px',
                                                background: '#2D394D',
                                                borderRadius: '5px'
                                            }}
                                        />
                                        <Typography variant="caption">1 TND joué = 10 points gagnés</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: '40px',
                                                minWidth: '40px',
                                                height: '40px',
                                                background: '#2D394D',
                                                borderRadius: '5px'
                                            }}
                                        />
                                        <Typography variant="caption">
                                            Plus vous pariez, plus vous avez de chances de grimper dans le classement et
                                            de gagner un prix.
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: '40px',
                                                minWidth: '40px',
                                                height: '40px',
                                                background: '#2D394D',
                                                borderRadius: '5px'
                                            }}
                                        />
                                        <Typography variant="caption">Terminez dans les 3 premières places</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card sx={{ borderRadius: 0, mt: 2 }}>
                        <CardContent sx={{ bgcolor: '#192333' }}>
                            <Typography variant="h6" color="#FFFFFF">
                                TERMES ET CONDITIONS
                            </Typography>
                            <Typography mt={3} variant="caption">
                                Play our games and earn points Play our games and earn points Play our games and earn
                                points Play our games and earn points.
                            </Typography>
                            <Stack pt={2}>
                                <Typography variant="caption">・ Play our games and</Typography>
                                <Typography variant="caption">・ earn pointsPlay our games and earn points</Typography>
                                <Typography variant="caption">・ Play our games and earn points</Typography>
                                <Typography variant="caption">・ Play our games and earn points</Typography>
                            </Stack>

                            <Typography py={1}>Play our games and earn points:</Typography>

                            <Stack>
                                <Typography variant="caption">・ Play our games and earn points</Typography>
                                <Typography variant="caption">・ Play our games and earn points</Typography>
                            </Stack>

                            <Stack direction="row" spacing={2} py={4}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        height: 1,
                                        px: 2.5,
                                        borderRadius: 0.75,
                                        bgcolor: '#D9B80B',
                                        whiteSpace: 'nowrap',
                                        color: '#192333'
                                    }}
                                >
                                    LEARN MORE
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
                                    endIcon={<ArrowRightIcon />}
                                >
                                    START PLAYING
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid xs */}

                <Dialog
                    onClose={handleClose}
                    open={open}
                    maxWidth="md"
                    fullWidth
                    sx={{ '& .MuiPaper-root': { borderRadius: 0, background: 'transparent' } }}
                >
                    <MonthlyTable />
                </Dialog>
            </Grid>
        );
    }

    return (
        <Grid container spacing={2} py={2}>
            <Grid item xs={12} md={6} lg={8}>
                <Card sx={{ borderRadius: 0 }}>
                    <CardContent sx={{ bgcolor: '#192333' }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button
                                sx={{
                                    bgcolor: '#2D394D',
                                    borderRadius: '5px',
                                    color: '#A8AFBE',
                                    fontSize: '13px',
                                    fontWeight: 800
                                }}
                                startIcon={<ArrowLeftIcon sx={{ margin: 0 }} />}
                            >
                                RETOURNER
                            </Button>
                            <Typography sx={{ fontSize: '20px', fontWeight: 500, flexGrow: 1 }} textAlign="center">
                                LISTE DES PRIX
                                <Box component="span" sx={{ fontWeight: 900 }}>
                                    &nbsp; CLASSEMENT ANNUAL
                                </Box>
                            </Typography>
                        </Stack>

                        <Stack mt={15} spacing={2}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    1
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '12px', right: 6 }}>
                                        ère
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 1ère PLACE AU CLASSEMENT ANNUEL:
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    iPhone 15 Pro
                                </Link>
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    2
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '10px', right: 0 }}>
                                        ème
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 2ème PLACE AU CLASSEMENT ANNUEL:
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    Play Station 5
                                </Link>
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    3
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '10px', right: 0 }}>
                                        ème
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 3ème PLACE AU CLASSEMENT ANNUEL:
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    Asus PC
                                </Link>
                            </Stack>
                        </Stack>

                        <Typography my={15} sx={{ fontSize: '20px', fontWeight: 500, flexGrow: 1 }} textAlign="center">
                            LISTE DES PRIX
                            <Box component="span" sx={{ fontWeight: 900 }}>
                                &nbsp;CLASSEMENT MENSUEL
                            </Box>
                        </Typography>

                        <Stack spacing={2}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    1
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '12px', right: 6 }}>
                                        ère
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 1ère PLACE AU CLASSEMENT MENSUEL :
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    50 TND Giftcard
                                </Link>
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    2
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '10px', right: 0 }}>
                                        ème
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 2ème PLACE DU CLASSEMENT MENSUEL:
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    40 TND Giftcard
                                </Link>
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ bgcolor: '#2D394D', borderRadius: '5px' }}
                                p={1}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        bgcolor: '#192333',
                                        fontSize: '48px',
                                        fontWeight: 900,
                                        borderRadius: '5px'
                                    }}
                                    px={2.5}
                                >
                                    3
                                    <Typography variant="caption" sx={{ position: 'absolute', top: '10px', right: 0 }}>
                                        ème
                                    </Typography>
                                </Box>
                                <Typography flexGrow={1} fontWeight={800}>
                                    PRIX DE LA 3ème PLACE DU CLASSEMENT MENSUEL:
                                </Typography>
                                <Link underline="always" color="#A8AFBE" fontWeight={900}>
                                    30 TND Giftcard
                                </Link>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>

                <Card sx={{ borderRadius: 0, mt: 3 }}>
                    <CardContent sx={{ bgcolor: '#192333' }}>
                        <Typography variant="h6" textAlign="center">
                            COMMENT PARTICIPER ?
                        </Typography>

                        <Grid container spacing={3} m={0}>
                            <Grid item xs={12} md={6} lg={6}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Box
                                        sx={{
                                            width: '60px',
                                            minWidth: '60px',
                                            height: '60px',
                                            background: '#2D394D',
                                            borderRadius: '5px'
                                        }}
                                    />
                                    <Typography variant="caption">Jouez à nos jeux et gagnez des points</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                    <Box
                                        sx={{
                                            width: '60px',
                                            minWidth: '60px',
                                            height: '60px',
                                            background: '#2D394D',
                                            borderRadius: '5px'
                                        }}
                                    />
                                    <Typography variant="caption">
                                        Plus vous pariez, plus vous avez de chances de grimper dans le classement et de
                                        gagner un prix.
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6} lg={6}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Box
                                        sx={{
                                            width: '60px',
                                            minWidth: '60px',
                                            height: '60px',
                                            background: '#2D394D',
                                            borderRadius: '5px'
                                        }}
                                    />
                                    <Typography variant="caption">1 TND joué = 10 points gagnés</Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6} lg={6}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Box
                                        sx={{
                                            width: '60px',
                                            minWidth: '60px',
                                            height: '60px',
                                            background: '#2D394D',
                                            borderRadius: '5px'
                                        }}
                                    />
                                    <Typography variant="caption">Terminez dans les 3 premières places</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ borderRadius: 0 }}>
                    <CardContent sx={{ bgcolor: '#192333' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Button
                                sx={{
                                    bgcolor: '#D9B80B',
                                    fontWeight: 800,
                                    color: '#192333',
                                    py: 1,
                                    borderRadius: '5px'
                                }}
                            >
                                ANNÉE
                            </Button>
                            <Typography variant="h6" color="#FFFFFF">
                                CLASSIFICATION
                            </Typography>
                            <Button
                                sx={{
                                    bgcolor: '#2D394D',
                                    fontWeight: 800,
                                    color: '#A8AFBE',
                                    py: 1,
                                    borderRadius: '5px'
                                }}
                                onClick={handleOpen}
                            >
                                MOIS
                            </Button>
                        </Stack>

                        <Table arrayData={rankingArray} />
                    </CardContent>
                </Card>
                <Card sx={{ borderRadius: 0, mt: 2 }}>
                    <CardContent sx={{ bgcolor: '#192333' }}>
                        <Typography variant="h6" color="#FFFFFF">
                            TERMES ET CONDITIONS
                        </Typography>
                        <Typography mt={3} variant="caption">
                            Play our games and earn points Play our games and earn points Play our games and earn points
                            Play our games and earn points.
                        </Typography>
                        <Stack pt={2}>
                            <Typography variant="caption">・ Play our games and</Typography>
                            <Typography variant="caption">・ earn pointsPlay our games and earn points</Typography>
                            <Typography variant="caption">・ Play our games and earn points</Typography>
                            <Typography variant="caption">・ Play our games and earn points</Typography>
                        </Stack>

                        <Typography py={1}>Play our games and earn points:</Typography>

                        <Stack>
                            <Typography variant="caption">・ Play our games and earn points</Typography>
                            <Typography variant="caption">・ Play our games and earn points</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2} py={4}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    height: 1,
                                    px: 2.5,
                                    borderRadius: 0.75,
                                    bgcolor: '#D9B80B',
                                    whiteSpace: 'nowrap',
                                    color: '#192333'
                                }}
                            >
                                LEARN MORE
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
                                endIcon={<ArrowRightIcon />}
                            >
                                START PLAYING
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            {/* <Grid xs */}

            <Dialog
                onClose={handleClose}
                open={open}
                maxWidth="md"
                fullWidth
                sx={{ '& .MuiPaper-root': { borderRadius: 0, background: 'transparent' } }}
            >
                <MonthlyTable />
            </Dialog>
        </Grid>
    );
};

export default Tournament;
