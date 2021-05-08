import React, { useState, useEffect } from 'react';
import PricingTheme from "./components/PricingTheme";
import Navbar from "./components/Navbar";
import VisibilitySensor from 'react-visibility-sensor';
import Grow from '@material-ui/core/Grow';

import "./App.css";


function App() {

  const [isVisible, setVisibleState] = useState(true);

  function handleVisibility() {
    setVisibleState(function (prev) {
      return !prev;
    });
    console.log(isVisible);
  }

  return (
    <>
    <Navbar />
    <div className="scroll-container">
  <section>
    <h2>Websites are like business cards on the web, make sure it's a good one</h2>
  </section>
  <VisibilitySensor onChange={handleVisibility} >
      <section>
        <Grow in={isVisible} style={{ transformOrigin: '0 0 0' }}
          {...(isVisible ? { timeout: 700 } : {})} >
          <h2>Section 2</h2>
        </Grow>
      </section>
  </VisibilitySensor>
  <section>
    <h2>Section 3</h2>
  </section>
  <section>
    <h2>Section 4</h2>
  </section>
</div>

    </>

  );
}
export default App;
