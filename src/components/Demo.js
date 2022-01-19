import { ListItem,ListItemButton,ListItemText,List,Box ,Typography,Grid,Divider, Container} from "@mui/material"
const Demo = () => {
    return (
        
        <Grid container maxWidth={600} border={1}>
            <Grid item xs={12} display="flex" justifyContent="center">
               <Typography variant="span">{"hell"}</Typography>
            </Grid>
            <Divider style={{width:'100%'}}/>
            <Grid item xs={12} display="flex" justifyContent="center">
                <Typography variant='span'>{"hell"} &#8226; {"hell"} VS {"hell"} &#8226; match #{"hell"}</Typography>
            </Grid>
            <Divider style={{width:'100%'}}/>
            <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
                    <Typography variant ="span">{"hell"}</Typography>
                    <Typography variant ="span">{"hell"}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" >
                    <Typography variant ="h5">{"hell"}</Typography>
                    <Typography variant ="h5">{"hell"}</Typography> 
            </Grid>
        </Grid>
        
    )
}
export default Demo