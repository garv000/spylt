import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen h-screen bg-main-bg relative overflow-hidden">
      <Image
        src="/images/footer-dip.png"
        alt="Footer Background"
        width={1000}
        height={1000}
        className="w-full absolute top-0"
      />
      <video
        src="/videos/splash.mp4"
        playsInline
        muted
        autoPlay
        preload="auto"
        className="absolute inset-0 size-full object-cover mix-blend-lighten"
      />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-[10vw] text-milk font-bold tracking-tighter">
          #CHUGRESPONSIBLY
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="p-3 rounded-full border border-white">
            <Image
              src="/images/yt.svg"
              alt="Footer Background"
              width={40}
              height={40}
            />
          </div>
          <div className="p-3 rounded-full border border-white">
            <Image
              src="/images/insta.svg"
              alt="Footer Background"
              width={40}
              height={40}
            />
          </div>
          <div className="p-3 rounded-full border border-white">
            <Image
              src="/images/tiktok.svg"
              alt="Footer Background"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      <div className="copyright-box text-white/40 font-paragraph text-sm absolute bottom-0 w-full flex justify-between items-center p-4 md:p-6">
        <p>Copyright © 2026 Spylt - All Rights Reserved</p>
        <div className="flex items-center gap-4 md:gap-7">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
