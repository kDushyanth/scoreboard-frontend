import React from "react"
import { Typography, Box, Chip } from "@mui/material"

const FootballPlayerScores = ({ scores }) => {
    return (
        scores.map((score, i) => {
            return (
                <Box key={i}>
                    <Typography variant="span">
                        {score.name} [
                    </Typography>
                    {
                        score.goals.map((goal, i) => {
                            return (
                                <Typography variant="span" key={i}>
                                    {goal} {i!=score.goals.length-1 ? " , ": ""}
                                </Typography>
                            )
                        })
                    }
                    ]
                    <br />
                </Box>
            )
        })
    )
}
export default FootballPlayerScores