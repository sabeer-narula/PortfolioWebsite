import { motion } from "framer-motion";
import { IconMouse } from "@tabler/icons-react";
import AvatarSitting from "./AvatarSitting";
import Socials from "../../components/Socials";
import { slideDown } from "../../utils/motionVariants";
import { isSafari } from "../../utils/browserdetection";

type LandingProp = {
  isMobile: boolean;
};

function Landing({ isMobile }: LandingProp) {
  const modelContainerClass = isSafari() ? "w-[45vw] h-[45vh]" : "w-[60vw] h-[60vh]";
  const isLoading =
    sessionStorage.getItem("displayLoader") === "true" ||
    sessionStorage.getItem("displayLoader") === null;

  return (
    <section className="relative w-full h-screen overflow-hidden mb-1">
      <div className="absolute inset-0 top-[120px] items-start">
        <div className="flex flex-col justify-center items-center h-[80vh] gap-9">
          {isMobile ? (
            <>
              <motion.h2
                variants={isLoading ? slideDown(1.2) : slideDown(0.2)}
                initial="hidden"
                animate="show"
                className="font-bold text-center"
              >
                Hi, I'm
                <span className="text-royal-blue-100"> Sabeer!</span>
              </motion.h2>
              <motion.h5
                variants={isLoading ? slideDown(1.3) : slideDown(0.3)}
                initial="hidden"
                animate="show"
              >
                I'm a Software Engineer.
              </motion.h5>
            </>
          ) : (
            <>
              <motion.h1
                variants={isLoading ? slideDown(1.2) : slideDown(0.2)}
                initial="hidden"
                animate="show"
                className="font-bold text-center"
              >
                Hi, I'm
                <span className="text-royal-blue-100"> Sabeer!</span>
              </motion.h1>
              <motion.h4
                variants={isLoading ? slideDown(1.3) : slideDown(0.3)}
                initial="hidden"
                animate="show"
              >
                I'm a Software Engineer looking for full time opportunities.
              </motion.h4>
            </>
          )}

          <div className={modelContainerClass + " flex justify-center"}>
            <AvatarSitting />
          </div>
          <Socials />
          <a href="#experiences">
            <IconMouse className="animate-bounce h-12 w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
