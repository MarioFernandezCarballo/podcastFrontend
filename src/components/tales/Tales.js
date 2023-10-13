//Material
import { Box } from '@mui/material';
//Components
import SectionTitle from '../SectionTitle';
import TaleList from './TaleList';

const StyleSection = {
    width: 1,
    height: '95vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (max-width: 750px)': {
        height: 'auto',
    },

};
const StyleContent = {
    width: 1,
    height: '70%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};
const StyleList = {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '10%',
    rowGap: '5%',
    justifyContent: 'space-between',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
        display: 'none'
    },
    scrollbarWidth: 'none',
    textAlign: 'left',
    '@media screen and (max-width: 1800px)': {
      width: '40%',
    },
    '@media screen and (max-width: 1300px)': {
      width: '60%',
    },
    '@media screen and (max-width: 750px)': {
      width: '80%',
      justifyContent: 'center'
    },
}

function Tales() {
    return (
        <Box id='relatos'sx={StyleSection}>
            <SectionTitle section={'Relatos'}/>
            <Box sx={StyleContent}>
                <Box sx={StyleList}>
                    <TaleList />
                </Box>
            </Box>
        </Box>
    );
  }
  
  export default Tales;