import { Typography, ListItem, ListItemText, Divider, List, Box,ListItemButton } from "@mui/material"
import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { fetchMatches } from "../redux/"

const FootballMatches = ({ matchesData, fetchMatches }) => {
    useEffect(() => {
        fetchMatches()
    }, [])
    console.log(matchesData)
    return (
        matchesData.loading ? "Loading" : (
            <Box
            sx={{
                width : 600,
                border : 1
            }}>
            <List>
                {
                    matchesData.matches.map(match => (
                        <ListItem disablePadding key={match.id}>
                            <ListItemButton component="a" href={`/football-match-details/${match.id}`}>
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
                                    </React.Fragment>
                                }
                            />
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
            </Box>
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