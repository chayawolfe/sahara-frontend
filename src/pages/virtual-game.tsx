import { Helmet } from 'react-helmet-async';
// sections
import { Virtualgame } from 'src/sections/virtual-game/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Virtual Game: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <Virtualgame />
        </>
    );
}
