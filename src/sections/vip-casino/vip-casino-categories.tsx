import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// config
import { ASSETS_API } from 'src/config-global';

// casino game provider get game list
import { useGameContext } from '../casino/context';

const buttons = [
    `${ASSETS_API}/button/1.png`,
    `${ASSETS_API}/button/2.png`,
    `${ASSETS_API}/button/3.png`,
    `${ASSETS_API}/button/4.png`,
    `${ASSETS_API}/button/5.png`
];

const LiveCasinoCategories = () => {
    const { searchGame } = useGameContext();

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
            {/* <Box component="img" src={buttons[0]} sx={{ maxWidth: { xs: 120, lg: 200 } }} /> */}
            <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, lg: 4 }}
                flexGrow={1}
                justifyContent={{ lg: 'space-evenly', xs: 'flex-start' }}
                sx={{ cursor: 'pointer', width: '100%', overflow: 'auto' }}
            >
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[1]} />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[2]} />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[3]} />
                <Box component="img" sx={{ maxWidth: { xs: 120, lg: 200 } }} src={buttons[4]} />
            </Stack>
        </Card>
    );
};

export default LiveCasinoCategories;
