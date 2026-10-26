// components
import { SplashScreen } from 'src/components/loading-screen';
//
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
    return <AuthContext.Consumer>{(auth) => (auth.loading ? <SplashScreen /> : children)}</AuthContext.Consumer>;
}
