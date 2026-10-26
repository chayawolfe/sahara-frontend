import { useState } from 'react';

// @mui
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// config
import { ASSETS_API } from 'src/config-global';
// components
import Image from 'src/components/image';
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { useCarousel } from 'src/components/carousel';

// import { useResponsive } from 'src/hooks/use-responsive';
// import footer icons
import { _carousels, footerInfo, FooterLinks, footerHeadIcons, footerMobileInfo } from './icons/footer';

const Footer = () => {
    // const isMdUp = useResponsive('up', 'md');

    const settings = useSettingsContext();

    const [open, setOpen] = useState(false);

    const lgUp = useResponsive('up', 'lg');

    const handleClose = () => {
        setOpen(false);
    };

    const openLicense = () => {
        console.log(1234);
        setOpen(true);
    };

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 14,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    const renderHead = (
        <Stack direction="row" justifyContent="space-between" pb={6}>
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                flexGrow={{ xs: 1, md: 0 }}
                justifyContent={{ xs: 'space-evenly' }}
            >
                {lgUp && <Image src={footerHeadIcons[0]} sx={{ height: 32.43 }} />}
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width={{ xs: '170px' }}
                    sx={{ bgcolor: '#0C1221', borderRadius: '10px', px: { md: 3, xs: 4 }, py: { md: 0.6, xs: 1 } }}
                >
                    <Image src={footerHeadIcons[1]} sx={{ width: 22.12, height: 26.25 }} />
                    <Stack>
                        <Typography sx={{ fontSize: 10 }}>Download</Typography>
                        <Typography sx={{ fontSize: 10 }}>app for IOS</Typography>
                    </Stack>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width={{ xs: '170px' }}
                    sx={{ bgcolor: '#0C1221', borderRadius: '10px', px: { md: 3, xs: 4 }, py: { md: 0.6, xs: 1 } }}
                >
                    <Image src={footerHeadIcons[2]} sx={{ width: 22.12, height: 26.25 }} />
                    <Stack>
                        <Typography sx={{ fontSize: 10 }}>Download</Typography>
                        <Typography sx={{ fontSize: 10 }}>app for Android</Typography>
                    </Stack>
                </Stack>
            </Stack>
            {lgUp && (
                <Stack direction="row" spacing={2}>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ bgcolor: '#0C1221', borderRadius: '5px', px: 2, py: 1 }}
                    >
                        <Image src={footerHeadIcons[3]} />
                        <Typography>Français</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        onClick={() => {
                            window.location.href = '/contact-us/contacts';
                        }}
                        sx={{ bgcolor: '#0C1221', borderRadius: '5px', px: 2, py: 1, cursor: 'pointer' }}
                    >
                        <Image src={footerHeadIcons[4]} />
                        <Typography>Soutien</Typography>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );

    const renderList = (
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="space-between" pb={8}>
            {FooterLinks.map((item: any, index: number) => (
                <Stack key={index} pt={6}>
                    <Typography variant="caption" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                        {item[0].title}
                    </Typography>
                    <List>
                        {item.map((subItem: any, subIndex: number) => {
                            if (subIndex === 0) {
                                return null;
                            }
                            return (
                                <ListItem
                                    key={subIndex}
                                    component={Link}
                                    href={subItem.link}
                                    disablePadding
                                    disableGutters
                                    target={subItem?.target}
                                    sx={{
                                        py: 1,
                                        '& span': {
                                            transition: '.25s'
                                        },
                                        '&:hover': {
                                            '& span': {
                                                color: 'text.primary'
                                            }
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={subItem.title}
                                        primaryTypographyProps={{
                                            color: '#A5AFC1',
                                            variant: 'caption',
                                            fontWeight: 500
                                        }}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                </Stack>
            ))}
        </Stack>
    );

    const renderMobileList = (
        <>
            {FooterLinks.map((item: any, index: number) => (
                <Accordion
                    key={index}
                    sx={{
                        '& .Mui-expanded,.MuiCollapse-root': {
                            background: '#1E2738'
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ fontSize: '12px' }}
                    >
                        {item[0].title}
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {item.map((subItem: any, subIndex: number) => {
                                if (subIndex === 0) {
                                    return null;
                                }
                                return (
                                    <ListItem
                                        key={subIndex}
                                        component={Link}
                                        href={subItem.link}
                                        disablePadding
                                        disableGutters
                                        target={subItem?.target}
                                        sx={{
                                            py: 1,
                                            '& span': {
                                                transition: '.25s'
                                            },
                                            '&:hover': {
                                                '& span': {
                                                    color: 'text.primary'
                                                }
                                            },
                                            '& .MuiPaper-root': { background: 'transparent' }
                                        }}
                                    >
                                        <ListItemText
                                            primary={subItem.title}
                                            primaryTypographyProps={{
                                                color: '#A5AFC1',
                                                variant: 'caption',
                                                fontWeight: 500
                                            }}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );

    return (
        <AppBar
            component="footer"
            position="static"
            sx={{
                boxShadow: 'none',
                backgroundImage: 'none',
                bgcolor: { xs: '#1E2738', md: '#192333' }
            }}
        >
            <Stack
                sx={{
                    py: 4,
                    bgcolor: { xs: '#1E2738', md: '#192333' }
                }}
            >
                <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                    {renderHead}

                    {lgUp ? renderList : renderMobileList}

                    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                        {_carousels.map((item, index: number) => (
                            <CarouselItem key={item} item={item} />
                        ))}
                    </Carousel>

                    <Stack
                        spacing={2}
                        mt={{ md: 8, xs: 2 }}
                        direction={{ xs: 'column-reverse', md: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                    >
                        {lgUp ? (
                            <Typography
                                fontSize="10px"
                                color="white"
                                maxWidth={{ md: '70%', xs: '100%' }}
                                textAlign={{ xs: 'center', md: 'unset' }}
                            >
                                Copyright © 2025 BetGold216.com All rights reserved
                            </Typography>
                        ) : (
                            <Stack gap={2}>
                                <Typography
                                    fontSize="10px"
                                    color="white"
                                    maxWidth={{ md: '70%', xs: '100%' }}
                                    textAlign={{ xs: 'center', md: 'unset' }}
                                >
                                    Betgold216 is operated by Gamblix Limited, which is registered in 1065, Sliema,
                                    Malta, registration No. MA 400062
                                </Typography>
                                <Typography fontSize="10px" color="white" maxWidth="100%" textAlign="center">
                                    2025 © Betgold216, all rights reserved
                                </Typography>
                            </Stack>
                        )}

                        <Stack direction="row" spacing={2} alignItems="center">
                            {lgUp
                                ? footerInfo.map((item, key) => (
                                    <Image
                                        key={key}
                                        src={item}
                                        onClick={openLicense}
                                        sx={{ cursor: 'pointer', '& img': { height: 'auto' } }}
                                    />
                                ))
                                : footerMobileInfo.map((item, key) => (
                                    <Image
                                        key={key}
                                        src={item}
                                        onClick={openLicense}
                                        sx={{ cursor: 'pointer', '& img': { height: 'auto' } }}
                                    />
                                ))}
                        </Stack>
                    </Stack>
                </Container>
            </Stack>

            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { margin: 0, width: '100%' } }}
            >
                <DialogContent sx={{ p: 0 }}>
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            right: 5,
                            zIndex: 1,
                            fontSize: 32,
                            color: '#9d9d9d',
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    />
                    <Image alt="License" src={`${ASSETS_API}/footer/license.png`} />
                </DialogContent>
            </Dialog>
        </AppBar>
    );
};

export default Footer;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Stack sx={{ maxHeight: 500, mr: 1, alignItems: 'center' }}>
            <Image alt={item} src={item} />
        </Stack>
    );
}
