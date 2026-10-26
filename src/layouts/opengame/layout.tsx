// @mui
import Box from '@mui/material/Box';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { useSettingsContext } from 'src/components/settings';
//

import Main from './main';
import Header from '../main/header';
import NavMini from '../main/nav-mini';
import NavVertical from '../main/nav-vertical';
import NavHorizontal from './nav-horizontal';
import Footer from './open-footer';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    const settings = useSettingsContext();

    const lgUp = useResponsive('up', 'lg');

    const nav = useBoolean();

    const isHorizontal = settings.themeLayout === 'horizontal';

    const isMini = settings.themeLayout === 'mini';

    const renderNavMini = <NavMini />;

    const renderHorizontal = <NavHorizontal />;

    const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

    if (isHorizontal) {
        return (
            <>
                {!lgUp && <Header onOpenNav={nav.onTrue} />}

                {lgUp ? renderHorizontal : renderNavVertical}

                <Main>{children}</Main>

                <Footer />
            </>
        );
    }

    if (isMini) {
        return (
            <>
                {!lgUp && <Header onOpenNav={nav.onTrue} />}

                <Box
                    sx={{
                        minHeight: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' }
                    }}
                >
                    {lgUp ? renderNavMini : renderNavVertical}

                    <Main>{children}</Main>
                </Box>
            </>
        );
    }

    return (
        <>
            {!lgUp && <Header onOpenNav={nav.onTrue} />}

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' }
                }}
            >
                {renderNavVertical}

                <Main>{children}</Main>
            </Box>
        </>
    );
}
