import { Helmet } from 'react-helmet-async';
// sections
import { RacingCasino } from 'src/sections/racing/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Racing Games: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <RacingCasino />
        </>
    );
}
