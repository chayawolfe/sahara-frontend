// @mui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// casino game provider get game list
import { useGameContext } from '../casino/context';

const LiveCasinoCategories = () => {
    const { searchGame } = useGameContext();

    return (
        <Card component={Stack} direction={{ xs: 'column', lg: 'row' }} gap={2} sx={{ p: 3, mt: 5 }}>
            <TextField
                label="Search Games"
                size="small"
                onChange={(e) => {
                    searchGame(e.target.value);
                }}
            />
            <Stack direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={1} flexGrow={1}>
                <Button variant="contained" color="inherit" fullWidth>
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
            </Stack>
        </Card>
    );
};

export default LiveCasinoCategories;
