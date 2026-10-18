'use client';
import { useEffect } from "react";
import About from "@/app/components/About"
import Expe  from "@/app/components/Expe"
import Education from "./components/Education";
import ST from "./components/ST";
import Footer from "./components/Footer";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <About />
      <Expe />
      <Education />
      <ST />
      <Footer />
    </div>
  );
}
