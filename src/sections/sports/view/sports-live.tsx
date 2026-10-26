import { Stack } from '@mui/material';
import { useEffect } from 'react';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// auth
import { useAuthContext } from 'src/auth/hooks';
// ----------------------------------------------------------------------

export default function SportsLive({ active }: { active: string }) {
    const { user } = useAuthContext();

    const lgUp = useResponsive('up', 'lg');

    function generateToken(): string {
        const characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token: string = user?.id;

        // Generate 10 random English characters
        for (let i = 0; i < 4; i += 1) {
            const randomChar: string = characters[Math.floor(Math.random() * characters.length)];
            token += randomChar;
        }

        return token;
    }

    const token = generateToken();

    useEffect(() => {
        if (active === 'sports-live') {
            const root = window.document.getElementById('root');

            if (root) {
                root.style.overflowY = 'hidden';
            }
        }
    }, [active]);

    return (
        <Stack
            sx={{
                position: active === 'sports-live' ? 'absolute' : 'none',
                top: `${lgUp ? '80px' : '49px'}`,
                width: '100vw',
                height: `${lgUp ? 'calc(100vh - 80px)' : 'calc(100vh - 150px)'}`,
                display: active === 'sports-live' ? 'flex' : 'none'
            }}
        >
            {user ? (
                <iframe
                    id="sportsgamelive"
                    style={{ width: '100%', height: '100%', border: 0 }}
                    src={`https://stage.sportbook.work/live?locale=fr&cid=Betgold216-stage&token=${token}`}
                    title="game play"
                />
            ) : (
                <iframe
                    id="sportsgamelive"
                    style={{ width: '100%', height: '100%', border: 0 }}
                    src="https://stage.sportbook.work/live?locale=fr&cid=Betgold216-stage"
                    title="game play"
                />
            )}
        </Stack>
    );
}
