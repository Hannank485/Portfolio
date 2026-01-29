import { easeOut, motion } from "motion/react";
import { FadeIn, FadeInUp } from "../animation/Animation";
import {
  TbBrandTypescript,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandFramerMotion,
} from "react-icons/tb";

function About() {
  type skillType = {
    skill: string;
    desc: string;
    image: React.ReactNode;
  };

  const skillsArray: skillType[] = [
    {
      skill: "ReactJS",
      desc: "Component-driven apps",
      image: <TbBrandReact />,
    },
    {
      skill: "Typescript",
      desc: "Production use",
      image: <TbBrandTypescript />,
    },
    {
      skill: "Tailwind CSS",
      desc: "Primary styling tool",
      image: <TbBrandTailwind />,
    },
    {
      skill: "UI Animation",
      desc: "Framer Motion",
      image: <TbBrandFramerMotion />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className=" py-10 px-5 md:py-10 md:px-30 flex flex-col mx-auto "
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
          About Me
        </h2>
        <p className="text-sm md:text-xl text-secondary">
          React developer focused on building clean, responsive interfaces with
          careful attention to interaction and detail.
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
        className="grid grid-cols-1  md:grid-cols-[1fr_1fr] mt-10 gap-5"
      >
        <section className=" space-y-3 text-sm">
          <p className="text-accent font-semibold leading-relaxed">THE STORY</p>
          <p>
            My interest in web development started with a curiosity about how
            things work beneath the interface. As a
            <span className="font-bold text-accent"> React developer </span>, I
            focus on mastering the fundamentals of modern frontend development
            and building interfaces that are clear, intentional, and reliable.
            <br />
            <br />I care about writing maintainable code and refining the small
            details that shape how users experience an application.
          </p>
        </section>
        <section className="flex-1/3 mt-3 md:mt-0 text-sm h-full">
          <p className="text-accent text-sm font-semibold leading-relaxed">
            TECHNICAL STACK
          </p>
          <div className="  grid grid-cols-2 gap-4  mt-4">
            {skillsArray.map((text, i) => {
              return (
                <SkillCard
                  key={i}
                  icon={text.image}
                  skill={text.skill}
                  text={text.desc}
                />
              );
            })}
          </div>
        </section>
        <section className=" space-y-2 text-xs md:text-sm">
          <p className="text-accent mt-3  font-semibold ">EXPERIENCE</p>
          <div className="flex flex-col">
            <p className="text-primary font-semibold relative ml-4">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs w-1.5 bg-accent h-1.5 rounded-full"></span>
              React Developer
            </p>
            <p className="ml-4 text-accent">Personal Projects•2025 - Present</p>
            <p className="text-secondary ml-4 mt-1">
              Building responsive web applications using React, TypeScript, and
              Tailwind CSS.
            </p>
          </div>
        </section>
        <aside className="border-border/30 border bg-card/30 text-xs md:text-sm rounded-2xl p-2">
          <p className="text-accent mt-3  font-semibold ">ALWAYS LEARNING</p>
          <p className="text-secondary mt-2">
            I’m currently strengthening my frontend foundation with{" "}
            <strong>Framer Motion</strong>, and preparing to move into{" "}
            <strong>Next.js</strong>.
          </p>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default About;

function SkillCard({
  icon,
  skill,
  text,
}: {
  icon: React.ReactNode;
  skill: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-center border group border-border hover:border-accent/30 hover:shadow-md select-none ease-in-out duration-300 transition-all  hover:shadow-accent/20 p-3 rounded-xl">
      <p className="bg-soft rounded-lg text-accent group-hover:text-soft group-hover:bg-accent text-2xl p-2 ease-in-out duration-300 transition-all">
        {icon}
      </p>
      <div>
        <p className="font-semibold text-sm md:text-lg text-primary">{skill}</p>
        <p className="text-xs text-secondary">{text}</p>
      </div>
    </div>
  );
}
