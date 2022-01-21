import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Grid,Container } from '@mui/material'
import React from 'react'
import { centerText ,teamScore} from '../styles'
import FootballTeamScore from './FootballTeamScore'
const FootballMatchesUtil = ({ matches }) => {
    return (
            <List>
                {
                    matches.map(match => (
                        <ListItem disablePadding key={match.id}>
                            <ListItemButton component="a" href={`/football-match-details/${match.id}`}>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography sx={centerText} >{match.date} &#8226; match# {match.number}  &#8226; {match.tournamentName}
                                            </Typography>
                                            <FootballTeamScore match={match}/>


                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
    )
}
export default FootballMatchesUtil