import { useCallback, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// config
import { ASSETS_API } from 'src/config-global';

// components
import { useResponsive } from 'src/hooks/use-responsive';

// apis
import { getJackpot } from 'src/api/game';

// utils
import { fcustomCurrency } from 'src/utils/format-number';

const CasinoCategories = () => {
    const mdUp = useResponsive('up', 'md');

    const [jackpot, setJackpot] = useState<any>({
        silver: 0,
        gold: 0,
        platinum: 0
    });
    const init = useCallback(async () => {
        const result = await getJackpot();
        if (result) {
            setJackpot({ silver: result.silverValue, gold: result.goldValue, platinum: result.platinumValue });
        }
    }, []);

    setTimeout(() => {
        init();
    }, 3000);

    // useEffect(() => {
    //     init();
    // }, [init]);

    return (
        <>
            {mdUp ? (
                <Grid container md={12} justifyContent="space-between" spacing={2} alignItems="flex-end" mt={-5}>
                    <Grid
                        item
                        md={4}
                        sx={{
                            position: 'relative'
                        }}
                    >
                        <Box component="img" alt="gold" src={`${ASSETS_API}/jackpot/silver.png`} />
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ position: 'absolute', top: '42%', left: '10%' }}
                        >
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '40px', height: '40px' }}
                            />
                            <Stack>
                                <Typography fontSize={24} fontWeight={500}>
                                    {fcustomCurrency(jackpot.silver)} TND
                                </Typography>
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                    color="#748194"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Montant du jackpot
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid
                        item
                        md={4}
                        sx={{
                            position: 'relative'
                        }}
                    >
                        <Box component="img" alt="gold" src={`${ASSETS_API}/jackpot/platinum.png`} />
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ position: 'absolute', top: '42%', left: '10%' }}
                        >
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '40px', height: '40px' }}
                            />
                            <Stack>
                                <Typography fontSize={24} fontWeight={500}>
                                    {fcustomCurrency(jackpot.gold)} TND
                                </Typography>
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                    color="#748194"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Montant du jackpot
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid
                        item
                        md={4}
                        sx={{
                            position: 'relative'
                        }}
                    >
                        <Box component="img" alt="gold" src={`${ASSETS_API}/jackpot/gold.png`} />
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ position: 'absolute', top: '42%', left: '10%' }}
                        >
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '40px', height: '40px' }}
                            />
                            <Stack>
                                <Typography fontSize={24} fontWeight={500}>
                                    {fcustomCurrency(jackpot.platinum)} TND
                                </Typography>
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                    color="#748194"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Montant du jackpot
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            ) : (
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        overflowX: 'auto',
                        width: '100%',
                        p: 1,
                        '::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            bgcolor: '#192333',
                            borderRadius: '10px',
                            pl: 1,
                            pr: 14,
                            display: 'flex',
                            alignItems: 'center',
                            height: '63px',
                            width: '165px'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '24px', height: '24px' }}
                            />
                            <Stack>
                                <Typography fontSize={13} fontWeight={800} whiteSpace="nowrap">
                                    {fcustomCurrency(jackpot.silver)} TND
                                </Typography>
                                <Typography
                                    fontSize={11}
                                    fontWeight={900}
                                    color="#D5B50B"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Jackpot Amount
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            p={1}
                            sx={{
                                position: 'absolute',
                                top: '-5px',
                                right: 10,
                                bgcolor: '#D9B80B',
                                height: '17px',
                                width: '77px'
                            }}
                        >
                            <Typography sx={{ fontWeight: 800, bgcolor: '#D9B80B' }} fontSize={10}>
                                MINEURE
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            bgcolor: '#192333',
                            borderRadius: '10px',
                            pl: 1,
                            pr: 14,
                            display: 'flex',
                            alignItems: 'center',
                            height: '63px',
                            width: '165px'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '24px', height: '24px' }}
                            />
                            <Stack>
                                <Typography fontSize={13} fontWeight={800} whiteSpace="nowrap">
                                    {fcustomCurrency(jackpot.gold)} TND
                                </Typography>
                                <Typography
                                    fontSize={11}
                                    fontWeight={900}
                                    color="#D5B50B"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Jackpot Amount
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            p={1}
                            sx={{
                                position: 'absolute',
                                top: '-5px',
                                right: 10,
                                bgcolor: '#D9B80B',
                                height: '17px',
                                width: '77px'
                            }}
                        >
                            <Typography sx={{ fontWeight: 800, bgcolor: '#D9B80B' }} fontSize={10}>
                                MEGA
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            bgcolor: '#192333',
                            borderRadius: '10px',
                            pl: 1,
                            pr: 14,
                            display: 'flex',
                            alignItems: 'center',
                            height: '63px',
                            width: '165px'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Box
                                component="img"
                                alt="gold"
                                src={`${ASSETS_API}/jackpot/diamond.png`}
                                sx={{ width: '24px', height: '24px' }}
                            />
                            <Stack>
                                <Typography fontSize={13} fontWeight={800} whiteSpace="nowrap">
                                    {fcustomCurrency(jackpot.platinum)} TND
                                </Typography>
                                <Typography
                                    fontSize={11}
                                    fontWeight={900}
                                    color="#D5B50B"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    Jackpot Amount
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            p={1}
                            sx={{
                                position: 'absolute',
                                top: '-5px',
                                right: 10,
                                bgcolor: '#D9B80B',
                                height: '17px',
                                width: '77px'
                            }}
                        >
                            <Typography sx={{ fontWeight: 800, bgcolor: '#D9B80B' }} fontSize={10}>
                                GRAND
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            )}
        </>
    );
};

export default CasinoCategories;
