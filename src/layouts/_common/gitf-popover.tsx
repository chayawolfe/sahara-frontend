import { m } from 'framer-motion';
// @mui
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { useResponsive } from 'src/hooks/use-responsive';

// auth
import { useAuthContext } from 'src/auth/hooks';

// untils
import { fcustomCurrency } from 'src/utils/format-number';
// ----------------------------------------------------------------------

export default function GiftPopover() {
    const isMobile = useResponsive('down', 'md');

    const popover = usePopover();
    const { user } = useAuthContext();

    const promotions = [
        {
            id: 0,
            name: 'FreeSpins',
            value: fcustomCurrency(user?.spinbonus)
        },
        // {
        //     id: 1,
        //     name: 'FreeBets',
        //     value: 0
        // },
        // {
        //     id: 2,
        //     name: 'MiniGames',
        //     value: 0
        // },
        {
            id: 1,
            name: 'Bonus',
            value: fcustomCurrency(user?.bonusbalnace)
        }
        // {
        //     id: 4,
        //     name: 'Sports Bonus',
        //     value: 0
        // }
    ];

    const mobilepromotions = [
        {
            id: 0,
            name: 'Balance',
            value: fcustomCurrency(user?.balance)
        },
        {
            id: 1,
            name: 'FreeSpins',
            value: fcustomCurrency(user?.spinbonus)
        },
        {
            id: 2,
            name: 'Bonus',
            value: fcustomCurrency(user?.bonusbalnace)
        }
    ];

    return (
        <>
            <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.05)}
                color={popover.open ? 'inherit' : 'default'}
                onClick={popover.onOpen}
                sx={{
                    ...(popover.open && {
                        bgcolor: (theme) => theme.palette.action.selected
                    })
                }}
            >
                <Iconify icon="ion:gift" width={24} />
            </IconButton>

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200 }}>
                <Scrollbar>
                    {isMobile ? (
                        <>
                            {mobilepromotions.map((promotion) => (
                                <MenuItem key={promotion.id} sx={{ p: 1 }}>
                                    <ListItemText
                                        primary={promotion.name}
                                        primaryTypographyProps={{ typography: 'subtitle2' }}
                                        secondaryTypographyProps={{
                                            typography: 'caption',
                                            color: 'text.disabled'
                                        }}
                                    />
                                    {promotion.value}
                                </MenuItem>
                            ))}
                        </>
                    ) : (
                        <>
                            {promotions.map((promotion) => (
                                <MenuItem key={promotion.id} sx={{ p: 1 }}>
                                    <ListItemText
                                        primary={promotion.name}
                                        primaryTypographyProps={{ typography: 'subtitle2' }}
                                        secondaryTypographyProps={{
                                            typography: 'caption',
                                            color: 'text.disabled'
                                        }}
                                    />
                                    {promotion.value}
                                </MenuItem>
                            ))}
                        </>
                    )}
                </Scrollbar>
            </CustomPopover>
        </>
    );
}
