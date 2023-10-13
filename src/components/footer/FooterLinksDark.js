import { Box, Avatar } from '@mui/material';
//Icons
import instaDark from '../../static/icons/dark/instagram.svg';
import ivooxDark from '../../static/icons/dark/ivoox.svg';
import spotifyDark from '../../static/icons/dark/spotify.svg';
import twitterDark from '../../static/icons/dark/twitter.svg';

const FrameStyle = {
    width: '30%',
    display: 'flex',
    alignItems: 'space-between',
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
            <Avatar alt='insta' onClick={goToInstagram} src={instaDark} sx={StyleAvatar}/>  
            <Avatar alt='ivoox' onClick={goToIvoox} src={ivooxDark} sx={StyleAvatar}/>  
            <Avatar alt='spoty' onClick={goToSpotify} src={spotifyDark} sx={StyleAvatar}/>  
            <Avatar alt='twitter' onClick={goToTwitter} src={twitterDark} sx={StyleAvatar}/>  
        </Box>
    );
  }
  
  export default FooterLinksDark;