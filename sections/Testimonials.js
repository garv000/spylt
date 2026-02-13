"use client";
import React, { useRef } from "react";
import { cards } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Testimonials = () => {
  const vdRef = useRef([]);
  useGSAP(() => {
    gsap.set("#testimonials", {
      marginTop: "-100vh",
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });
    t1.to(".first-title", {
      xPercent: 70,
    })
      .to(
        ".second-title",
        {
          xPercent: 25,
        },
        "<",
      )
      .to(
        ".third-title",
        {
          xPercent: -70,
        },
        "<",
      );

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "20% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });
    t2.from(".vd-card", {
      yPercent: 200,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });
  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section
      id="testimonials"
      className="z-50 w-screen h-[140dvh] relative bg-milk"
    >
      <div className="w-full h-full flex flex-col items-center absolute pt-[5vw]">
        <p className="first-title text-black text-[20vw] leading-[105%] tracking-tighter font-bold uppercase">
          What`s
        </p>
        <p className="second-title text-light-brown text-[20vw] leading-[105%] tracking-tighter font-bold uppercase">
          Everyone
        </p>
        <p className="third-title text-black text-[20vw] leading-[105%] tracking-tighter font-bold uppercase">
          Talking
        </p>
      </div>

      <div className="testimonial-pin flex items-center justify-center md:pt-[20vw] pt-[100vw] pl-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card w-60 rounded-lg border-6 border-milk -ml-20 ${card.rotation}`}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              autoPlay
              playsInline
              muted
              loop
              className="size-full object-cover"
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
