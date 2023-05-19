import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2800);
  }, []);

  const loadedStatus = isLoaded ? 'loadedPage' : 'notLoadedPage';
  const loaderShown = isLoaded ? 'hideLoader' : 'showLoader';

  return (
    <BrowserRouter>
      <div className={loaderShown}>
        <figure className="fixed">
          <div className="dot white"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </figure>
      </div>

      <div className={`relative z-0 bg-primary ${loadedStatus}`}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
