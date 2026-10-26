// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import CasinoCarousel from '../vip-casino-carousel';
import CasinoProviders from '../vip-casino-providers';
import CasinoGameList from '../vip-casino-displaygame';
import Jackpot from '../jackpot';

// ----------------------------------------------------------------------

export default function VipCasinoView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');

    return (
        <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
            <CasinoCarousel />
            <Box
                mt={2}
                sx={{ display: { md: 'grid' }, alignItems: 'start', gridTemplateColumns: { md: '14% auto' }, gap: 3 }}
                mb={5}
            >
                {mdUp ? (
                    <>
                        <CasinoProviders />
                        <Stack spacing={3}>
                            <Jackpot />
                            <CasinoGameList />
                        </Stack>
                    </>
                ) : (
                    <Stack spacing={3}>
                        <Jackpot />
                        <CasinoProviders />
                        <CasinoGameList />
                    </Stack>
                )}
            </Box>
        </Container>
    );
}
