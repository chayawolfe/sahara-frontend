import { useState, useCallback } from 'react';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha, Theme } from '@mui/material/styles';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from 'src/routes/components';
//
import Iconify from '../iconify';
//
import MenuHotProducts from './_common/menu-hot-products';
import MenuCarousel from './_common/menu-carousel';
import { ParentItemProps, MegaMenuItemProps } from './types';

// ----------------------------------------------------------------------

const MENU_PAPER_WIDTH = 800;
const PARENT_ITEM_HEIGHT = 40;

type Props = {
    data: MegaMenuItemProps[];
};

export default function MegaMenuDesktopVertical({ data, ...other }: Props) {
    return (
        <List disablePadding {...other}>
            {data.map((parent) => (
                <MegaMenuItem key={parent.title} parent={parent} />
            ))}
        </List>
    );
}

// ----------------------------------------------------------------------

function MegaMenuItem({ parent }: { parent: MegaMenuItemProps }) {
    const { title, path, more, products, tags, children } = parent;

    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    if (children) {
        return (
            <>
                <ParentItem
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                    path={path}
                    title={title}
                    open={open}
                    hasSub
                />

                {open && (
                    <Paper
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                        sx={{
                            p: 3,
                            top: -62,
                            borderRadius: 2,
                            position: 'absolute',
                            left: 260,
                            width: MENU_PAPER_WIDTH,
                            boxShadow: (theme) => theme.customShadows.z20
                        }}
                    >
                        <Masonry columns={3} spacing={2}>
                            {children.map((list) => (
                                <Stack key={list.subheader} spacing={1.25} sx={{ mb: 2.5 }}>
                                    <Typography variant="subtitle1" noWrap>
                                        {list.subheader}
                                    </Typography>

                                    {list.items.map((link) => (
                                        <Link
                                            key={link.title}
                                            component={RouterLink}
                                            href={link.path}
                                            noWrap
                                            underline="none"
                                            sx={{
                                                typography: 'body2',
                                                color: 'text.primary',
                                                fontSize: 13,
                                                transition: (theme) => theme.transitions.create('all'),
                                                '&:hover': { color: 'primary.main' }
                                            }}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </Stack>
                            ))}
                        </Masonry>

                        {!!more && !!products && !!tags && (
                            <Stack spacing={3}>
                                <Link
                                    component={RouterLink}
                                    href={more.path}
                                    sx={{
                                        typography: 'body2',
                                        display: 'inline-flex',
                                        fontSize: 13
                                    }}
                                >
                                    {more.title}
                                </Link>

                                <Divider />

                                <MenuCarousel products={products} numberShow={6} />

                                <Divider />

                                <MenuHotProducts tags={tags} />
                            </Stack>
                        )}
                    </Paper>
                )}
            </>
        );
    }

    return <ParentItem path={path} title={title} />;
}

// ----------------------------------------------------------------------

function ParentItem({ path = '', title, open, hasSub, ...other }: ParentItemProps) {
    const activeStyle = {
        color: 'primary.main',
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    };

    return (
        <Link component={RouterLink} href={path} underline="none">
            <ListItem
                sx={{
                    pl: 2.5,
                    pr: 1.5,
                    height: PARENT_ITEM_HEIGHT,
                    cursor: 'pointer',
                    color: 'text.primary',
                    typography: 'subtitle2',
                    textTransform: 'capitalize',
                    justifyContent: 'space-between',
                    transition: (theme) => theme.transitions.create('all'),
                    '&:hover': activeStyle,
                    ...(open && activeStyle)
                }}
                {...other}
            >
                {title}

                {hasSub && <Iconify icon="eva:arrow-ios-forward-fill" width={16} sx={{ ml: 1 }} />}
            </ListItem>
        </Link>
    );
}
