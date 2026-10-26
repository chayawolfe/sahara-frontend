import { Helmet } from 'react-helmet-async';
// sections
import { JwtRegisterView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function RegisterPage() {
    return (
        <>
            <Helmet>
                <title> Jwt: Betgold216 Sports betting and online casino</title>
            </Helmet>

            <JwtRegisterView />
        </>
    );
}
