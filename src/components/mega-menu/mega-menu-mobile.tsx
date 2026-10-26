import { useState, useEffect, forwardRef, useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
// routes
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
//
import Logo from '../logo';
import Iconify from '../iconify';
import Scrollbar from '../scrollbar';
//
import { ParentItemProps, MegaMenuItemProps } from './types';

// ----------------------------------------------------------------------

type Props = {
    data: MegaMenuItemProps[];
    open: boolean;
    onOpen: VoidFunction;
    onClose: VoidFunction;
    action?: React.ReactNode;
};

export default function MegaMenuMobile({ data, open, action, onOpen, onClose }: Props) {
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            {action || (
                <Button variant="contained" onClick={onOpen} startIcon={<Iconify icon="carbon:menu" />}>
                    Menu
                </Button>
            )}

            <Drawer
                open={open}
                onClose={onClose}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        pb: 5,
                        width: 260
                    }
                }}
            >
                <Scrollbar>
                    <Logo sx={{ mx: 2.5, my: 3 }} />

                    {data.map((parent) => (
                        <SubMenu key={parent.title} parent={parent} pathname={pathname} />
                    ))}
                </Scrollbar>
            </Drawer>
        </>
    );
}

// ----------------------------------------------------------------------

const ParentItem = forwardRef<HTMLDivElement, ParentItemProps>(({ icon, title, hasSub, ...other }, ref) => (
    <ListItemButton
        ref={ref}
        sx={{
            height: 44,
            textTransform: 'capitalize'
        }}
        {...other}
    >
        <ListItemIcon
            sx={{
                width: 24,
                height: 24
            }}
        >
            {icon}
        </ListItemIcon>

        <ListItemText primaryTypographyProps={{ typography: 'body2' }}>{title}</ListItemText>

        {hasSub && <Iconify icon="eva:arrow-ios-forward-fill" width={16} />}
    </ListItemButton>
));

// ----------------------------------------------------------------------

type SubMenuProps = {
    parent: MegaMenuItemProps;
    pathname: string;
};

function SubMenu({ parent, pathname }: SubMenuProps) {
    const { title, icon, path, children } = parent;

    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        if (openDrawer) {
            handleCloseDrawer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleOpenDrawer = useCallback(() => {
        setOpenDrawer(true);
    }, []);

    const handleCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    if (children) {
        return (
            <>
                <ParentItem title={title} icon={icon} onClick={handleOpenDrawer} hasSub />

                <Drawer
                    open={openDrawer}
                    onClose={handleCloseDrawer}
                    slotProps={{
                        backdrop: { invisible: true }
                    }}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{
                        sx: {
                            width: 260 - 12,
                            borderRight: (theme) => `solid 1px ${theme.palette.divider}`
                        }
                    }}
                >
                    <Stack direction="row" alignItems="center" px={1} py={1.5}>
                        <IconButton onClick={handleCloseDrawer}>
                            <Iconify icon="eva:arrow-ios-back-fill" width={16} />
                        </IconButton>

                        <Typography noWrap variant="subtitle1" sx={{ ml: 1, textTransform: 'capitalize' }}>
                            {title}
                        </Typography>
                    </Stack>
                    <Divider />

                    <Scrollbar>
                        <Stack spacing={5} py={3}>
                            {children.map((list) => {
                                const { subheader, items } = list;

                                return (
                                    <List key={subheader} disablePadding>
                                        <Typography
                                            component="div"
                                            variant="overline"
                                            sx={{ px: 2.5, mb: 1, color: 'text.secondary' }}
                                            noWrap
                                        >
                                            {subheader}
                                        </Typography>

                                        {items.map((link) => (
                                            <Link
                                                key={link.title}
                                                component={RouterLink}
                                                href={link.path}
                                                color="inherit"
                                                underline="none"
                                            >
                                                <ListItemButton sx={{ px: 1.5 }}>
                                                    <ListItemIcon
                                                        sx={{
                                                            mr: 0.5,
                                                            width: 24,
                                                            height: 24,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 4,
                                                                height: 4,
                                                                borderRadius: '50%',
                                                                bgcolor: 'currentColor'
                                                            }}
                                                        />
                                                    </ListItemIcon>

                                                    <ListItemText
                                                        primary={link.title}
                                                        primaryTypographyProps={{
                                                            noWrap: true,
                                                            typography: 'body2'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </Link>
                                        ))}
                                    </List>
                                );
                            })}
                        </Stack>
                    </Scrollbar>
                </Drawer>
            </>
        );
    }

    return (
        <Link component={RouterLink} href={path} color="inherit" underline="none">
            <ParentItem title={title} icon={icon} />
        </Link>
    );
}
