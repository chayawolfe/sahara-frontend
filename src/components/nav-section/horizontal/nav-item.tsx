import { forwardRef } from 'react';
import { useNavigate } from 'react-router';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import ListItemText from '@mui/material/ListItemText';
// routes
// import { RouterLink } from 'src/routes/components';
import { useAuthContext } from 'src/auth/hooks';
import { useSnackbar } from 'src/components/snackbar';

//
import Iconify from '../../iconify';
//
import { NavItemProps, NavConfigProps } from '../types';
import { StyledItem, StyledIcon } from './styles';

// ----------------------------------------------------------------------

type Props = NavItemProps & {
    config: NavConfigProps;
};
const NavItem = forwardRef<HTMLDivElement, Props>(
    ({ item, depth, open, active, externalLink, config, ...other }, ref) => {
        const { title, path, icon, info, children, disabled, caption } = item;

        const navigate = useNavigate();

        const { enqueueSnackbar } = useSnackbar();

        const { user } = useAuthContext();

        const subItem = depth !== 1;

        const renderContent = (
            <StyledItem
                disableGutters
                ref={ref}
                open={open}
                depth={depth}
                active={active}
                disabled={disabled}
                config={config}
                {...other}
            >
                {icon && (
                    <StyledIcon
                        size={config.iconSize}
                        sx={{
                            ...(subItem && { mr: 1.5 })
                        }}
                    >
                        {icon}
                    </StyledIcon>
                )}

                {!(config.hiddenLabel && !subItem) && (
                    <ListItemText
                        sx={{
                            ...(!subItem && {
                                ml: 1
                            })
                        }}
                        primary={title}
                        primaryTypographyProps={{
                            noWrap: true,
                            typography: 'body2',
                            textTransform: 'capitalize',
                            fontWeight: active ? 'fontWeightBold' : 'fontWeightMedium',
                            ...(subItem && {
                                fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium'
                            })
                        }}
                    />
                )}

                {info && (
                    <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
                        {info}
                    </Box>
                )}

                {caption && (
                    <Tooltip title={caption} arrow>
                        <Iconify width={16} icon="eva:info-outline" sx={{ ml: 0.5, color: 'text.disabled' }} />
                    </Tooltip>
                )}

                {!!children && (
                    <Iconify
                        icon={subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill'}
                        width={16}
                        sx={{ flexShrink: 0, ml: 0.5 }}
                    />
                )}
            </StyledItem>
        );

        // External link
        if (externalLink)
            return (
                <Link
                    href={path}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{
                        ...(disabled && {
                            cursor: 'default'
                        })
                    }}
                >
                    {renderContent}
                </Link>
            );

        const handleClick = (data: string) => {
            console.log(data, 'path.string');
            if (data === '/open/virtual' || data === '/open/aviator' || data === '/open/chicken') {
                if (user) {
                    navigate(data);
                } else {
                    enqueueSnackbar('You are not logged in', { variant: 'error' });
                }
            } else {
                navigate(data);
            }
        };
        // Default
        return (
            <Link
                onClick={() => {
                    handleClick(path);
                }}
                // component={RouterLink}
                // href="#"
                underline="none"
                sx={{
                    ...(disabled && {
                        cursor: 'default'
                    })
                }}
            >
                {renderContent}
            </Link>
        );
    }
);

export default NavItem;
