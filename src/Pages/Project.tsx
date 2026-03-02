import { easeOut, motion } from "motion/react";
import { FadeIn, FadeInUp } from "../animation/Animation";
import ProjectCard from "../Components/ProjectCard";
export type projectType = {
  date: number;
  name: string;
  description: string;
  skills: string[];
  github: string;
  demo: string;
};
function Project() {
  const project: projectType[] = [
    {
      date: 2026,
      name: "PaperWise",
      description:
        "A production-ready full-stack AI research assistant built with a scalable REST architecture, secure JWT authentication, and PostgreSQL-backed vector storage. Implements a complete RAG pipeline that parses PDFs, generates embeddings, performs pgvector similarity search, and returns context-aware responses using the OpenAI API.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
      ],
      github: "https://github.com/Hannank485/Paperwise",
      demo: "https://paperwise-five.vercel.app/",
    },
    {
      date: 2026,
      name: "My Task",
      description:
        "A production-ready full-stack task management system featuring JWT-based authentication with HTTP-only cookies, protected routes,rate limitting middleware and a scalable REST API backed by PostgreSQL and Prisma.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
      ],
      github: "https://github.com/Hannank485/FullStack-Todo-App",
      demo: "https://full-stack-todo-app-eta-seven.vercel.app/",
    },

    {
      date: 2026,
      name: "CULT",
      description:
        "A high-impact animated landing page inspired by modern brutalist design, built to explore advanced typography, motion layering, and immersive visual storytelling through interactive UI patterns.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Hannank485/CULT-LandingPage",
      demo: "https://cult-landing-page-ten.vercel.app/",
    },
    {
      date: 2026,
      name: "FinSite",
      description:
        "An interactive investment calculator that guides users through SIP and Lump Sum planning with accurate projections a clean, step-based experience.",
      skills: ["React", "Typescript", "Tailwind CSS"],
      github: "https://github.com/Hannank485/FinSite",
      demo: "https://fin-site.vercel.app/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className=" py-10 px-5 md:px-30 flex flex-col gap-15 max-w-7xl mx-auto "
    >
      <motion.div
        variants={FadeIn}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 1.5,
          ease: easeOut,
        }}
        className=" md:w-2/3 border-b border-primary/10 pb-6 "
      >
        <h2 className="text-4xl md:text-6xl mb-1 leading-tight font-semibold ">
          Projects
        </h2>
        <p className="text-sm md:text-xl text-secondary">
          A selection of my recent work, ranging from complex web applications
          to experimental UI designs.
        </p>
      </motion.div>
      <motion.div
        variants={FadeInUp}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 1.7,
          ease: easeOut,
        }}
      >
        {project.map((data, i) => {
          return <ProjectCard key={i} data={data} />;
        })}

        <div className="text-center">
          <p className="text-accent text-xs   font-semibold  mt-10 mb-4 ">
            INTERESTED IN MORE?
          </p>
          <a
            href="https://github.com/Hannank485"
            className="text-xl md:text-4xl font-bold hover:underline hover:text-accent transition-colors ease-in-out"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check my GitHub Archive
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
