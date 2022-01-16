import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {fetchMatchDetails} from '../redux'
import { Typography } from '@mui/material'
import { connect } from 'react-redux'

const FootballMatchDetails = ({matchDetails,fetchMatchDetails})=>{
    const {id} = useParams();
    const url = `/api/football-match-details/${id}`

    useEffect(()=>{
        fetchMatchDetails(url)
    },[])

    console.log("match details",matchDetails)
    return (
        <Typography> Dushyanth </Typography>
    )
}
const mapStateToProps = (state)=>{
    return {
        matchDetails : state.footballMatchDetails
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMatchDetails : (url)=> dispatch(fetchMatchDetails(url))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FootballMatchDetails)
