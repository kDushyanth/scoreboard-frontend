import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMatchDetails } from '../redux'
import { Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { connect } from 'react-redux'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const FootballMatchDetails = ({ matchDetails, fetchMatchDetails }) => {
    const { id } = useParams();
    const url = `/api/football-match-details/${id}`

    useEffect(() => {
        fetchMatchDetails(url)
    }, [])

    console.log("match details", matchDetails)
    return (matchDetails.loading ? "Loading" : ( 
        <Grid container spacing={2} minWidth={300} padding={20}>
            <Grid item xs={12}>
                <Item>{matchDetails.matchDetails.tournamentName}</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>{matchDetails.matchDetails.date} &#8226; {matchDetails.matchDetails.footballTeamScores[0].name} VS {matchDetails.matchDetails.footballTeamScores[1].name} &#8226; match #{matchDetails.matchDetails.number}</Item>
            </Grid>
            <Grid item xs={6}>
                    <Item>
                    <Typography variant ="h5">{matchDetails.matchDetails.footballTeamScores[0].name}</Typography>
                    {
                        matchDetails.matchDetails.footballTeamScores[0].footballPlayerScores.map((score,i) =>{
                            return (
                                <React.Fragment key={i}>
                                <Typography variant="span">
                                    {score.name} : 
                                </Typography>
                                {
                                    score.goals.map((goal,i)=>{
                                        return (
                                            <Typography variant="span" key={i}>
                                                {goal}
                                            </Typography>
                                        )
                                    })
                                }
                                <br/>
                                </React.Fragment>
                            )
                        })
                    }
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <Typography variant ="h5">{matchDetails.matchDetails.footballTeamScores[1].name}</Typography>
                    {
                        matchDetails.matchDetails.footballTeamScores[1].footballPlayerScores.map((score,i) =>{
                            return (
                                <React.Fragment key={i}>
                                <Typography variant="span">
                                    {score.name} : 
                                </Typography>
                                {
                                    score.goals.map((goal,i)=>{
                                        return (
                                            <Typography variant="span" key={i}>
                                                {goal+" "}
                                            </Typography>
                                        )
                                    })
                                }
                                <br/>
                                </React.Fragment>
                            )
                        })
                    }
                </Item>
                
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
