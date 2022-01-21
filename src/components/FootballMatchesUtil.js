import {Box,List,ListItem,ListItemButton,ListItemText,Typography} from '@mui/material'
import React from 'react'
const FootballMatchesUtil = ({matches})=>{
    return (
        <Box
            sx={{
                width : 600,
                border : 1
            }}>
            <List>
                {
                    matches.map(match => (
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
    )
}
export default FootballMatchesUtil