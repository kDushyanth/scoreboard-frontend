import { useEffect } from "react"
import { fetchFootballTournaments } from "../redux"
import { connect } from "react-redux"

const FootballTournaments = ({footballTournaments,fetchTournaments})=>{
    //console.log(footballTournaments)
    useEffect(()=>{
        fetchTournaments()
    },[])
    return (footballTournaments.loading? "Loading" : 
        "Dushyanth"
    )
}
const mapStateToProps = (state)=>{
    //console.log(state)
    return {
        footballTournaments : state.footballTournaments
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchTournaments : ()=> dispatch(fetchFootballTournaments)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FootballTournaments)