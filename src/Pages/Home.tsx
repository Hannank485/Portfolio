import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Codebox from "../Components/Codebox";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonAnim } from "../animation/Animation";
function Home() {
  const MotionLink = motion.create(Link);
  const greetings = [
    "Hi",
    "Hola",
    "Bonjour",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "Ciao",
    "नमस्ते",
  ];
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, 3500);
    return () => clearInterval(Interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-full mx-auto w-full md:flex-row justify-between gap-3 py-10 px-5 md:py-13 md:px-20 overflow-hidden"
    >
      <motion.div
        className="basis-1/2 py-2 flex flex-col items-start gap-5 "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          ease: easeOut,
        }}
      >
        {/* Available Card */}
        <p className="border-2 k text-xs md:text-sm   border-accent/20 text-violet-800 w-fit px-4 py-2 rounded-full bg-soft/80 md:flex gap-2 items-center md:mb-1 ">
          <motion.span
            className="text-sm md:text-lg "
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 1, ease: easeInOut, repeat: Infinity }}
          >
            👋🏻
          </motion.span>{" "}
          Available for Opportunities
        </p>
        <p className="text-4xl md:text-6xl leading-tight ">
          {/* hello animation And Text*/}
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:text-3xl text-xl mb-1 font-medium text-secondary block"
            >
              {greetings[index] + ","}
            </motion.span>
          </AnimatePresence>{" "}
          <span>I build </span>
          <span className=" relative text-accent">
            Interactive
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 3,
                times: [0, 0.4, 0.7, 1],
                ease: [easeIn, "linear", easeOut],
                delay: 2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute left-0 bottom-0 h-1 w-full bg-linear-to-r from-indigo-400 to-pink-400"
              style={{ transformOrigin: "left" }}
            />
          </span>{" "}
          Web Apps.
        </p>
        {/* extra text */}
        <p className="text-sm md:text-xl text-secondary">
          <strong>React Developer</strong> passionate about crafting clean,
          responsive interfaces that users love. I turn designs into functional
          experiences.
        </p>
        <div className="flex gap-4">
          <MotionLink
            variants={ButtonAnim}
            whileHover="whileHover"
            whileTap="whileTap"
            className=" bg-accent hover:bg-hover transition-colors duration-200 cursor-pointer text-white px-8 whitespace-nowrap md:px-8 rounded-2xl py-4  flex items-center gap-2 font-bold mt-2 w-full md:w-fit md:text-base text-sm justify-center "
            to="/project"
          >
            View Work <FaArrowRight />
          </MotionLink>
          <MotionLink
            variants={ButtonAnim}
            whileHover="whileHover"
            whileTap="whileTap"
            className=" bg-white text-primary hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer border-2 px-5 md:px-8 rounded-2xl py-4 font-bold  flex items-center md:text-base text-sm gap-2 mt-2 w-full md:w-fit justify-center  "
            to="/contact"
          >
            Get In Touch
          </MotionLink>
        </div>
      </motion.div>

      <motion.div
        className="basis-1/2 w-full py-4 md:block border-accent/20 border-2 shadow-xl bg-soft/80 rounded-3xl h-auto p-5 mt-10 md:mt-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          ease: easeOut,
        }}
      >
        <Codebox />
      </motion.div>
    </motion.div>
  );
}

export default Home;
