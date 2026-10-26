import { Helmet } from 'react-helmet-async';
// sections
import { LiveCasinoView } from 'src/sections/live-casino/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Live Casino: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <LiveCasinoView />
        </>
    );
}
