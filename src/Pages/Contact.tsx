import { easeOut, motion } from "motion/react";
import { ButtonAnim, FadeIn, FadeInUp } from "../animation/Animation";
import { IoMail } from "react-icons/io5";

import ContactForm from "../Components/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const link = {
    github: "https://github.com/Hannank485",
    linkedin: "https://www.linkedin.com/in/abdul-hannan-khan-9a9524249/",
    email: "mailto:kahannan28@gmail.com",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className=" py-10 px-5 md:px-20 flex flex-col w-full mx-auto "
    >
      <motion.div
        variants={FadeIn}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 1.3,
          ease: easeOut,
        }}
        className=" md:w-2/3 border-b border-primary/10 pb-6"
      >
        <h2 className="text-4xl md:text-6xl mb-1 leading-tight font-semibold ">
          Get in Touch
        </h2>
        <p className="text-sm md:text-xl text-secondary">
          Let’s turn ideas into real products
        </p>
      </motion.div>
      <motion.div
        variants={FadeInUp}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 1.5,
          ease: easeOut,
        }}
        className="flex md:flex-row  flex-col mt-5 gap-3"
      >
        <div className="flex-1/2 flex flex-col items-start ">
          <section>
            <p className="text-primary font-bold text-lg mb-2 leading-relaxed">
              Contact Information
            </p>
            <p className="text-secondary ">
              I’m open to new opportunities and collaborations. If you have a
              project proposal, a question about my work, or want to connect,
              feel free to reach out.
            </p>
          </section>
          <section className=" mt-4 space-y-2 hidden md:block">
            <p className="text-primary  font-bold text-lg my-2 leading-relaxed">
              Find Me On
            </p>
            <div className="flex flex-col gap-4 text-base mt-5  ">
              <motion.a
                href={link.github}
                variants={ButtonAnim}
                whileHover="whileHover"
                whileTap="whileTap"
                className=" flex items-center border-2 rounded-2xl py-2 px-4 gap-2 hover:bg-primary cursor-pointer hover:text-white transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub /> <span className=" select-none">Github</span>
              </motion.a>
              <motion.a
                href={link.linkedin}
                variants={ButtonAnim}
                whileHover="whileHover"
                whileTap="whileTap"
                className="flex items-center border-2 py-2 px-4 rounded-2xl gap-2 hover:bg-blue-500 cursor-pointer hover:text-white transition-colors "
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin /> <span className=" select-none">LinkedIn</span>
              </motion.a>
              <motion.a
                href={link.email}
                variants={ButtonAnim}
                whileHover="whileHover"
                whileTap="whileTap"
                className="flex items-center border-2 py-2 px-4 rounded-2xl gap-2 hover:bg-red-500 cursor-pointer hover:text-white transition-colors "
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoMail /> <span className=" select-none">Email Me</span>
              </motion.a>
            </div>
          </section>
        </div>

        <div className="flex-1/3 mt-3 md:mt-0  text-sm  border border-border font-semibold  h-full p-5 rounded-xl shadow-md">
          <ContactForm />
        </div>
        <div className="flex items-center gap-4 text-base mt-5 justify-center">
          <motion.a
            href={link.github}
            variants={ButtonAnim}
            whileHover="whileHover"
            whileTap="whileTap"
            className="block md:hidden items-center border-2 rounded-2xl p-4 "
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={link.linkedin}
            variants={ButtonAnim}
            whileHover="whileHover"
            whileTap="whileTap"
            className="block md:hidden border-2 p-4 rounded-2xl  "
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={link.email}
            variants={ButtonAnim}
            whileHover="whileHover"
            whileTap="whileTap"
            className="block md:hidden items-center border-2 rounded-2xl p-4 "
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoMail />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
