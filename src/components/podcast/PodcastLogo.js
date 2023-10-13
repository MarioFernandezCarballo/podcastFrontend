//Material
import { Avatar, Box } from '@mui/material';
//Static
import logo from '../../static/images/logo.png';

const Style = {
    width: '50%',
    margin: 'auto',
    opacity: 0.7,
}

function HeaderLogo() {
    return (
        <Box sx={Style}>
            <Avatar alt='logo' src={logo}
                    sx={{
                        height: '100%',
                        width: '100%',
                }}/>    
        </Box> 
    );
  }
  
  export default HeaderLogo;