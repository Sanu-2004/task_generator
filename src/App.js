import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Output from './components/Output';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="App">
      <div id="background">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlpM3JuNzVjbzJxZjk1emx3cnp6M3FvcmhnY3c4cjhvZ2U1cDl2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BHNfhgU63qrks/giphy.gif" alt="" />
      </div>
      <div id="main">
      <Navbar />
      <hr />
      <Hero />
      <hr />
      <Output />
      </div>
    </div>
  );
}

export default App;
