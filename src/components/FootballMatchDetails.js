import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMatchDetails } from '../redux'
import { Typography, Grid, Box, Divider } from '@mui/material'
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux'
import FootballPlayerScores from './FootballPlayerScores'



const FootballMatchDetails = ({ matchDetails, fetchMatchDetails }) => {
    const { id } = useParams();
    const url = `/api/football-match-details/${id}`

    useEffect(() => {
        fetchMatchDetails(url)
    }, [])
    /* 
    
    
            <Grid item xs={6}>
                        <Typography variant ="h5">{matchDetails.matchDetails.footballTeamScores[0].name}</Typography>
                        <FootballPlayerScores scores = {matchDetails.matchDetails.footballTeamScores[0].footballPlayerScores}/>   
                </Grid>
                <Grid item xs={6}>
                        <Typography variant ="h5">{matchDetails.matchDetails.footballTeamScores[1].name}</Typography>
                        
                </Grid>
    */
    console.log("match details", matchDetails)
    return (matchDetails.loading ? "Loading" : (<Grid container maxWidth={600} border={1}>
        <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="span">{matchDetails.matchDetails.tournamentName}</Typography>
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant='span'>{matchDetails.matchDetails.date} &#8226; {matchDetails.matchDetails.footballTeamScores[0].name} VS {matchDetails.matchDetails.footballTeamScores[1].name} &#8226; match #{matchDetails.matchDetails.number}</Typography>
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="span">{matchDetails.matchDetails.footballTeamScores[0].name}</Typography>
            <FootballPlayerScores scores = {matchDetails.matchDetails.footballTeamScores[0].footballPlayerScores}/>   
        </Grid>
        <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="h5">{matchDetails.matchDetails.footballTeamScores[1].name}</Typography>
            <FootballPlayerScores scores = {matchDetails.matchDetails.footballTeamScores[1].footballPlayerScores}/>   
        </Grid>
    </Grid>)
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
