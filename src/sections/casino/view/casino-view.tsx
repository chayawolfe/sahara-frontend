// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import CasinoCarousel from '../casino-carousel';
import CasinoProviders from '../casino-providers';
import CasinoGameList from '../casino-gamelist';
import CasinoProviderGameList from '../casino-provider-gamelist';
import Jackpot from '../jackpot';
// ----------------------------------------------------------------------
// casino game provider game list
import { useGameContext } from '../context';

export default function CasinoView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');
    const { providerName } = useGameContext();

    return (
        <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
            <CasinoCarousel />
            <Box
                mt={2}
                sx={{
                    display: { md: 'grid' },
                    gridTemplateColumns: { md: '14% auto' },
                    alignItems: 'start',
                    gap: 3
                }}
                mb={5}
            >
                {mdUp ? (
                    <>
                        <CasinoProviders />
                        <Stack spacing={3}>
                            <Jackpot />
                            {providerName === 'default' ? <CasinoGameList /> : <CasinoProviderGameList />}
                        </Stack>
                    </>
                ) : (
                    <Stack spacing={3}>
                        <Jackpot />
                        <CasinoProviders />
                        {providerName === 'default' ? <CasinoGameList /> : <CasinoProviderGameList />}
                    </Stack>
                )}
            </Box>
        </Container>
    );
}
