import { Helmet } from 'react-helmet-async';
// sections
import { VipCasinoView } from 'src/sections/vip-casino/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Vip Casino: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <VipCasinoView />
        </>
    );
}
