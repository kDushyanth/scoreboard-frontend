import { useEffect } from "react"
import { fetchFootballTournaments } from "../redux"
import { connect } from "react-redux"
import React from 'react'
import { Typography,List,ListItem,ListItemButton,Box,ListItemText, Grid, Container } from "@mui/material"
import { centerText } from "../styles"

const FootballTournaments = ({ footballTournaments, fetchTournaments }) => {
    //console.log(footballTournaments)
    useEffect(() => {
        fetchTournaments()
    }, [])
    return footballTournaments.loading ? "Loading" : (
            <Container>
            <Typography sx={{textDecoration : "underline",marginBottom:"10ox"}} color="secondary" variant ="h6">Football Tournaments</Typography>
            <List>
                {
                    footballTournaments.tournaments.map(tournament => (
                        <ListItem disablePadding key={tournament.id}>
                            <ListItemButton component="a" href={`/football-tournament-details/${tournament.id}`}>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                        <Grid container> 
                                        <Grid item xs="12" sx={centerText}><Typography variant="span">{tournament.name } </Typography> </Grid>   
                                        <Grid item xs="6" sx={{display:'flex',justifyContent:'flex-start',color:'orange'}}><Typography variant="span">  {tournament.startDate}  </Typography></Grid>
                                       
                                        <Grid item xs="6" sx={{display:'flex',justifyContent:'flex-end',color:'red'}}><Typography variant="span"> {tournament.endDate}</Typography></Grid>
                                        </Grid>    
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
            </Container>
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