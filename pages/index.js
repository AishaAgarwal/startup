import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Containers/Banner';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { AppBar } from '@mui/material';

const Home = (props) => {
    return (
      <>
       
            <Navbar />
          
        <div id="back-to-top-anchor" />
        <Banner/>
        
        
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
       
       
      </>
    );
  };
  
  export default Home;