// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Contacts = () => (
    <Stack spacing={3} mb={5}>
        <Typography variant="h3">DISPUTE RESOLUTION</Typography>
        <Stack mt={2}>
            <Typography variant="h6">
                Complaints, queries, and difficulties are to be directed to our Customer Support Department on the
                following email
            </Typography>
            <Typography>support@gamblix.dev</Typography>

            <Stack alignItems="flex-start">
                <Typography textAlign="start" color="textSecondary">
                    {/* <Box component="span" fontWeight="bold" color="#e9e9e9">
                                    Ultimo aggiornamento:&nbsp;&nbsp;
                                </Box> */}
                    The Customer Support Department will do its best to provide the customer with a reply or solution
                    within 48 hours from the customer’s query or complaint. In any case, however, the outcome of the
                    complaint will be communicated within a maximum of ten days from receipt of the complaint. In
                    exceptional circumstances wherein we feel that adequate resolution of the complaint requires further
                    investigation, GAMBLIX NV may extend the timeframe by a further ten days. We shall inform you about
                    this delay within the first ten days of receipt of the complaint. In that case, we will also inform
                    you about the process, and possibly also put forward the necessary requests as deemed necessary. If
                    the client believes that his complaint has not been handled satisfactorily and would like to appeal
                    against GAMBLIX NV’s handling of the complaint, he may refer the dispute to the Designated
                    Alternative Dispute Resolution (ADR) entity (also referred to as ‘the ADR’). The ADR will examine
                    the circumstances of the dispute in order to decide the outcome thereof. The designated ADR entity
                    provides impartial ADR services for disputes that have arisen between players and GAMBLIX NV, as the
                    B2C operator in this case. The ADR has been authorized by the Curacao Gaming Commission. In order to
                    avail oneself of this service, the player will need to adhere to the following guidelines: a. the
                    player needs to first ensure that he has tried to resolve the dispute via GAMBLIX NV’s internal
                    complaints procedure (as per section 8.1 above). It is only once this attempt has not been fruitful
                    that the ADR entity will take into consideration any ADR dispute form submitted by a player; b.
                    players may only resort to assistance from the ADR if the dispute is not being or has not been
                    handled by another ADR service provider, regulator, or court. The ADR reserves the right to refuse
                    any submission for review of a dispute if it deems the latter to have been submitted to a third
                    party, or if it considers such request to be frivolous, vexatious, or does not relate to the outcome
                    of a gambling transaction (example, betting result, application of bonus offers, misleading terms
                    and conditions, or account management). It may also refuse to consider the dispute if in doing so,
                    the effective operation of the ADR would have been seriously impaired, or if it feels that either of
                    the parties has attempted to intimidate, threaten or exert undue external pressure on the ADR
                    process. A reply informing the parties that the ADR’s refusal to deal with the dispute will be
                    provided within three weeks of submission of request; c. Once the Designated ADR tackles the
                    dispute, the ADR’s outcome is considered to be a binding decision vis-à-vis both the player and
                    GAMBLIX NV. This therefore means that players may only seek further legal and judicial recourse in
                    regards to matters allowed by applicable law. Such circumstances usually include, for instance,
                    situations where the ADR has acted in a serious manner contrary to the rules of impartiality and
                    equity according to law and such action has thereby prejudiced the player’s rights. It is however
                    being made clear that the procedure before an ADR entity does not restrict the player’s right to
                    bring proceedings against GAMBLIX NV in any court of competent jurisdiction; d. With the exception
                    of when a claim falls outside the competence of the jurisdiction of the Small Claims Tribunal in
                    Curacao, GAMBLIX NV may offer the player recourse to a form of non-binding dispute resolution,
                    including mediation. At that stage, the player would also need to be informed of the necessary
                    recourse to obtain a binding decision. For the purposes of clarity, claims of more than € 5,000 fall
                    outside the competence of the jurisdiction of the Small Claims Tribunal in Curacao.
                </Typography>
                <Typography color="textSecondary" mt={2}>
                    {`e. submission of a request for assistance from the ADR is to be submitted within one
                                year from the conclusion of GAMBLIX NV’s review of the complaint; f. submissions to the
                                ADR are to take place by means of an e-mail to:complaints@gaming-curacao.com g. once
                                the matter has been referred to the ADR, GAMBLIX NV will not be replying to any player’s
                                correspondence. Any communication will be channeled through the Designated ADR.`}
                </Typography>
            </Stack>
        </Stack>
    </Stack>
);

export default Contacts;
