import React from "react";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import '../stylesheets/Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Testimonials />
    </>
  );
}
