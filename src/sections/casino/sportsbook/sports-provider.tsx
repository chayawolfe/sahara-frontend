import { useMemo, useCallback, useState } from 'react';
// apis
import { SportsContext } from './sports-context';

export function SportsProvider({ children }: any) {
    const [active, setSports] = useState('default');
    const [activeLogin, setLoginStatus] = useState('defaults');

    const setActive = useCallback((item: string) => {
        setSports(item);
    }, []);

    const setLogin = useCallback((item: string) => {
        setLoginStatus(item);
    }, []);

    const memoizedValue = useMemo(
        () => ({
            active,
            activeLogin,
            setLogin,
            setActive
        }),
        [active, activeLogin, setActive, setLogin]
    );

    return <SportsContext.Provider value={memoizedValue}>{children}</SportsContext.Provider>;
}
