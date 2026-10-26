import { Helmet } from 'react-helmet-async';
// sections
import { UserProfileView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <UserProfileView />
        </>
    );
}
