import { memo } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// components

import { useGameContext } from '../../sections/casino/context';

// ----------------------------------------------------------------------

function NavHorizontal() {
    const { gameInformation } = useGameContext();

    return (
        <Stack direction="row" spacing={3}>
            <Stack>
                <Typography variant="body2" color="#A5AFC1" sx={{ fontWeight: 700 }}>
                    {gameInformation.gameName}
                </Typography>
                <Typography variant="caption" color="#A5AFC1">
                    {gameInformation.providerName}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default memo(NavHorizontal);
