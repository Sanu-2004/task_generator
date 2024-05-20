import gsap from 'gsap'
import React, {useRef, useEffect} from 'react'
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Navbar() {
  
  let navel = useRef()
  useGSAP(() => {
    gsap.from(navel, {
      duration: 5,
    });
  
  });
  return (
    <div>
      <nav>
        <h1 rel={navel}>
        <span>Be</span>
        <span>Productive</span>
        </h1>
      </nav>
    </div>
  )
}
