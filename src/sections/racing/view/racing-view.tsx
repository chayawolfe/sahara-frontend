// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import RacingCarousel from '../racing-carousel';
import RacingProviders from '../racing-providers';
import RacingGameList from '../racing-displaygame';
// ----------------------------------------------------------------------

export default function CasinoView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');

    return (
        <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
            <RacingCarousel />

            <Box mt={2} sx={{ display: { md: 'grid' }, gridTemplateColumns: { md: '14% auto' }, gap: 3 }} mb={5}>
                {mdUp && <RacingProviders />}
                <Stack spacing={3}>
                    <RacingGameList />
                </Stack>
            </Box>
        </Container>
    );
}
