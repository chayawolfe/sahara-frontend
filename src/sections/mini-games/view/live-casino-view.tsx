// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import CasinoCarousel from '../live-casino-carousel';
import CasinoProviders from '../live-casino-providers';
import CasinoCategories from '../live-casino-categories';
import CasinoGameList from '../live-casino-displaygame';

// ----------------------------------------------------------------------

export default function LiveCasinoView() {
    const settings = useSettingsContext();

    return (
        <>
            <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <CasinoProviders />
                <CasinoCategories />
                <CasinoGameList />
            </Container>
        </>
    );
}
