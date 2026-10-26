// @mui
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

// components
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import { useResponsive } from 'src/hooks/use-responsive';

const Contacts = () => {
    const mdUp = useResponsive('up', 'md');

    const FaqCardStyle = {
        pt: 1,
        pb: 2,
        borderRadius: 0,
        borderTopWidth: 5,
        borderTopStyle: 'solid',
        borderTopColor: '#D9B80B',
        boxShadow: 'none',
        '& .MuiPaper-root': {
            boxShadow: 'none !important',
            background: 'none !important'
        },
        background: '#192333'
    };

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
        <Stack spacing={3}>
            <Typography variant="h3">FAQ</Typography>

            <Stack mt={4}>
                <Typography variant="h3" sx={QuestionStyle}>
                    1
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>How can I register in this online casino?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                To register, go to our registration page and follow the instructions. You will be asked
                                to provide some personal information and accept our terms and conditions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    2
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>How can I deposit money into my casino account?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                {`You can deposit money into your account using various payment methods, including credit
                                cards, bank transfers, and e-wallets, or by visiting your trusted store. Visit the
                                "Deposits" section for more details.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    3
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What is the minimum deposit amount?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                What are the processing times for deposits? Answer: Deposits are generally processed
                                instantly, but times may vary depending on the payment method used.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    4
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>How can I withdraw my winnings?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                You can request a withdrawal in the “Withdrawals” section of your account, or by
                                contacting your trusted store. Make sure to use the registered payment method and check
                                that the minimum withdrawal balance has been reached.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    5
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What types of casino games do you offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                We offer a wide selection of casino games, including slot machines, table games like
                                blackjack, roulette, poker, and baccarat, as well as live dealer games, mini-games,
                                sports betting, live sports betting, esportsbook.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    6
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What are the odds of winning in your games?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                The odds of winning vary from game to game. You can find information on the specific
                                winning odds for each game in the game rules section.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    7
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What are the wagering requirements for bonuses?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                The wagering requirements for bonuses vary depending on the offer. Information on
                                wagering requirements is provided when you claim a specific bonus.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    8
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>How can I contact customer service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                {`You can contact our customer service via email or Telegram. Contact details are
                                available in the "Contacts" section of our website.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    9
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What languages do you support?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                We support multiple languages to ensure a better user experience, including English,
                                French, Arabic, Spanish, and Italian.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    10
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What kind of mobile support do you offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                Our casino is fully optimized for mobile devices, so you can play from your smartphone
                                or tablet without any problems. No separate app is required.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    11
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What security measures do you adopt to protect user data?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                {`We use advanced encryption technologies to protect our users' data and ensure the
                                security of transactions.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    12
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What should I do if I have a gambling problem?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                If you have problems with gambling, we advise you to contact our customer service or
                                seek help from organizations specialized in the prevention of gambling addiction. Your
                                health is important to us.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    13
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>Can I have more than one account in this online casino?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                No, you can have only one account per person. Violation of this rule may result in the
                                closure of your accounts.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    14
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What should I do if I forget my password?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                {`If you forget your password, you can click on the "Password Recovery" function on the
                                login page and follow the instructions to reset it or contact your trusted store.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    15
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>{`What is your casino's privacy policy?`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                We respect your privacy and adopt a strict privacy policy. You can find the details in
                                the “Privacy” section of our site.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    16
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>What happens if my connection is interrupted while I am playing?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                If the connection is interrupted, the game will be temporarily suspended. Once the
                                connection is restored, you can resume the game from where you left off.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    17
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>Do you offer progressive jackpot games?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                Yes, we offer a selection of progressive jackpot games that offer the possibility of
                                very high winnings.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    18
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>
                                Can I play from a country different from the one I am registered in?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                Geographic restrictions may vary. Make sure to check the availability of our services in
                                your country of residence.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>

            <Stack mt={1}>
                <Typography variant="h3" sx={QuestionStyle}>
                    19
                </Typography>
                <Card sx={FaqCardStyle}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'center' } }}
                        >
                            <Typography>How can I close my account if I want to stop playing?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography textAlign="center">
                                You can request the closure of your account by contacting our customer service. Your
                                request will be processed according to our account closure policies.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Stack>
        </Stack>
    );
};

export default Contacts;
