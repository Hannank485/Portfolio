import { easeInOut, easeOut, motion } from "motion/react";
import { ImCross } from "react-icons/im";
import { fadeInOut, parentStagger } from "../animation/Animation";
import { NavLink } from "react-router";
function Sidebar({ setOpen }: { setOpen: () => void }) {
  const li =
    "text-3xl brightness-90 text-secondary w-fit self-center  cursor-pointer transition-all";
  return (
    // SIDEBAR ANIMATIOn
    <motion.aside
      initial={{ right: "-320px", borderRadius: "100%" }}
      animate={{ right: 0, borderRadius: 0 }}
      exit={{
        right: "-320px",
        borderRadius: "100%",
        transition: { duration: 0.5, ease: easeInOut, when: "afterChildren" },
      }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="fixed top-0 right-0 z-50 q h-dvh w-64 md:w-80 p-6 bg-Bg shadow-2xl shadow-black/40 text-primary flex flex-col justify-between"
    >
      {/* THE CROSS */}
      <motion.div
        className="flex items-center justify-between border-b border-border/20 pb-4"
        exit={{ opacity: 0 }}
      >
        <motion.p
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
          exit={{ opacity: 0, x: 4 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="text-3xl md:text-4xl font-bold  font-[Plus Jakarta Sans ]!"
        >
          Menu
        </motion.p>
        <button
          onClick={setOpen}
          className="text-md md:text-xl cursor-pointer mr-4 md:mr-14"
        >
          <ImCross />
        </button>
      </motion.div>

      <div className="flex-1  flex items-center justify-center">
        {/* LIST FOR SIDEBAR */}
        <motion.ul
          variants={parentStagger}
          exit="exit"
          initial="hidden"
          animate="visible"
          className="flex flex-col text-center gap-5"
        >
          <motion.li variants={fadeInOut}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-3xl  text-accent font-bold" : li
              }
              onClick={setOpen}
            >
              Home
            </NavLink>
          </motion.li>{" "}
          <motion.li variants={fadeInOut}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline text-3xl  text-accent font-bold" : li
              }
              onClick={setOpen}
            >
              About
            </NavLink>
          </motion.li>
          <motion.li variants={fadeInOut}>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "underline text-3xl text-accent" : li
              }
              onClick={setOpen}
            >
              Project
            </NavLink>
          </motion.li>
          <motion.li variants={fadeInOut}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline text-3xl text-accent" : li
              }
              onClick={setOpen}
            >
              Contact
            </NavLink>
          </motion.li>
        </motion.ul>
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.35, ease: easeOut },
        }}
        exit={{ opacity: 0 }}
        className="brightness-75 text-center text-xs text-muted border-t border-border/20 pt-5  "
      >
        Abdul Hannan Khan ©'{new Date().getFullYear()}
      </motion.p>
    </motion.aside>
  );
}
export default Sidebar;
