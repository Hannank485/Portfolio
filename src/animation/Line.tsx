import { motion } from "motion/react";

function Line({ percentage, delay }: { percentage: string; delay: number }) {
  return (
    // <motion.span
    //   variants={{
    //     hidden: { width: 0 },
    //     visible: { width: percentage },
    //   }}
    //   transition={{ duration: 0.8, delay, ease: "easeOut" }}
    //   className={` h-full bg-accent rounded-tr-md rounded-br-md`}
    // ></motion.span>
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-accent rounded-full"
        variants={{
          hidden: { width: "0%" },
          visible: { width: percentage },
        }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default Line;
