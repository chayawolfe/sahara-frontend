import * as React from 'react';
import { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// config
import { ASSETS_API } from 'src/config-global';

const categoryIcons = [
    { title: 'Favoris', url: `${ASSETS_API}/casino/icons/favoris.svg` },
    { title: 'Récent', url: `${ASSETS_API}/casino/icons/recent.svg` },
    { title: 'Tournois', url: `${ASSETS_API}/casino/icons/tournament.svg` },
    { title: 'Promotions', url: `${ASSETS_API}/casino/icons/promosion.svg` },
    { title: 'Jeux', url: `${ASSETS_API}/casino/icons/jeux.svg` },
    { title: 'Casino en direct', url: `${ASSETS_API}/casino/icons/livecasino.svg` },
    { title: 'Vip Casino', url: `${ASSETS_API}/casino/icons/vip.svg` }
];

const CasinoProviders = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Stack spacing={2}>
            <Box sx={{ bgcolor: '#192333', borderRadius: '5px' }}>
                <List component="nav" aria-label="main mailbox folders">
                    {categoryIcons.map((item, key) => (
                        <ListItemButton
                            key={key}
                            selected={selectedIndex === key}
                            onClick={(event) => handleListItemClick(event, key)}
                        >
                            <ListItemIcon>
                                <Box component="img" src={item.url} width={16} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{ color: '#A5AFC1', '& span': { fontWeight: 500, fontSize: '12px' } }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            {/* <Box sx={{ bgcolor: '#192333', borderRadius: '5px' }}>
                <List component="nav" aria-label="main mailbox folders" sx={{ padding: 1 }}>
                    <TextField
                        size="small"
                        onChange={(e) => {
                            searchGame(e.target.value);
                        }}
                        sx={{
                            bgcolor: '#0C1221',
                            '& fieldset': {
                                display: 'none'
                            },
                            borderRadius: '3px',
                            'input::placeholder': {
                                color: '#384359'
                            },
                            width: '100%'
                        }}
                        placeholder="Recherche"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Typography py={2} variant="caption" color="#A5AFC1" fontWeight={900}>
                        FOURNISSEURS
                    </Typography>
                    {providers.map((item: any, key) => (
                        <ListItemButton
                            key={key}
                            selected={selecteProviderdIndex === key}
                            onClick={(event) => {
                                onchangeprovider(item);
                                handleProviderListItemClick(event, key);
                            }}
                        >
                            <ListItemIcon>
                                <Image src={item.logo} sx={{ '& img': { width: 22 } }} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box> */}
        </Stack>
    );
};

export default CasinoProviders;
