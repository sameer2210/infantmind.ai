import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const totalImages = 4;
  const nextImgRef = useRef(null);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages - 1) {
      setLoading(false);
    }
  }, [loadedImages]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalImages) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getImageSrc = (index) => `img/hero-${index}.png`;

  return (
    <section className="relative h-dvh w-full overflow-x-hidden" aria-label="Hero Section">
      {/* Visually Hidden H1 for SEO single H1 hierarchy requirement */}
      <h1 className="sr-only">InfantMind AI — AI-Powered Baby Understanding Platform</h1>

      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-full overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-full overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <img
                  ref={nextImgRef}
                  src={getImageSrc((currentIndex % totalImages) + 1)}
                  id="current-video"
                  alt="InfantMind AI Baby Cry Analysis Preview"
                  decoding="async"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoad={handleImageLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <img
            ref={nextImgRef}
            src={getImageSrc(currentIndex)}
            id="next-video"
            alt="InfantMind AI Baby Health Monitoring"
            decoding="async"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoad={handleImageLoad}
          />
          <img
            src={getImageSrc(
              currentIndex === totalImages - 1 ? 1 : currentIndex
            )}
            alt="InfantMind AI Multimodal Baby Platform Background"
            decoding="async"
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoad={handleImageLoad}
          />
        </div>

        <div className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#dfdff2]">
          I<b>N</b>FANT
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <div className="special-font hero-heading text-[#dfdff2]">
              de c<b>o</b>de
            </div>

            <p className="mb-5 max-w-64 font-robert-regular text-[#dfdff2]">
              Understand Every Cry <br /> AI-Powered Baby Insights
            </p>

            <Button
              id="watch-trailer"
              title="See how it works"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <div className="special-font hero-heading absolute bottom-5 right-5 text-black">
        I<b>N</b>FANT
      </div>
    </section>
  );
};

export default Hero;