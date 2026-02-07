"use client";
import Image from "next/image";
import React from "react";
import { nutrientLists } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Nutrition = () => {
  useGSAP(() => {
    const textSplit = SplitText.create(".nutrition-text1", {
      type: "chars, lines",
      mask: "lines",
    });
    const titleT1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#nutrition",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reset",
      },
    });
    titleT1
      .from(textSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      })
      .to(".nutrition-text2", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inout",
      });
  });

  return (
    <section
      id="nutrition"
      className="w-screen min-h-screen h-screen relative bg-[radial-gradient(circle,#f3ece2,#dcccb0)]"
    >
      <Image
        src="/images/slider-dip.png"
        alt="Nutrition Background"
        width={1000}
        height={1000}
        className="w-full"
      />
      <Image
        src="/images/big-img.png"
        alt="Nutrition Background"
        width={1000}
        height={1000}
        className="absolute bottom-0 md:-bottom-30 w-full -mt-20"
      />

      <div className="w-full flex flex-col items-center">
        <div className="absolute bottom-0 w-full h-full flex md:flex-row flex-col items-center justify-center md:justify-between px-6">
          <div className="z-10 mt-20">
            <h2 className="nutrition-text1 text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
              It still does
            </h2>
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="nutrition-text2 z-20 border-6 border-[#e2d4bc] -rotate-3 -mt-2"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
                  Body Good
                </h2>
              </div>
            </div>
          </div>
          <div className="md:max-w-xs max-w-md z-10">
            <p className="text-sm text-center md:text-right text-balance font-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk contains a
              wide array of nutrients, including vitamins, minerals, and
              protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="z-10 absolute bottom-0 md:-bottom-20 border-6 flex bg-[#fdebd2] rounded-full px-8 md:px-18 py-4 border-[#e8ddca] text-[#865720] justify-around">
            {nutrientLists.map((nutrient, index) => (
              <div key={index} className="flex">
                <div>
                  <p className="font-paragraph md:text-base text-xs">
                    {nutrient.label}
                  </p>
                  <p className="font-paragraph text-xs mt-2">up to</p>
                  <p className="text-xl sm:text-2xl md:text-3xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== nutrientLists.length - 1 && (
                  <div className="spacer-border md:h-20 h-16 w-0.5 bg-[#C89C6E] mx-4 sm:mx-6 md:mx-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
