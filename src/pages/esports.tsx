import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// sections
// import Sports from 'src/sections/sports/view';
import { SportsContext } from 'src/sections/casino/sportsbook/sports-context';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    const { setActive } = useContext(SportsContext);

    useEffect(() => {
        setActive('esports');
        return () => {
            setActive('ALL');
        };
    }, [setActive]);

    return (
        <>
            <Helmet>
                <title> Sports: Betgold216 Sports betting and online casino </title>
            </Helmet>

            {/* <Sports /> */}
        </>
    );
}
