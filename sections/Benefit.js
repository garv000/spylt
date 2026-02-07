"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Benefit = () => {
  useGSAP(() => {
    const textSplit1 = SplitText.create(".benefit-text1", {
      type: "chars, lines",
      mask: "lines",
    });
    const textSplit2 = SplitText.create(".benefit-text6", {
      type: "chars, lines",
      mask: "lines",
    });
    gsap.from(textSplit1.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".benefit-text1",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(textSplit2.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".benefit-text6",
        start: "top center",
        toggleActions: "play none none reset",
      },
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-text",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    t1.to(".benefit-text2", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inout",
    })
      .to(".benefit-text3", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inout",
      })
      .to(".benefit-text4", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inout",
      })
      .to(".benefit-text5", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inout",
      });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-pin",
        start: "top top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });
    t2.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section id="benefit" className="w-screen min-h-screen bg-main-bg pt-30">
      <div className="benefit-text flex flex-col items-center">
        <div className="benefit-text1 text-sm text-milk-yellow z-10 text-center mt-12">
          <p>Unlock the Advantages: </p>
          <p>Explore the Key Benefits of Choosing SPYLT</p>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="benefit-text2 z-10 border-6 border-main-bg rotate-3 mt-10"
        >
          <div className="bg-[#c88e64] pb-5 pt-2 px-10">
            <h2 className="text-milk-yellow text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
              Shelf Stable
            </h2>
          </div>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="benefit-text3 z-0 border-6 border-main-bg -rotate-1 -mt-4"
        >
          <div className="bg-milk pb-5 pt-2 px-10">
            <h2 className="text-[#2E2D2F] text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
              Protein + Caffeine
            </h2>
          </div>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="benefit-text4 z-10 border-6 border-main-bg rotate-3 -mt-4"
        >
          <div className="bg-red-brown pb-5 pt-2 px-12">
            <h2 className="text-milk text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
              Infinitely Recyclable
            </h2>
          </div>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="benefit-text5 z-0 border-6 border-main-bg -rotate-3"
        >
          <div className="bg-[#fed775] pb-5 pt-2 px-12">
            <h2 className="text-[#2E2D2F] text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold uppercase">
              Lactose Free
            </h2>
          </div>
        </div>
        <div className="benefit-text6 text-milk text-sm mt-10 font-paragraph">
          And much more...
        </div>
      </div>

      <div className="relative -mt-40 video-pin z-40 h-screen">
        <div
          style={{
            clipPath: "circle(6% at 50% 50%)",
          }}
          className="size-full video-box"
        >
          <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay className="h-full w-full object-cover" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/circle-text.svg"
              alt="Circle Text"
              width={40}
              height={40}
              className="spin-circle md:size-[16vw] size-[30vw]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full size-[9vw]">
              <Image
                src="/images/play.svg"
                alt="Play"
                width={40}
                height={40}
                className="size-[3vw] pl-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
