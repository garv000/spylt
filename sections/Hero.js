"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  useGSAP(() => {
    const heroT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroT1.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    const titleSplit = SplitText.create(".hero-title1", {
      type: "chars, lines",
      mask: "lines",
    });
    const t1 = gsap.timeline({
      delay: 1,
    });
    t1.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-title2",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inout",
        },
        "-=0",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );
  });

  return (
    <section id="hero" className="bg-main-bg">
      <div className="w-screen h-dvh hero-container relative flex items-center justify-center overflow-hidden px-4">
        <video
          className="w-full h-full object-cover inset-0 absolute z-0"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          playsInline
        />
        <div className="hero-content opacity-0 z-10 flex flex-col items-center justify-center">
          <h1 className="hero-title1 text-5xl sm:text-7xl md:text-8xl tracking-tighter font-extrabold uppercase">
            Freaking Delicious
          </h1>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-title2 border-6 border-milk -rotate-3 mb-8"
          >
            <div className="bg-mid-brown">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter px-2 sm:px-4 pt-2 pb-4 uppercase text-[#fce1cd]">
                Protein + Caffeine
              </h1>
            </div>
          </div>
          <h2 className="text-sm text-center px-4 mb-4 font-paragraph max-w-md">
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <button className="mt-8 bg-light-brown rounded-full text-sm px-8 py-3 font-bold hover:bg-mid-brown hover:text-[#fce1cd] duration-500 transition uppercase">
            Chug a SPYLT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
