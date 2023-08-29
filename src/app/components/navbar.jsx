"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { gsap } from "gsap";

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      const carousels = document.querySelectorAll("nav h1, nav h2, nav div");
      const fadeInTimeline = gsap.timeline();

      fadeInTimeline
        .set(carousels, { opacity: 0 })
        .to(carousels, { opacity: 1, delay: 1, stagger: 0.5 });

      carousels.forEach((carousel) => {
        const spanTag = carousel.querySelector("span");
        const spanWidth = spanTag.clientWidth;

        for (let i = 0; i < 30; i = i + 1) {
          carousel.appendChild(spanTag.cloneNode(true));
        }

        const movementTimeline = gsap.timeline({
          repeat: -1,
        });

        movementTimeline
          .set(carousel, { x: 0 })
          .to(carousel, { x: spanWidth * -1, duration: 6, ease: "linear" });
      });
    }
  }, [loading]);

  if (loading) {
    return <div></div>;
  }

  return (
    <nav className="fixed top-8 left-0 z-[10000] w-screen overflow-hidden">
      <h1 className="flex">
        <span className="inline-block w-[150px] flex-shrink-0 font-bold text-lg">
          Seamstress
        </span>
      </h1>
      <h2 className="flex">
        <span className="inline-block w-[250px] flex-shrink-0">
          Lookbook Spring / Summer
        </span>
      </h2>
      <ThemeToggle/>
    </nav>
  );
};

export default Navbar;

