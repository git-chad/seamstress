"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReadMoreBtn from "../components/read-more-btn";

const FirstSection = () => {
  const slidesRef = useRef(null);

  useEffect(() => {
    const slides = slidesRef.current;

    let current = 0;
    let z = 9999;

    const images = slides.querySelectorAll("img");

    images.forEach((image) => {
      z = z - 1;
      image.style.zIndex = z;
    });

    const timeline = gsap.timeline();
    timeline
      .set(images, {
        x: () => {
          return 500 * Math.random() - 250;
        },
        y: "500%",
        rotation: () => {
          return 48 * Math.random() - 24;
        },
      })
      .to(images, { x: 0, y: 0, stagger: -0.25 })
      .to(images, {
        rotation: () => {
          return 16 * Math.random() - 8;
        },
      });

    const handleClick = () => {
      const currentImage = images[current];
      z = z - 1;

      let direction = "150%";
      let midAngle = 15;

      if (Math.random() > 0.5) {
        direction = "-150%";
        midAngle = -15;
      }

      const flipTimeline = gsap.timeline();

      flipTimeline
        .set(currentImage, { x: 0 })
        .to(currentImage, { x: direction, rotation: midAngle })
        .set(currentImage, { zIndex: z })
        .to(currentImage, {
          x: 0,
          rotation: () => {
            return 16 * Math.random() - 8;
          },
        });

      current += 1;
      if (current >= images.length) {
        current = 0;
      }
    };

    slides.addEventListener("click", handleClick);

    return () => {
      slides.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="flex flex-col-reverse sm:grid grid-flow-dense sm:grid-cols-2 w-screen h-screen">
      <div
        transition={{ duration: 0.5 }}
        className="half-one flex flex-col w-full items-center justify-center dark:bg-black bg-[#f583bc67] px-4 sm:px-0"
      >
        <div className="w-2/3 py-8 md:py-0">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Menswear to swear by
          </h2>
          <p className="text-xl sm:text-2xl my-8">
            Is it too much to hope that we finally could have a tipping point in
            sustainable thinking and climate change? We asked fashion designer,{" "}
            <span className="text-orange-500">Ronen Hill</span>, if this
            summer&apos;s collection will be the most eco-friendly ever.
          </p>
        </div>
        <ReadMoreBtn />
      </div>

      <div className="half-one flex items-center justify-center dark:bg-[#111111] bg-[#ebe2de] h-full w-full overflow-hidden">
        <div
          ref={slidesRef}
          id="slides"
          className="relative px-4 sm:px-12 w-[250px] sm:w-[500px] h-[375px] sm:h-[750px]  cursor-pointer"
        >
          <Image
            width={800}
            height={1200}
            src="/images/sweaters-1.jpg"
            alt="sweater 01"
            className="absolute top-0 left-0 z-50"
          />
          <Image
            width={800}
            height={1200}
            src="/images/sweaters-2.jpg"
            alt="sweater 02"
            className="absolute top-0 left-0"
          />
          <Image
            width={800}
            height={1200}
            src="/images/sweaters-3.jpg"
            alt="sweater 03"
            className="absolute top-0 left-0"
          />
          <Image
            width={800}
            height={1200}
            src="/images/sweaters-4.jpg"
            alt="sweater 04"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
