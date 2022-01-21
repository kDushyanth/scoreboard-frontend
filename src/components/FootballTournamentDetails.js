import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchFootballTDetails } from "../redux"
import { connect } from "react-redux"
import React from "react"
import { Box, Divider, Grid, Typography } from "@mui/material"
import FootballMatchesUtil from "./FootballMatchesUtil"
import { centerText } from "../styles"

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
            <Box>
                <Grid container>
                    <Grid item xs="12" sx={centerText}><Typography variant="h6">{tournamentDetails.tMatches.name} </Typography> </Grid>
                    <Grid item xs="6" sx={{ display: 'flex', justifyContent: 'flex-start', color: 'orange' }}><Typography variant="span">  {tournamentDetails.tMatches.startDate}  </Typography></Grid>

                    <Grid item xs="6" sx={{ display: 'flex', justifyContent: 'flex-end', color: 'red' }}><Typography variant="span"> {tournamentDetails.tMatches.endDate}</Typography></Grid>
                </Grid>
                <Divider/>
                <FootballMatchesUtil matches={tournamentDetails.tMatches.matches} />
            </Box>
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