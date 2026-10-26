import { Stack } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// apis
import { sportsOpen } from 'src/api/game';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function ESports({ active }: { active: string }) {
    const lgUp = useResponsive('up', 'lg');
    const { user } = useAuthContext();
    const [openUrl, setOpenURL] = useState(
        'https://Betgold216-wde40vow.turbostars.gg/efootball?locale=fr&cid=Betgold216'
    );

    useEffect(() => {
        if (active === 'esports') {
            const root = window.document.getElementById('root');

            if (root) {
                root.style.overflowY = 'hidden';
            }
        }
    }, [active]);

    const init = useCallback(async () => {
        try {
            if (user?.balance) {
                const res = await sportsOpen(active);
                setOpenURL(res);
            }
        } catch (error) {
            console.log('error');
        }
    }, [user?.balance, active]);

    useEffect(() => {
        if (!user) {
            setOpenURL('https://Betgold216-wde40vow.turbostars.gg/efootball?locale=fr&cid=Betgold216');
        }
    }, [user]);

    useEffect(() => {
        init();
    }, [init]);

    return (
        <Stack
            sx={{
                position: active === 'esports' ? 'absolute' : 'none',
                top: `${lgUp ? '80px' : '49px'}`,
                width: '100vw',
                height: `${lgUp ? 'calc(100vh - 80px)' : 'calc(100vh - 150px)'}`,
                display: active === 'esports' ? 'flex' : 'none'
            }}
        >
            <iframe
                id="sportsgame"
                style={{ width: '100%', height: '100%', border: 0 }}
                src={openUrl}
                title="game play"
            />
        </Stack>
    );
}
