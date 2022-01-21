import { Typography,Grid } from "@mui/material"
import { teamScore } from "../styles"
const FootballTeamScore = ({match}) => {
    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid item xs={6} md={4}>
                <Typography sx={teamScore} variant='h6'>
                    {match.team1Name} {" - "} {match.team1Goals}
                </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
                <Typography sx={teamScore} variant='h6'>
                    {match.team2Name} {" - "} {match.team2Goals}
                </Typography>
            </Grid>
        </Grid>
    )
}
export default FootballTeamScore