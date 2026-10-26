import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import TournamentCarousel from '../tournament-carousel';
import Tournaments from '../tournaments';

export default function TournamentsView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');

    return (
        <>
            {mdUp ? (
                <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
                    <TournamentCarousel />
                    <Tournaments />
                </Container>
            ) : (
                <>
                    <TournamentCarousel />
                    <Container maxWidth={settings.themeStretch && false} sx={{ px: { md: '130px !important' } }}>
                        <Tournaments />
                    </Container>
                </>
            )}
        </>
    );
}
