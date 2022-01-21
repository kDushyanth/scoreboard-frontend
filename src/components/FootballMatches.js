import { Typography, ListItem, ListItemText, Divider, List, Box,ListItemButton } from "@mui/material"
import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { fetchMatches } from "../redux/"
import FootballMatchesUtil from "./FootballMatchesUtil"

const FootballMatches = ({ matchesData, fetchMatches }) => {
    useEffect(() => {
        fetchMatches()
    }, [])
    console.log(matchesData)
    return (
        matchesData.loading ? "Loading" : (
            <FootballMatchesUtil matches = {matchesData.matches}/>
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