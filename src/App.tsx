// i18n
import 'src/locales/i18n';

// scrollbar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// map
import 'mapbox-gl/dist/mapbox-gl.css';

// editor
import 'react-quill/dist/quill.snow.css';

// carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------
// routes
import Router from 'src/routes/sections';
// theme
import ThemeProvider from 'src/theme';
// locales
import { LocalizationProvider } from 'src/locales';
// hooks
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
// components
import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
import SportsBook from 'src/sections/sports/view';
// auth
import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';
import { GameProvider } from './sections/casino/context';
import { SportsProvider } from './sections/casino/sportsbook';

// ----------------------------------------------------------------------

export default function App() {
    console.clear();

    useScrollToTop();

    return (
        <LocalizationProvider>
            <SettingsProvider
                defaultSettings={{
                    themeMode: 'dark', // 'light' | 'dark'
                    themeDirection: 'ltr', //  'rtl' | 'ltr'
                    themeContrast: 'default', // 'default' | 'bold'
                    themeLayout: 'horizontal', // 'vertical' | 'horizontal' | 'mini'
                    themeColorPresets: 'cyan', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                    themeStretch: false
                }}
            >
                <ThemeProvider>
                    <MotionLazy>
                        <SnackbarProvider>
                            <AuthProvider>
                                <SettingsDrawer />
                                <ProgressBar />
                                <AuthConsumer>
                                    <GameProvider>
                                        <SportsProvider>
                                            <Router />
                                            <SportsBook />
                                        </SportsProvider>
                                    </GameProvider>
                                </AuthConsumer>
                            </AuthProvider>
                        </SnackbarProvider>
                    </MotionLazy>
                </ThemeProvider>
            </SettingsProvider>
        </LocalizationProvider>
    );
}
