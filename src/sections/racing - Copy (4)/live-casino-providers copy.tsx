// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

const providers = [
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    },
    {
        id: 'evolution',
        logo: `${ASSETS_API}/casino/providers/evolution.png`,
        name: 'Evolution'
    },
    {
        id: 'luckyStreak',
        logo: `${ASSETS_API}/casino/providers/luckyStreak.svg`,
        name: 'LuckyStreak'
    },
    {
        id: 'betgames',
        logo: `${ASSETS_API}/casino/providers/betgames.svg`,
        name: 'Betgames'
    },
    {
        id: '7Mojos',
        logo: `${ASSETS_API}/casino/providers/7Mojos.svg`,
        name: '7Mojos'
    },
    {
        id: 'egt',
        logo: `${ASSETS_API}/casino/providers/egt.svg`,
        name: 'EGT'
    },
    {
        id: 'xprogaming',
        logo: `${ASSETS_API}/casino/providers/xprogaming.svg`,
        name: 'XProGaming'
    },
    {
        id: 'sagaming',
        logo: `${ASSETS_API}/casino/providers/sagaming.svg`,
        name: 'Sa gaming'
    },
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    },
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    },
    {
        id: 'evolution',
        logo: `${ASSETS_API}/casino/providers/evolution.png`,
        name: 'Evolution'
    },
    {
        id: 'luckyStreak',
        logo: `${ASSETS_API}/casino/providers/luckyStreak.svg`,
        name: 'LuckyStreak'
    },
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    },
    {
        id: 'sagaming',
        logo: `${ASSETS_API}/casino/providers/sagaming.svg`,
        name: 'Sa gaming'
    },
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    },
    {
        id: 'evolution',
        logo: `${ASSETS_API}/casino/providers/evolution.png`,
        name: 'Evolution'
    },
    {
        id: 'luckyStreak',
        logo: `${ASSETS_API}/casino/providers/luckyStreak.svg`,
        name: 'LuckyStreak'
    },
    {
        id: 'betgames',
        logo: `${ASSETS_API}/casino/providers/betgames.svg`,
        name: 'Betgames'
    },
    {
        id: '7Mojos',
        logo: `${ASSETS_API}/casino/providers/7Mojos.svg`,
        name: '7Mojos'
    },
    {
        id: 'egt',
        logo: `${ASSETS_API}/casino/providers/egt.svg`,
        name: 'EGT'
    },
    {
        id: 'xprogaming',
        logo: `${ASSETS_API}/casino/providers/xprogaming.svg`,
        name: 'XProGaming'
    },
    {
        id: 'sagaming',
        logo: `${ASSETS_API}/casino/providers/sagaming.svg`,
        name: 'Sa gaming'
    },
    {
        id: 'pragmatic-play',
        logo: `${ASSETS_API}/casino/providers/pragmatic-play.svg`,
        name: 'Pragmatic Play'
    }
];

const LiveCasinoProviders = () => {
    const isOpenCollapse = useBoolean(false);

    return (
        <Card sx={{ mt: 5 }}>
            <CardHeader
                title="Providers"
                titleTypographyProps={{
                    color: 'textSecondary'
                }}
            />
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    p: 3,
                    pb: 1.5,
                    flexWrap: 'wrap'
                }}
            >
                {providers.slice(0, isOpenCollapse.value ? providers.length : 9).map((provider, index: number) => (
                    <ProviderItem key={index} item={provider} />
                ))}
            </Stack>
            <Box
                component={Button}
                onClick={isOpenCollapse.onToggle}
                sx={{
                    bgcolor: 'background.default',
                    py: 1,
                    m: 3,
                    mt: 0,
                    width: (theme) => `calc(100% - ${theme.spacing(6)})`,
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: (theme) =>
                        theme.transitions.create('background-color', {
                            duration: 150
                        }),
                    '&:hover': {
                        cursor: 'pointer',
                        bgcolor: 'background.neutral'
                    }
                }}
            >
                <Iconify
                    icon={
                        isOpenCollapse.value ? 'solar:alt-arrow-up-line-duotone' : 'solar:alt-arrow-down-line-duotone'
                    }
                    sx={{
                        color: 'text.secondary'
                    }}
                />
            </Box>
        </Card>
    );
};

export default LiveCasinoProviders;

// ----------------------------------------------------------------------

const ProviderItem = ({ item }: { item: any }) => (
    <Tooltip arrow title={item.name}>
        <Box
            sx={{
                width: (theme) => (theme.breakpoints.down('lg') ? 'calc(10% - 4px)' : 152),
                bgcolor: 'background.default',
                borderRadius: 1,
                height: (theme) => (theme.breakpoints.down('lg') ? 48 : 64),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                src={item.logo}
                alt={item.name}
                sx={{
                    '& img': {
                        maxHeight: (theme) => (theme.breakpoints.down('lg') ? 28 : 40)
                    }
                }}
            />
        </Box>
    </Tooltip>
);
