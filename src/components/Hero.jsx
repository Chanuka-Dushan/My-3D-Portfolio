import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Intro Text and Dot Line */}
      <div className="absolute inset-0 top-[100px] max-w-7xl mx-auto px-4 sm:px-8 flex flex-row items-start gap-5">
        {/* Violet Dot and Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Headline and Subtext */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dushan Chanuka</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in full-stack development<br className="sm:block hidden" />
            and creating mobile applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="relative w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
