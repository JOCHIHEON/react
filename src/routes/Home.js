import React from 'react'; 
import FixedNavbar from './Nav.js';
import Body from './Body.js';
import Footerpage from './Footer.js';

const Home = () => {
  return (
    <div>
      <FixedNavbar/>
      <Body/>
      <Footerpage/>
    </div>
  );
};

export default Home;