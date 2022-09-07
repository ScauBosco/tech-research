import './App.css';
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';
import { useState } from 'react/cjs/react.production.min';




function App() {
  const sb = useRef()
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    gsap.from(sb.current, { duration: 10, scale: 2.1 });
  }, [])

  return (
    <div className="app">
      <div style={{ height: "100vh" }}>123</div>
      <div ref={sb}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
          alt=""
        />
      </div>
      <div style={{ height: "100vh" }}>456</div>
    </div>
  );
}

export default App;
