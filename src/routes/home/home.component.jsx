import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {

    //So instead of hardcoding out these 4 other div sections, we're going to initialize some variable array. And this is going to be an array that contains objects that reflect what it is that we have in here.
    //array of json objects
  
    return ( 
      <div>
        <Directory />
      </div>
    )
};

export default Home;