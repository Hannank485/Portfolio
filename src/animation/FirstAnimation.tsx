import { AnimatePresence, easeInOut, easeOut, motion } from "motion/react";
import { useState } from "react";
function FirstAnimation({ setFinish }: { setFinish: () => void | null }) {
  const numberCols = 10;
  const name = "Hannan Khan";
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 2 }}
          className="fixed inset-0 z-40 h-full overflow-hidden"
          onAnimationComplete={() => {
            setShowAnimation(false);
            setFinish();
          }}
        >
          <div className="flex w-full h-full overflow-hidden  ">
            {[...Array(numberCols)].map((_, i) => {
              return (
                <motion.div
                  className="flex-1 -mr-px "
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, "100%"],
                  }}
                  key={i}
                  transition={{
                    duration: 1.8,
                    ease: easeInOut,
                    times: [0.5, 1],
                    delay: 0.025 * i,
                  }}
                >
                  <div className="bg-black h-dvh "></div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-white text-4xl leading-22 md:text-8xl lg:text-9xl  z-50 absolute top-1/2 left-1/2 overflow-hidden md:leading-28  -translate-x-1/2 -translate-y-1/2  flex">
            {name.split("").map((char, i) => {
              return (
                <motion.div
                  initial={{ y: "120%", opacity: 0, scaleY: 1.5 }}
                  animate={{ y: "0%", opacity: 1, scaleY: 1 }}
                  transition={{
                    y: {
                      type: "spring",
                      stiffness: 240,
                      damping: 28,
                      delay: 0.05 * i,
                    },
                    scaleY: {
                      duration: 0.3,
                      ease: easeOut,
                    },
                    opacity: {
                      duration: 0.2,
                      ease: "linear",
                    },
                  }}
                  key={i}
                >
                  <motion.h1
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 10, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: easeOut,
                      delay: 1.2,
                    }}
                    className="font-[Unbounded]! font-medium leading-none"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.h1>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FirstAnimation;
