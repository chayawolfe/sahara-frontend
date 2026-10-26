import { useCallback, useEffect } from 'react';
// routes
import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';
//
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get('returnTo') || paths.home;

    const { authenticated } = useAuthContext();

    const check = useCallback(() => {
        if (authenticated) {
            router.replace(returnTo);
        }
    }, [authenticated, returnTo, router]);

    useEffect(() => {
        check();
    }, [check]);

    return <>{children}</>;
}
