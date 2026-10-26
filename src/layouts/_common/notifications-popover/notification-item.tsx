// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
// utils
import { fToNow } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type NotificationItemProps = {
    notification: {
        id: string;
        title: string;
        content: string;
        createdAt: Date;
        isUnRead: boolean;
        type: string;
        avatarUrl: string | null;
    };
};

export default function NotificationItem({ notification }: NotificationItemProps) {
    const renderText = (
        <ListItemText
            disableTypography
            primary={reader(notification.title)}
            secondary={
                <Stack
                    alignItems="center"
                    sx={{ typography: 'caption', color: 'text.disabled' }}
                    divider={
                        <Box
                            sx={{
                                width: 2,
                                height: 2,
                                bgcolor: 'currentColor',
                                mx: 0.5,
                                borderRadius: '50%'
                            }}
                        />
                    }
                >
                    <Typography component="span" dangerouslySetInnerHTML={{ __html: notification.content }} />
                    {fToNow(notification.createdAt)}
                </Stack>
            }
        />
    );

    const renderUnReadBadge = notification.isUnRead && (
        <Box
            sx={{
                top: 26,
                width: 8,
                height: 8,
                right: 20,
                borderRadius: '50%',
                bgcolor: 'info.main',
                position: 'absolute'
            }}
        />
    );

    return (
        <ListItemButton
            disableRipple
            sx={{
                p: 2.5,
                alignItems: 'flex-start',
                borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`
            }}
        >
            {renderUnReadBadge}

            <Stack sx={{ flexGrow: 1 }}>{renderText}</Stack>
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function reader(data: string) {
    return (
        <Box
            dangerouslySetInnerHTML={{ __html: data }}
            sx={{
                mb: 0.5,
                '& p': { typography: 'body2', m: 0 },
                '& a': { color: 'inherit', textDecoration: 'none' },
                '& strong': { typography: 'subtitle2' }
            }}
        />
    );
}
