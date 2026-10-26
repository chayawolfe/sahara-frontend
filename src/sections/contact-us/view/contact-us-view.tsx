// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// components
import { useSettingsContext } from 'src/components/settings';
import { useNavigate, useParams } from 'react-router';
import { useResponsive } from 'src/hooks/use-responsive';
// config
import { ASSETS_API } from 'src/config-global';

import Contacts from '../contacts';
import AboutUs from '../about-us';
import ResponsiveGameing from '../responsive-gameing';
import PrivacyPolicy from '../privacy-policy';
import Trems from '../terms';
import FAQ from '../faq';
import Affiliations from '../affiliations';
import AntyMoneyLaunder from '../anty-money-launder';
import DisputeResolution from '../dispute-resolution';

// ----------------------------------------------------------------------

const mobileItemStyle = {
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    p: 1,
    border: '1px solid',
    whiteSpace: 'nowrap'
};

const arrowStyle = {
    background: '#D9D9D9',
    color: '#0C1221',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const ContactUsView = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const mdUp = useResponsive('up', 'md');

    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'}>
            {mdUp ? (
                <Stack
                    direction="row"
                    sx={{ bgcolor: '#192333', mb: 4 }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack p={3} pl={6}>
                        <Box component="img" src={`${ASSETS_API}/contact/logo.svg`} />
                        <Typography>Home / Privacy Policy</Typography>
                    </Stack>
                    <Stack direction="row">
                        <Box
                            sx={{
                                borderBottom: '132px solid #192333',
                                borderRight: '70px solid transparent',
                                borderLeft: '0px solid transparent',
                                marginRight: '-70px',
                                zIndex: 1
                            }}
                        />
                        <Stack sx={{ bgcolor: '#D9B80B' }} p={3} pl={12} alignItems="flex-end">
                            <Typography variant="h3" color="black">
                                Do you need more help?
                            </Typography>
                            <Button sx={{ bgcolor: '#0C1221', px: 2 }}>Contact us </Button>
                        </Stack>
                    </Stack>
                </Stack>
            ) : (
                <Stack
                    direction="row"
                    sx={{ bgcolor: '#192333', mb: 4 }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack p={3} pl={6}>
                        <Box component="img" src="/logo/mobile_logo.png" />
                        <Typography fontSize={10}>Home / Privacy Policy</Typography>
                    </Stack>
                    <Stack direction="row">
                        <Box
                            sx={{
                                borderBottom: '87px solid #192333',
                                borderRight: '71px solid transparent',
                                borderLeft: '0px solid transparent',
                                marginRight: '-70px',
                                zIndex: 1
                            }}
                        />
                        <Stack sx={{ bgcolor: '#D9B80B' }} p={1} pl={12} alignItems="center" justifyContent="center">
                            <Typography color="black" fontSize={12} fontWeight={700}>
                                Do you need more help?
                            </Typography>
                            <Button sx={{ bgcolor: '#0C1221', px: 2, fontSize: '12px', whiteSpace: 'nowrap' }}>
                                Contact us{' '}
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            )}
            <Stack direction={mdUp ? 'row-reverse' : 'column'} p={2} px={4} spacing={2} mb={5}>
                {!mdUp && (
                    <Stack
                        className="scroll-content"
                        id="myDiv"
                        direction="row"
                        flexWrap={mdUp ? 'wrap' : 'nowrap'}
                        spacing={1}
                        mb={5}
                        sx={{
                            overflowX: mdUp ? 'hidden' : 'auto',
                            width: '100%',
                            p: 1,
                            '::-webkit-scrollbar': {
                                height: mdUp ? '5px' : '3px'
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: '#078DEE',
                                borderRadius: 2
                            }
                        }}
                    >
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/contacts')}>
                            Contacts
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/faq')}>
                            FAQ
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/affiliations')}>
                            Affiliations
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/about-us')}>
                            About us
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/responsive-gameing')}>
                            Responsible gaming
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/privacy-policy')}>
                            Privacy policy
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/anty-money-raunder')}>
                            Anty Money-Laundering
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/terms')}>
                            Terms
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/dispute-resolution')}>
                            Dispute Resolution
                        </Box>
                    </Stack>
                )}
                <Stack
                    sx={{
                        width: mdUp ? 'calc(100% - 320px)' : '100%',
                        pr: mdUp ? 10 : 0
                    }}
                >
                    {(() => {
                        switch (id) {
                            case 'contacts': {
                                return <Contacts />;
                            }
                            case 'faq': {
                                return <FAQ />;
                            }
                            case 'about-us': {
                                return <AboutUs />;
                            }
                            case 'responsive-gameing': {
                                return <ResponsiveGameing />;
                            }
                            case 'privacy-policy': {
                                return <PrivacyPolicy />;
                            }
                            case 'terms': {
                                return <Trems />;
                            }
                            case 'affiliations': {
                                return <Affiliations />;
                            }
                            case 'anty-money-raunder': {
                                return <AntyMoneyLaunder />;
                            }
                            case 'dispute-resolution': {
                                return <DisputeResolution />;
                            }
                            default: {
                                return <Contacts />;
                            }
                        }
                    })()}
                </Stack>

                {mdUp && (
                    <Stack
                        sx={{
                            top: 64 + 40,
                            position: 'sticky',
                            width: 320,
                            alignSelf: 'flex-start',
                            flexGrow: 'unset'
                        }}
                        spacing={3}
                    >
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/contacts')}
                            >
                                Contacts
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/privacy-policy')}
                            >
                                Privacy Policy
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/terms')}
                            >
                                Terms & Conditions
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/about-us')}
                            >
                                About us
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/responsive-gameing')}
                            >
                                Responsable Gaming
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/anty-money-raunder')}
                            >
                                Anti money-laundering
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/dispute-resolution')}
                            >
                                Dispute Resolution
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/affiliations')}
                            >
                                Affiliations
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Box sx={arrowStyle}>
                                <ArrowRightIcon />
                            </Box>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/contact-us/faq')}
                            >
                                FAQ
                            </Link>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Container>
    );
};

export default ContactUsView;
