"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Message = () => {
  // useGSAP(() => {
  //   let msgSplit1 = SplitText.create(".text1", { type: "words" });
  //   let msgSplit2 = SplitText.create(".text2", { type: "words" });
  //   let msgPara = SplitText.create(".para", {
  //     type: "words, lines",
  //     mask: "lines",
  //   });
  //   let t1 = gsap.timeline();
  //   t1.to(msgSplit1.words, {
  //     color: "#faeade",
  //     ease: "power1.in",
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: "#message",
  //       start: "top center",
  //       end: "70% bottom",
  //       scrub: true,
  //     },
  //   }).to(".reveal", {
  //     duration: 1,
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     ease: "circ.inOut",
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".reveal",
  //       start: "top 60%",
  //       end: "+=200",
  //       scrub: true
  //     },
  //   }).to(msgSplit2.words, {
  //     color: "#faeade",
  //     ease: "power1.in",
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: "#message",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });
  //   gsap.from(msgPara.words, {
  //     scrollTrigger: {
  //       trigger: ".para",
  //       start: "top 80%",
  //     },
  //     yPercent: 300,
  //     rotate: 3,
  //     ease: "power1.inOut",
  //     duration: 1,
  //     stagger: 0.01,
  //   });
  // });

  useGSAP(() => {
    const msgSplit1 = SplitText.create(".message-text1", { type: "words" });
    const msgSplit2 = SplitText.create(".message-text2", { type: "words" });
    const msgPara = SplitText.create(".message-para", {
      type: "words, lines",
      mask: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#message",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.to(msgSplit1.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
    },"+=2").to(
      msgSplit2.words,
      {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
      },
      "+=2",
    );

    gsap.to(".message-reveal", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inout",
      duration: 1,
      scrollTrigger: {
        trigger: ".message-reveal",
        start: "top 70%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(msgPara.words, {
      scrollTrigger: {
        trigger: ".message-para",
        start: "top 80%",
      },
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section
      id="message"
      className="z-20 relative w-screen min-h-screen bg-red-brown py-20 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="message-text1 text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold md:max-w-2xl max-w-lg uppercase">
        Stir up your fearless past and
      </div>
      <div
        // style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className="message-reveal rotate-3 border-6 border-red-brown -mt-2 md:-mt-3 -mb-6 md:-mb-10 z-10"
      >
        <div className="text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold text-red-brown uppercase bg-light-brown pt-2 pb-4 px-2 ">
          Fuel Up
        </div>
      </div>
      <div className="message-text2 text-6xl sm:text-7xl md:text-8xl text-center tracking-tighter font-bold md:max-w-3xl max-w-xl uppercase">
        your future with every gulp of Perfect Protein
      </div>

      <div className="message-para mt-16 max-w-sm text-center text-milk font-paragraph text-sm">
        Rev up your rebel spirit and feed the adventure of life with SPYLT where you`re one chug away from epic nostalgia and fearless fun
      </div>
    </section>
  );
};

export default Message;
