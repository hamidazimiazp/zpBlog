import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import Main from './components/Main';

const App = () => {


  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(prev => !prev);
  }, []);


  return (
    <>
      {
        isLoaded ?
          <>
            <NavBar />
            <Main />
          </>
          :
          <h1>Loading...</h1>
      }
    </>
  );
}

export default App;