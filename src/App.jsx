import React from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      {/* Background gradient */}
      <div className='main'>
        <div className='gradient' />
      </div>

      {/* Main content */}
      <div className='app'>
        {/* Hero section */}
        <Hero />

        {/* Demo section */}
        <Demo />
      </div>
    </main>
  );
};

export default App;
