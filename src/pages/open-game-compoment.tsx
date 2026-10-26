import { Helmet } from 'react-helmet-async';
// sections
import OpenGame from 'src/sections/opengame/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Open Game: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <OpenGame />
        </>
    );
}
