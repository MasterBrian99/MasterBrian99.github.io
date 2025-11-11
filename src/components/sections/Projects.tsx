import { Folder, Github, ExternalLink, Star } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const displayProjects = projectsData.projects.slice(0, 5);

  return (
    <section id="projects" className="py-20 bg-white border-b-8 border-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
              <Folder className="w-6 h-6" />
              <h2 className="text-4xl md:text-5xl font-black">PROJECTS</h2>
            </div>
            {/* <p className="text-lg font-medium max-w-2xl mx-auto mt-4">
              Real-world systems I've built and shipped to production
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {displayProjects.map((project, idx) => {
              const colors = [
                "bg-yellow-300",
                "bg-cyan-400",
                "bg-lime-400",
                "bg-pink-400",
                "bg-orange-300",
              ];
              const bgColor = colors[idx % colors.length];

              return (
                <div
                  key={project.id}
                  className={`${bgColor} border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={`https://${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={`https://${project.live}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-3">{project.title}</h3>
                  <p className="font-medium mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white border-2 border-black text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, hlIdx) => (
                      <div
                        key={hlIdx}
                        className="flex items-center gap-2 px-2 py-1 bg-black text-white border-2 border-black text-xs font-bold"
                      >
                        <Star className="w-3 h-3" fill="white" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
