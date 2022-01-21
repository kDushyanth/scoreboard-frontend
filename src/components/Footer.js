import { Box, Grid, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { footer } from '../styles';

const Footer = () => {
    return (
        <footer style={footer}>
            <Typography color="white">Designed by: Dushyanth</Typography>
            <Box sx={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid container>
                    <Grid xs={4}>
                        <MailIcon color='primary' onClick={event => window.open('mailto:kd13@iitbbs.ac.in', '_blank')} />
                    </Grid>
                    <Grid xs={4}>
                        <GitHubIcon color='primary' onClick={event => window.open('https://github.com/kDushyanth', '_blank')} />
                    </Grid>
                    <Grid xs={4}>
                        <LinkedInIcon color='primary' onClick={event => window.open('https://www.linkedin.com/in/kurra-dushyanth/', '_blank')} />
                    </Grid>
                </Grid>
            </Box>

        </footer>
    )
}
export default Footer