import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// config
import { ASSETS_API } from 'src/config-global';

// casino game provider get game list
import { useNavigate } from 'react-router';
import { useGameContext } from './context';

const buttons = [
    `${ASSETS_API}/button/1.png`,
    `${ASSETS_API}/button/2.png`,
    `${ASSETS_API}/button/3.png`,
    `${ASSETS_API}/button/4.png`,
    `${ASSETS_API}/button/5.png`
];

const CasinoCategories = () => {
    const { providerGame, searchGame } = useGameContext();
    const navigate = useNavigate();

    const onchangeprovider = (data: any) => {
        providerGame(data);
        navigate(`/casino/${data}`);
    };

    useEffect(() => {
        searchGame('');
    }, [searchGame]);

    return (
        <Card
            component={Stack}
            direction={{ xs: 'column', lg: 'row' }}
            gap={2}
            sx={{ p: 2, mt: 2 }}
            alignItems="center"
        >
            <TextField
                label="Search Games"
                size="small"
                onChange={(e) => {
                    searchGame(e.target.value);
                }}
                sx={{ width: { xs: '100%', lg: 200 } }}
            />
            {/* <Stack direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={1} flexGrow={1}>
                <Button
                    variant="contained"
                    color="inherit"
                    fullWidth
                    onClick={() => {
                        onchangeprovider('All');
                    }}
                >
                    All Games
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    My Favourite
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Popular Slots
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Exclusive Games
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Drops & Wins
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Bonus Buy
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Megaways
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Jackpot Games
                </Button>
            </Stack> */}
            {/* <Box component="img" src={buttons[0]} sx={{ maxWidth: 200 }} /> */}
            <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, lg: 4 }}
                flexGrow={1}
                justifyContent={{ lg: 'space-evenly', xs: 'flex-start' }}
                sx={{ cursor: 'pointer', width: '100%', overflow: 'auto' }}
            >
                <Box
                    component="img"
                    sx={{ maxWidth: { xs: 120, lg: 200 } }}
                    src={buttons[1]}
                    onClick={() => {
                        onchangeprovider('All');
                    }}
                />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[2]} />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[3]} />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[4]} />
            </Stack>
        </Card>
    );
};

export default CasinoCategories;
