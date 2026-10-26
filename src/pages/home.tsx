import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title> Home: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <HomeView />
        </>
    );
}
