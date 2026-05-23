import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';

const projects = [
  {
    id: 'tesda',
    title: "Tesda Clone Website",
    image: "/images/projects/project1.png",
    desc: "Cloning Website is a front-end clone of the TESDA official website, built for practice in web design, layout replication, and responsive UI structuring.",
    features: [
      "Replicated TESDA homepage and layout",
      "Fully responsive design",
      "Interactive navigation",
      "Semantic HTML structure"
    ],
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://lynxguerba.github.io/Tesda-Final_Project/",
  },
  {
    id: 'grillmaster',
    title: "Grillmaster: Filipino Street Food App",
    image: "/images/projects/project2.png",
    desc: "A mobile application designed to showcase and facilitate the ordering of popular Filipino street foods.",
    features: [
      "Browse curated Filipino street food menus",
      "Add to cart and checkout flow",
      "Firebase Login/Register",
      "Admin dashboard (coming soon)"
    ],
    stack: ["Dart", "Flutter", "Firebase"],
    link: null,
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group w-full relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#141414] border border-gray-200/70 dark:border-white/[0.06] p-6 md:p-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)] transition-shadow duration-500"
    >
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-80" />

      {/* Decorative card number */}
      <div className="absolute top-4 right-6 md:top-6 md:right-10 text-[5rem] md:text-[7rem] font-black leading-none text-gray-100 dark:text-white/[0.03] select-none pointer-events-none z-0">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Project Screenshot */}
      <div className="w-full relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/[0.06] mb-8 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Project Metadata */}
      <div className="w-full relative z-10 flex flex-col xl:flex-row gap-8 xl:gap-12">

        {/* Left column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-pink-500/25 text-sm w-full sm:w-auto"
              >
                <ExternalLink size={16} /> View Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="xl:w-5/12 flex flex-col">
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-pink-500" /> Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300">
                  <div className="w-[18px] h-[18px] mt-0.5 rounded-full bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-pink-500" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-pink-500" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-white/[0.08] hover:border-pink-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 mb-32">
      {/* Page Header */}
      <div className="mb-16 md:mb-24 pt-12 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mx-auto lg:mx-0"
        >
          A curated showcase of full-stack digital solutions, engineering clean code architectures, and crafting intuitive user-centric experiences.
        </motion.p>
      </div>

      {/* Static Project Cards */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
