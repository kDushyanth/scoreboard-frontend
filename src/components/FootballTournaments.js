import { useEffect } from "react"
import { fetchFootballTournaments } from "../redux"
import { connect } from "react-redux"
import React from 'react'
import { Typography,List,ListItem,ListItemButton,Box,ListItemText, Grid } from "@mui/material"

const FootballTournaments = ({ footballTournaments, fetchTournaments }) => {
    //console.log(footballTournaments)
    useEffect(() => {
        fetchTournaments()
    }, [])
    return footballTournaments.loading ? "Loading" : (
        <Box
            sx={{
                width: 600,
                border: 1
            }}>
            <List>
                {
                    footballTournaments.tournaments.map(tournament => (
                        <ListItem disablePadding key={tournament.id}>
                            <ListItemButton component="a" href={`/football-tournaments/${tournament.id}`}>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                        <Grid container> 
                                        <Grid item xs="4"><Typography variant="span">{tournament.name } </Typography> </Grid>   
                                        <Grid item xs="3"><Typography variant="span">  {tournament.startDate}  </Typography></Grid>
                                        <Grid item xs="1"><Typography variant="span">  to </Typography></Grid>
                                        <Grid item xs="4"><Typography variant="span"> {tournament.endDate}</Typography></Grid>
                                        </Grid>    
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
        </Box>
    )
}
const mapStateToProps = (state) => {
    //console.log(state.footballTournaments)
    return {
        footballTournaments: state.footballTournaments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTournaments: () => dispatch(fetchFootballTournaments())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FootballTournaments)