import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Containers/Banner';
import homeLogo from "../public/home-main.svg";

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { AppBar } from '@mui/material';

const Home = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(https://tse2.mm.bing.net/th?id=OIP.BBxsTGs9EnY3vdzjXkx5nQHaFP&pid=Api&P=0&h=180)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: This will make the background fixed while scrolling
    height: '100vh',
    overflow: 'auto',
     // Adjust the height as needed
  };
              
    return (
      <>
       <div style={backgroundImageStyle}>
            <Navbar />
          
        <div id="back-to-top-anchor" />
        <Banner/>
        
        
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
          </div>
       
      </>
    );
  };
  
  export default Home;