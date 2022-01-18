import { Typography, ListItem, ListItemText, Divider, List } from "@mui/material"
import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchMatches } from "../redux/"

const FootballMatches = ({ matchesData, fetchMatches }) => {
    useEffect(() => {
        fetchMatches()
    }, [])
    console.log(matchesData)
    return (
        matchesData.loading ? "Loading" : (
            <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                {
                    matchesData.matches.map(match => (
                        <ListItem alignItems="flex-start" key={match.id}>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography>{match.date} &#8226; match# {match.number}  &#8226; {match.tournamentName}
                                        </Typography>
                                        <Typography>
                                            {match.team1Name} - {match.team1Goals}
                                        </Typography>
                                        <Typography>
                                            {match.team2Name} - {match.team2Goals}
                                        </Typography>
                                        <Link to={`/football-match-details/${match.id}`}>
                                            click-here
                                        </Link>
                                        <Divider variant="fullWidth" component="p" variant="fullWidth" />
                                    </React.Fragment>
                                }
                            />

                        </ListItem>

                    ))
                }
            </List>
        ))
}

const MapStateToProps = (state) => {
    return {
        matchesData: state.footballMatches
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        fetchMatches: () => dispatch(fetchMatches())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(FootballMatches)