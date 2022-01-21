import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMatchDetails } from '../redux'
import { Typography, Grid, Box, Divider,Button,Card } from '@mui/material'
import { connect } from 'react-redux'
import FootballPlayerScores from './FootballPlayerScores'
import FootballTeamScore from './FootballTeamScore'
import { teamScore } from '../styles'


const FootballMatchDetails = ({ matchDetails, fetchMatchDetails }) => {
    const { id } = useParams();
    const url = `/api/football-match-details/${id}`

    useEffect(() => {
        fetchMatchDetails(url)
    }, [])
   
    console.log("match details", matchDetails)
    return (matchDetails.loading ? "Loading" : (
    <Card sx={{width:600,padding:2}}>
    <Grid container >
        <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="span"><Button color='info' size='large' href={`/football-tournament-details/${matchDetails.matchDetails.tournamentId}`}>{matchDetails.matchDetails.tournamentName}</Button></Typography>
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant='span'>{matchDetails.matchDetails.date} &#8226; {matchDetails.matchDetails.footballTeamScores[0].name} VS {matchDetails.matchDetails.footballTeamScores[1].name} &#8226; match #{matchDetails.matchDetails.number}</Typography>
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
            <Box sx={teamScore}>
            <Typography variant="h6">{matchDetails.matchDetails.footballTeamScores[0].name} - </Typography>
            <Typography variant="h6">{matchDetails.matchDetails.footballTeamScores[0].goals} </Typography>
            </Box>
            <FootballPlayerScores scores = {matchDetails.matchDetails.footballTeamScores[0].footballPlayerScores}/>   
        </Grid>
        <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
            <Box sx={teamScore}>
            <Typography variant="h6">{matchDetails.matchDetails.footballTeamScores[1].name} - </Typography>
            <Typography variant="h6">{matchDetails.matchDetails.footballTeamScores[1].goals}</Typography>
            </Box>
            <FootballPlayerScores scores = {matchDetails.matchDetails.footballTeamScores[1].footballPlayerScores}/>   
        </Grid>
    </Grid>
    </Card>)
    )
}
const mapStateToProps = (state) => {
    return {
        matchDetails: state.footballMatchDetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMatchDetails: (url) => dispatch(fetchMatchDetails(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FootballMatchDetails)
