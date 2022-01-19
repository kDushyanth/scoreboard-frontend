import React from "react"
import { Typography,Box } from "@mui/material"

const FootballPlayerScores = ({scores})=>{
    return (
        scores.map((score,i) =>{
            return (
                <Box key={i}>
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
                </Box>
            )
        })
    )
}
export default FootballPlayerScores