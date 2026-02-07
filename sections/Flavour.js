"use client";
import React, { useRef } from "react";
import { flavorlists } from "@/constants";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Flavour = () => {
  const sliderRef = useRef();
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const extraWidth =
      window.innerWidth - sliderRef.current.lastElementChild.offsetWidth;
    const totalWidth = window.innerWidth - extraWidth;
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#flavour",
        start: "2% top",
        end: `+=${scrollAmount + totalWidth + 20}px`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    t1.to(".text-scroll", {
      x: `-${scrollAmount}px`,
      ease: "power1.inOut",
    });
    t1.to(
      ".flavour-scroll",
      {
        x: `-${scrollAmount + totalWidth + 20}px`,
        ease: "power1.inOut",
      },
      "<",
    );

    const titleSplit1 = SplitText.create(".flavor-title1", {
      type: "chars, lines",
      mask: "lines",
    });
    const titleSplit2 = SplitText.create(".flavor-title2", {
      type: "chars, lines",
      mask: "lines",
    });
    const titleT1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#flavour",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reset",
      },
    });
    titleT1
      .from(titleSplit1.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      })
      .to(".flavor-reveal", {
        duration: 0.7,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inout",
      })
      .from(titleSplit2.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      });
  });

  return (
    <section id="flavour" className="w-screen h-screen relative">
      <div className="flex items-center justify-between h-full">
        <div className="text-scroll flex flex-col items-center sm:px-12 px-6">
          <h2 className="flavor-title1 text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
            we have 6
          </h2>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="flavor-reveal z-10 border-6 border-milk -rotate-3 w-fit -mb-6"
          >
            <div className="bg-mid-brown">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter px-2 sm:px-4 pt-2 pb-4 uppercase text-milk">
                freaking
              </h1>
            </div>
          </div>
          <h2 className="flavor-title2 text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase text-nowrap">
            delicious flavours
          </h2>
        </div>

        <div
          ref={sliderRef}
          className="flavour-scroll flex items-center gap-32"
        >
          {flavorlists.map((flavor) => (
            <div
              key={flavor.name}
              className={`relative z-30 w-96 h-80 md:w-[80vw] md:h-[50vh] lg:w-[50vw] lg:h-[70vh] ${flavor.rotation}`}
            >
              <Image
                src={`/images/${flavor.color}-bg.svg`}
                width={1000}
                height={1000}
                alt={`${flavor.name} background`}
                className="absolute bottom-10 w-full h-auto"
              />
              <Image
                src={`/images/${flavor.color}-drink.webp`}
                width={300}
                height={300}
                alt={`${flavor.name} drink`}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 h-full w-auto"
              />
              <Image
                src={`/images/${flavor.color}-elements.webp`}
                width={500}
                height={500}
                alt={`${flavor.name} background`}
                className="absolute bottom-1/4 w-full"
              />
              <div className="absolute left-4 bottom-20 font-extrabold text-milk text-2xl md:text-4xl">
                {flavor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavour;
