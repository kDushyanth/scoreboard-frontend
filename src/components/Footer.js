import { Typography } from '@mui/material'
const Footer = () => {
    return (
        <footer style={{ position: "absolute", left: 0,right:0,bottom:0, width:'100%', textAlign: 'center', backgroundColor: 'black', paddingTop: 30, paddingBottom: 30, marginTop: 40 }}>
            <Typography color="white">Designed by: Dushyanth</Typography>
            <Typography color="white" display="inline">mail: </Typography><Typography href="mailto:kd13@iitbbs.ac.in" component="a">kd13@iitbbs.ac.in</Typography>
        </footer>
    )
}
export default Footer