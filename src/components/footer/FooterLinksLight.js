import { Box, Avatar } from '@mui/material';
//Icons
import instaLight from '../../static/icons/light/instagram.svg';
import ivooxLight from '../../static/icons/light/ivoox.svg';
import spotifyLight from '../../static/icons/light/spotify.svg';
import twitterLight from '../../static/icons/light/twitter.svg';

const FrameStyle = {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '@media screen and (max-width: 1800px)': {
      width: '40%',
    },
    '@media screen and (max-width: 1300px)': {
      width: '60%',
    },
    '@media screen and (max-width: 600px)': {
      width: '80%',
    },
}
const StyleAvatar = {
    borderRadius: '0%',
    cursor: 'pointer'
}


function FooterLinksDark() {
    const goToInstagram = () => {
        window.open('https://instagram.com/historiasyvoces')
    }
    const goToIvoox = () => {
        window.open('https://go.ivoox.com/sq/2107328')
    }
    const goToSpotify = () => {
        window.open('https://spotify.link/4G4v1w1pRDb')
    }
    const goToTwitter = () => {
        window.open('https://twitter.com/historiasyvoces')
    }
    return (
        <Box sx={FrameStyle}>
            <Avatar alt='insta' onClick={goToInstagram} src={instaLight} sx={StyleAvatar}/>  
            <Avatar alt='ivoox' onClick={goToIvoox} src={ivooxLight} sx={StyleAvatar}/>  
            <Avatar alt='spoty' onClick={goToSpotify} src={spotifyLight} sx={StyleAvatar}/>  
            <Avatar alt='twitter' onClick={goToTwitter} src={twitterLight} sx={StyleAvatar}/>  
        </Box>
    );
  }
  
  export default FooterLinksDark;