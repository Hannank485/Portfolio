import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import type { projectType } from "../Pages/Project";
import { motion } from "motion/react";
import { FadeInUp } from "../animation/Animation";
function ProjectCard({ data }: { data: projectType }) {
  return (
    <motion.div
      whileInView="animate"
      variants={FadeInUp}
      initial="initial"
      viewport={{ amount: 0.2, once: true }}
      className=" group flex justify-between flex-col md:flex-row border-b transition-color ease-in duration-300 border-border gap-5 hover:bg-soft/60 py-10 px-5 "
    >
      <h1 className="text-xs  py-2 text-accent font-semibold">{data.date}</h1>
      <div className=" flex flex-col gap-4">
        <h2 className="font-bold text-xl md:text-4xl transition-all group-hover:translate-x-4 text-primary group-hover:text-accent! duration-300 ease-in">
          {data.name}
        </h2>
        <p className="text-sm md:w-3/4">{data.description}</p>
        <ul className="flex gap-4 font-semibold text-muted/70 group-hover:text-accent  ease-in duration-300 text-xs">
          {data.skills.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="flex items-center md:self-start gap-4 ">
        <a
          href={data.github}
          rel="noopener noreferrer"
          target="_blank"
          className=" p-2 border border-gray-300 text-2xl hover:bg-accent hover:text-white transition-color ease-in duration-300 rounded-full cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href={data.demo}
          className=" py-2 px-4 flex items-center gap-2 whitespace-nowrap bg-primary text-white hover:bg-accent transition-color ease-in duration-300 rounded-3xl"
          rel="noopener noreferrer"
          target="_blank"
        >
          Live site <MdArrowOutward />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
