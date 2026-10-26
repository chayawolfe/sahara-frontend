// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import Carousel from '../carousel';
import Providers from '../providers';
import GameList from '../displaygame';
// ----------------------------------------------------------------------

export default function LotteryView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');

    return (
        <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
            <Carousel />
            <Box mt={2} sx={{ display: { md: 'grid' }, gridTemplateColumns: { md: '14% auto' }, gap: 3 }} mb={5}>
                {mdUp && <Providers />}
                <Stack spacing={3}>
                    <GameList />
                </Stack>
            </Box>
        </Container>
    );
}
