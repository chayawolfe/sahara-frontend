import { Helmet } from 'react-helmet-async';
// sections
import { RacingPlay } from 'src/sections/gameplay/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Game Play: Betgold216 Sports betting and online casino </title>
            </Helmet>

            <RacingPlay />
        </>
    );
}
