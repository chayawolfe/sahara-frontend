// @mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

const Contacts = () => {
    const mdUp = useResponsive('up', 'md');
    const QuestionStyle = {
        width: 40,
        height: 40,
        bgcolor: '#D9B80B',
        display: mdUp ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        mb: -7,
        ml: '-20px',
        zIndex: 1,
        borderRadius: 1,
        color: '#0C1221'
    };

    return (
        <Stack spacing={5}>
            <Typography variant="h3">About Us</Typography>
            <Stack mt={4}>
                <Typography variant="h3" sx={QuestionStyle}>
                    1
                </Typography>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: '#D9B80B',
                        boxShadow: 'none',
                        background: '#192333'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        <Typography variant="h6">
                            {`Welcome to Betgold216.net, one of the world's leading online casinos and sportsbooks.`}
                        </Typography>
                        <Stack alignItems="flex-start">
                            <Typography textAlign="start" color="textSecondary">
                                {`We offer a wide variety of betting opportunities across thousands of casino games and sports
                            from across the world. Our focus is on fun, ease of use, reliability, and security. Our
                            software and systems are at the forefront of technological innovation, which allows us to
                            deliver cutting-edge game features and functionality. Betgold216.net is owned and operated by
                            GAMBLIX B.V., a company incorporated under the laws of Curacao with company registration
                            number 154209 and having its registered address at Scharlooweg 39, Willemstad, Curacao,
                            licensed by Antillephone N.V., E-Gaming license No. 10945/JAB, authorized by the Government
                            of Curacao.`}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack mt={2}>
                <Typography variant="h3" sx={QuestionStyle}>
                    2
                </Typography>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: '#D9B80B',
                        boxShadow: 'none',
                        background: '#192333'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        <Typography variant="h6">What we offer you</Typography>
                        <Stack alignItems="flex-start">
                            <Typography textAlign="start" color="textSecondary">
                                Our team works 24/7 in order to consign the best service for everyone. We are constantly
                                working on updating the betting odds throughout the games, and we are at your service to
                                provide answers in regard to all sports bets in real time. Our website also provides
                                various kinds of casino games, which make a complete experience for a variety of
                                gambling options.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack mt={2}>
                <Typography variant="h3" sx={QuestionStyle}>
                    3
                </Typography>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: '#D9B80B',
                        boxShadow: 'none',
                        background: '#192333'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        <Typography variant="h6">Our customers are what counts</Typography>
                        <Stack alignItems="flex-start">
                            <Typography textAlign="start" color="textSecondary">
                                Our staffs aim is to provide each individual customer with a secure and dependable
                                environment. We are here to answer all your questions 24/7. Feel free to reach us
                                anytime by e-mail or live chat. As we realize how important you all are to us, we do
                                everything we can to keep you satisfied and entertained, when entering our website.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    );
};

export default Contacts;
