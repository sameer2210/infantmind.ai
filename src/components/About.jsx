import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="min-h-screen w-full overflow-hidden" aria-label="About Section">
      <div className="relative mb-8 mt-24 sm:mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to InfantMind.ai
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver what your <br /> baby is trying t<b>o</b> say"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Parenting, decoded—understand your child's needs with AI.</p>
          <p className="text-gray-500">
            InfantMind analyzes cries, sleep patterns, and developmental milestones to give you actionable insights and peace of mind.
          </p>
        </div>
      </div>

      <div className="h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about-baby.png"
            alt="InfantMind AI Baby Understanding & Sleep Analysis"
            loading="lazy"
            decoding="async"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;