import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className=" w-screen h-screen text-white bg-black">
        <Navbar />
        <Hero />
        <Analytics />
    </div>
  )
}

export default App;
