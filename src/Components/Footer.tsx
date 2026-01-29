import { easeInOut, motion } from "motion/react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="border-t border-border py-4 text-center text-muted text-xs bg-white">
      <p className="">
        Digital Excellence by:{" "}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1.5,
            ease: easeInOut,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="text-accent font-semibold"
        >
          Abdul Hannan Khan,
        </motion.span>
        ©' {date}
      </p>
    </div>
  );
}

export default Footer;
