// import { useState } from 'react'
import {NavBar} from "@/layout/NavBar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Project} from "@/sections/Project";
import {Experience} from "@/sections/Experience";

function App() {
  return <div className="min-h-screen overflow-x-hidden">
  <NavBar />
  <main>
    <Hero />
    <About />
    <Project />
    <Experience />
  </main>
  </div>
}

export default App;
