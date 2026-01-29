import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";
function BorderTransition({
  setFinish,
  sidebar,
}: {
  setFinish: () => void;
  sidebar: () => void;
}) {
  const numberCols: number = 10;
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 1.95 }}
          onAnimationComplete={() => {
            setShowAnimation(false);
            setFinish();
          }}
          className="fixed inset-0 z-50 h-full overflow-hidden"
        >
          <div className="flex w-full h-full overflow-hidden">
            {[...Array(numberCols)].map((_, i) => {
              return (
                <motion.div
                  key={i}
                  className="flex-1 -mr-px"
                  initial={{ y: "-100%" }}
                  animate={{
                    y: ["-100%", 0, 0, "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: easeInOut,
                    times: [0, 0.25, 0.6, 1],
                    delay: 0.025 * i,
                  }}
                  onAnimationComplete={() => sidebar()}
                >
                  <div className="bg-primary h-full "></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BorderTransition;
