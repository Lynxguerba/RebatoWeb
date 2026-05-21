import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';
import Modal from '../components/Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      stack: "HTML, CSS, Bootstrap, JavaScript",
      link: "https://lynxguerba.github.io/Tesda-Final_Project/",
      tags: ["HTML", "Tailwind"]
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
      stack: "Dart, Flutter, Firebase",
      tags: ["Flutter", "Firebase"]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-pink-500 flex items-center gap-2">
        <span className="w-8 h-[2px] bg-pink-500"></span>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer p-2 rounded-[2rem] bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-pink-500/50 transition-all duration-500"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-pink-500 transition-colors">{project.title}</h3>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-lg border border-pink-200 dark:border-pink-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 md:h-80 object-cover rounded-3xl mb-8 shadow-md border border-gray-100 dark:border-gray-800" />
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">{selectedProject.desc}</p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-pink-500 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-pink-500"></span>
                Key Features
              </h4>
              <ul className="space-y-3">
                {selectedProject.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-pink-500" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 uppercase tracking-wider text-sm text-pink-500 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-pink-500"></span>
                Tech Stack
              </h4>
              <p className="font-medium text-lg text-gray-800 dark:text-gray-200">{selectedProject.stack}</p>
            </div>

            {selectedProject.link && (
              <div className="mt-10">
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-pink-500/30">
                  <ExternalLink size={20} /> Visit Website
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
