// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// components
import { useSettingsContext } from 'src/components/settings';
// casino game provider game list
import { useGameContext } from '../../casino/context';

import CasinoCarousel from '../live-casino-carousel';
import CasinoProviders from '../live-casino-providers';
// import CasinoCategories from '../live-casino-categories';
import CasinoGameList from '../live-casino-displaygame';

// provider each games
import Evolution from '../provider-each/evolution';
import ProagmaticLive from '../provider-each/pragmatic';
import Portomaso from '../provider-each/portomaso';
import TVbet from '../provider-each/tvbet';
import VivoGame from '../provider-each/vivo';
import N2Game from '../provider-each/n2game';
// ----------------------------------------------------------------------

export default function LiveCasinoView() {
    const settings = useSettingsContext();
    const { providerName } = useGameContext();
    return (
        <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
            <CasinoCarousel />
            <Grid container spacing={2} mt={2} mb={5}>
                <Grid md={1.8} xs={12}>
                    <CasinoProviders />
                </Grid>
                <Grid md={10.2} xs={12}>
                    {providerName === 'All' ? (
                        <Stack>
                            <Evolution />
                            <ProagmaticLive />
                            <Portomaso />
                            <TVbet />
                            <VivoGame />
                            {/* <N2Game /> */}
                        </Stack>
                    ) : (
                        <CasinoGameList />
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}
