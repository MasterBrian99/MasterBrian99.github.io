import { Code, Layers, Wrench, Lightbulb } from "lucide-react";
import skillsData from "@/data/skills.json";

const iconMap = {
  backend: Code,
  frontend: Layers,
  tools: Wrench,
  concepts: Lightbulb,
};

const colorMap = {
  backend: "bg-cyan-400",
  frontend: "bg-pink-400",
  tools: "bg-yellow-300",
  concepts: "bg-lime-400",
};

interface SkillItem {
  name: string;
}

export default function Skills() {
  const categories = [
    { key: "backend", title: "Backend", skills: skillsData.backend },
    { key: "frontend", title: "Frontend", skills: skillsData.frontend },
    { key: "tools", title: "Tools & DevOps", skills: skillsData.tools },
    { key: "concepts", title: "Concepts", skills: skillsData.concepts },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-orange-300 border-b-8 border-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-orange-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
              <Code className="w-8 h-8" />
              <h2 className="text-3xl md:text-5xl font-black">SKILLS</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const Icon = iconMap[category.key as keyof typeof iconMap];
              const bgColor = colorMap[category.key as keyof typeof colorMap];

              return (
                <div
                  key={category.key}
                  className={`${bgColor} border-6 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-3 border-black transform -rotate-12">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black">
                      {category.title.toUpperCase()}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill: SkillItem, idx: number) => (
                      <div
                        key={idx}
                        className="group relative bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all cursor-pointer transform hover:rotate-1"
                      >
                        <span className="font-black text-md text-center block">
                          {skill.name}
                        </span>
                        <div className="absolute inset-0 border-4 border-black pointer-events-none" />
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
