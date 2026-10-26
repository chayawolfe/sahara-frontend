// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Contacts = () => (
    <Stack spacing={3} mb={5}>
        <Typography variant="h3">Responsible gaming</Typography>
        <Stack mt={2}>
            <Typography variant="h6">
                We want our players to have fun while playing atBetgold216, so we encourage responsible gaming.
            </Typography>

            <Stack alignItems="flex-start">
                <Typography textAlign="start" fontWeight={400} color="textSecondary">
                    {/* <Box component="span" fontWeight="bold" color="#e9e9e9">
                                    Ultimo aggiornamento:&nbsp;&nbsp;
                                </Box> */}
                    We are trying to provide you with a responsible gaming environment while assisting you to take all
                    actions ensuring that your betting experience is entertaining and safe and not turning into a
                    financial burden.
                </Typography>

                <Stack mt={2}>
                    <Typography variant="h5">1. Our responsible gaming ensures that:</Typography>

                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• There are no players under 18 years of age.
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• There are no illegal players using our site.
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Our software is fair in all our games.
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• You can quit at any point in time if you find gambling to be affecting
                        you in a non-positive way.
                    </Typography>
                </Stack>
                <Stack mt={2}>
                    <Typography variant="h5">2. Getting assistance</Typography>

                    <Typography fontWeight={400} color="textSecondary" textAlign="left">
                        There are many organizations that can provide support and assistance to people who develop a
                        problem with gambling, and we recommend that players contact a self-help organization for
                        additional help.
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary" textAlign="left" mt={1}>
                        The following websites offer advice and guidance. Each one contains helpline numbers and an
                        e-mail address that you may contact if you would like confidential advice and support:
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link href="https://www.gamblersanonymous.org" target="_blank">
                            www.gamblersanonymous.org
                        </Link>
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link href="https://www.gamcare.org.uk" target="_blank">
                            www.gamcare.org.uk
                        </Link>
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link href="https://www.gamblingtherapy.org" target="_blank">
                            www.gamblingtherapy.org
                        </Link>
                    </Typography>
                </Stack>
                <Stack mt={2}>
                    <Typography variant="h5">3. Do you have a gambling problem?</Typography>
                    <Typography textAlign="start" fontWeight={400} color="textSecondary">
                        If you feel you may have a problem with your gambling, ask yourself the following questions:
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Have others ever criticized your gambling?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Have you ever lied to cover up the amount of money or time you have
                        spent gambling?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Do arguments, frustrations or disappointments make you want to gamble?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Do you gamble alone for long periods?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Do you stay away from work, college, or school to gamble?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Do you gamble to escape from a boring or unhappy life?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`• Are you reluctant to spend 'gambling money' on anything
                                    else?`}
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Have you lost interest in your family, friends, or pastimes due to
                        gambling?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• After losing, do you feel you must try and win back your losses as
                        soon as possible?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• When gambling and you run out of money, do you feel lost and in
                        despair, and need to gamble again as soon as possible?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Have you lied, stolen, or borrowed just to get money to gamble or to
                        pay gambling debts?
                    </Typography>
                    <Typography fontWeight={400} color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;• Do you feel depressed or even suicidal because of your gambling?
                    </Typography>
                    <Typography textAlign="start" fontWeight={400} color="textSecondary" mt={2}>
                        {`If you have answered 'yes' to all or some of these questions, the more likely it is
                                    that you have a gambling problem and may wish to seek help and advice through the
                                    channels outlined above.`}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
);

export default Contacts;
