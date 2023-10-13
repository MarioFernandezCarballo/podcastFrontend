import { Box } from '@mui/material';
import FooterLinksDark from './FooterLinksDark';
import FooterLinksLight from './FooterLinksLight';

const StyleFrame = {
    width: 1,
    height: '10vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function Footer({isDark}) {
    return (
        <Box sx={StyleFrame}>
            {isDark ? (
                <FooterLinksDark/>
            ) : (
                <FooterLinksLight/>
            )}
        </Box>
        
    );
  }
  
  export default Footer;