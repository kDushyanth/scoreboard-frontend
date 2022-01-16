import { Typography, ListItem, ListItemText, Divider, List } from "@mui/material"
import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import {fetchMatches} from "../redux/"

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
                                primary= {<Typography>{match.date} &#8226; match# {match.number}  &#8226; {match.tournamentName}</Typography>}
                                 /*{match.date + " &#8226; match #" + match.number + " &#8226;" + match.tournamentName}*/
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {match.team1Name} - {match.team1Goals}
                                        </Typography>
                                        <br/>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                           {match.team2Name} - {match.team2Goals}
                                        </Typography>
                                        <Link to={`/football-match-details/${match.id}`}>
                                            click-here
                                        </Link>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))
                }
                <Divider variant="fullWidth" component="li" />
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