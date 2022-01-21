import { Card } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
const Introduction = () => {

    return (
        <Card sx={{ height: "15em", backgroundColor: "black", color: "white",display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Box
            sx={{fontSize:"1.5rem"}}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome! explore the gaming world")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Games IIT Bhubaneswar")
                        .start();
                }}
            /> 
            </Box>
        </Card>
    )
}
export default Introduction