import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchFootballTDetails } from "../redux"
import { connect } from "react-redux"
import React from "react"
import { Grid,Typography } from "@mui/material"
import FootballMatchesUtil from "./FootballMatchesUtil"

const FootballTDetails = ({ tournamentDetails, fetchTournamentDetails }) => {
    const { id } = useParams()
    console.log("football t det comp", tournamentDetails);
    console.log("football t det comp", id)
    useEffect(() => {
        console.log('whats gng on')
        fetchTournamentDetails(id)
    }, [])
    return tournamentDetails.loading ? "Loading" : (
        <React.Fragment>
            <Grid container>
                <Grid item xs={4}><Typography variant="span">{tournamentDetails.tMatches.name} </Typography> </Grid>
                <Grid item xs={3}><Typography variant="span">  {tournamentDetails.tMatches.startDate}  </Typography></Grid>
                <Grid item xs={1}><Typography variant="span">  to </Typography></Grid>
                <Grid item xs={4}><Typography variant="span"> {tournamentDetails.tMatches.endDate}</Typography></Grid>
            </Grid>
            <FootballMatchesUtil matches={tournamentDetails.tMatches.matches}/>
        </React.Fragment>
    );
}
const mapStateToProps = (state) => {
    return {
        tournamentDetails: state.footballTDetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTournamentDetails: (id) => dispatch(fetchFootballTDetails(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FootballTDetails)