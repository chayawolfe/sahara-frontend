// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

import HomeCarousel from '../home-carousel';
import HomeNav from '../home-nav';
import CardGallery from '../card-gallery';
import CasnioGame from '../casino-game';
import CardGame from '../card-game';
import LiveGame from '../live-game';

// ----------------------------------------------------------------------

export default function HomeView() {
    const settings = useSettingsContext();
    const mdUp = useResponsive('up', 'md');

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ mt: 2 }}>
            <HomeCarousel />
            <HomeNav />
            {mdUp && <CardGallery />}
            <CasnioGame />
            {mdUp && <CardGame />}
            <LiveGame />
        </Container>
    );
}
