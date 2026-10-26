import { useState, useCallback, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { useRouter } from 'src/routes/hooks';
// _mock
import { _notifications } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
// apis
import { getMessage, isReadMessage } from 'src/api/game';
//
import NotificationItem from './notification-item';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
    const drawer = useBoolean();

    const router = useRouter();

    const smUp = useResponsive('up', 'sm');

    const [notifications, setNotifications] = useState(_notifications);

    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

    const handleMarkAllAsRead = async () => {
        await isReadMessage();
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false
            }))
        );
    };

    const init = useCallback(async () => {
        try {
            const result = await getMessage();
            setNotifications(result.slice(0, 5));
        } catch (error) {
            console.log('notification');
        }
    }, []);

    useEffect(() => {
        init();
    }, [init]);

    const renderHead = (
        <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68, bgcolor: '#0C1221' }}>
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    width: '20px',
                    height: '68px',
                    bgcolor: '#D9B80B',
                    marginRight: 2
                }}
            />
            <Typography variant="h6" sx={{ flexGrow: 1 }} ml={1.5}>
                Notifications
            </Typography>

            {!!totalUnRead && (
                <Tooltip title="Mark all as read">
                    <IconButton color="primary" onClick={handleMarkAllAsRead}>
                        <Iconify icon="eva:done-all-fill" />
                    </IconButton>
                </Tooltip>
            )}

            {!smUp && (
                <IconButton onClick={drawer.onFalse}>
                    <Iconify icon="mingcute:close-line" />
                </IconButton>
            )}
        </Stack>
    );

    const renderList = (
        <Scrollbar>
            <List disablePadding>
                {notifications.map((notification: any) => (
                    <NotificationItem key={notification._id} notification={notification} />
                ))}
            </List>
        </Scrollbar>
    );

    return (
        <>
            <IconButton
                size="small"
                onClick={drawer.onTrue}
                sx={{
                    p: 0.8,
                    bgcolor: '#0C1221',
                    borderRadius: 0.75,
                    display: 'flex',
                    gap: 1
                }}
            >
                <Image
                    src="/assets/icons/navbar/alrem.svg"
                    sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: (theme) =>
                            theme.transitions.create('color', {
                                duration: 250
                            }),
                        '&:hover': {
                            color: 'text.primary'
                        }
                    }}
                />
            </IconButton>

            <Drawer
                open={drawer.value}
                onClose={drawer.onFalse}
                anchor="right"
                slotProps={{
                    backdrop: { invisible: true }
                }}
                PaperProps={{
                    sx: {
                        width: 1,
                        maxWidth: 330,
                        height: 'calc(100vh - 80px)',
                        top: 80,
                        '& .css-jjtu05': { background: '#192333' }
                    }
                }}
            >
                {renderHead}

                <Divider />

                {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pl: 2.5, pr: 1 }}> */}
                {/* {renderTabs} */}
                {/* <IconButton onClick={handleMarkAllAsRead}>
                        <Iconify icon="solar:settings-bold-duotone" />
                    </IconButton> */}
                {/* </Stack> */}

                <Divider />

                {renderList}

                <Box sx={{ p: 1, bgcolor: '#D9B80B' }}>
                    <Button
                        fullWidth
                        size="large"
                        onClick={() => {
                            router.push(paths.user.notification);
                        }}
                        sx={{ color: '#192333', fontWeight: 900, fontSize: 16 }}
                    >
                        Voir tout
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
