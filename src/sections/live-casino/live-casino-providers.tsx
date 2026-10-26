import * as React from 'react';
import { useState, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Autocomplete from '@mui/material/Autocomplete';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
// apis
import { get_provider } from 'src/api/game';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// casino game provider game list
import { useGameContext } from '../casino/context';

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
    const mdUp = useResponsive('up', 'md');

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selecteProviderdIndex, setSelecteProviderdIndex] = useState(1);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    const handleProviderListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelecteProviderdIndex(index);
    };

    const { searchGame } = useGameContext();
    const [providers, setProvider] = useState([]);

    const init = async () => {
        const res = await get_provider({ name: 'livecasino' });
        const result_a = res.data.sort((a: any, b: any) => a.title.localeCompare(b.title));

        const resultarray = result_a.map((item: { title: string; gameCount: number }) => ({
            id: item.title.replace('_', '-'),
            oldname: item.title,
            logo: `${ASSETS_API}/casino/providers/${item.title.toLowerCase()}.png`,
            name: item.title.charAt(0).toUpperCase() + item.title.slice(1),
            count: item.gameCount
        }));

        setProvider(resultarray);
    };

    useEffect(() => {
        init();
    }, []);

    if (!mdUp) {
        return (
            <Stack direction="row" alignItems="center" gap={1}>
                <Autocomplete
                    sx={{
                        bgcolor: '#192333',
                        '& fieldset': { border: 0 },
                        '& fieldset:focus-visible': {
                            outline: 'unset'
                        },
                        '& :focus-visible': {
                            outline: 'unset'
                        },
                        borderRadius: '5px',
                        width: 400
                    }}
                    options={providers}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    isOptionEqualToValue={(option, value) => option.name === value}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img loading="lazy" width="20" srcSet={option.logo} src={option.logo} alt="" />
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Providers"
                            inputProps={{
                                ...params.inputProps
                            }}
                        />
                    )}
                />

                <TextField
                    size="small"
                    onChange={(e) => {
                        searchGame(e.target.value);
                    }}
                    sx={{
                        bgcolor: '#192333',
                        '& fieldset': {
                            display: 'none'
                        },
                        borderRadius: '5px',
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
            </Stack>
        );
    }

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

            <Box sx={{ bgcolor: '#192333', borderRadius: '5px' }}>
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

                    {providers.map((item: any, key) => (
                        <ListItemButton
                            key={key}
                            selected={selecteProviderdIndex === key}
                            onClick={(event) => {
                                handleProviderListItemClick(event, key);
                            }}
                        >
                            <ListItemIcon>
                                <Image src={item.logo} sx={{ '& img': { width: 25 } }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.name}
                                sx={{ color: '#A5AFC1', '& span': { fontWeight: 500, fontSize: '12px' } }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Stack>
    );
};

export default CasinoProviders;
