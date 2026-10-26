import { useCallback } from 'react';
// @mui
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { useResponsive } from 'src/hooks/use-responsive';
// locales
import { useLocales } from 'src/locales';
// ----------------------------------------------------------------------

export default function LanguagePopover() {
    const { allLangs, t, onChangeLang, currentLang } = useLocales();

    const popover = usePopover();

    const lgUp = useResponsive('up', 'lg');

    const handleChangeLang = useCallback(
        (option: any) => {
            onChangeLang(option.value);
            popover.onClose();
        },
        [popover, onChangeLang]
    );

    return (
        <>
            {/* <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.05)}
                onClick={popover.onOpen}
                sx={{
                    width: 40,
                    height: 40,
                    ...(popover.open && {
                        bgcolor: 'action.selected'
                    })
                }}
            > */}
            {lgUp ? (
                <IconButton
                    onClick={popover.onOpen}
                    sx={{
                        p: 0.8,
                        bgcolor: '#0C1221',
                        borderRadius: 0.75,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Typography color="white" fontWeight={700}>
                        {currentLang.value.toUpperCase()}
                    </Typography>
                    <Iconify icon={currentLang.icon} sx={{ borderRadius: 0.65 }} />
                    <Image
                        src="/assets/icons/navbar/ic_baseline-play-arrow.svg"
                        sx={{
                            color: 'text.secondary',
                            cursor: 'pointer',
                            transition: (theme) =>
                                theme.transitions.create('color', {
                                    duration: 250
                                }),
                            '&:hover': {
                                color: 'text.primary'
                            },
                            '& span': {
                                display: 'flex !important'
                            }
                        }}
                    />
                </IconButton>
            ) : (
                <IconButton
                    onClick={popover.onOpen}
                    sx={{
                        borderRadius: 0.75,
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': {
                            width: '25px',
                            height: '25px'
                        }
                    }}
                >
                    <Iconify icon={currentLang.icon} sx={{ borderRadius: 0.65 }} />
                </IconButton>
            )}

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
                {allLangs.map((option) => (
                    <MenuItem
                        key={option.value}
                        selected={option.value === currentLang.value}
                        onClick={() => handleChangeLang(option)}
                    >
                        <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />

                        {option.label}
                    </MenuItem>
                ))}
            </CustomPopover>
        </>
    );
}
