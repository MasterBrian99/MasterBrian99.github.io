import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://ecommerce-platform-demo.com",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/yourusername/task-management-app",
      liveLink: "https://task-app-demo.com",
    },
    {
      title: "Weather Forecast Dashboard",
      description:
        "A responsive weather dashboard using real-time data from multiple APIs.",
      technologies: ["React", "Redux", "Chart.js", "OpenWeatherMap API"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.com",
    },
    {
      title: "Social Media Analytics Tool",
      description:
        "An analytics dashboard for tracking social media engagement and growth.",
      technologies: ["Angular", "D3.js", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/social-media-analytics",
      liveLink: "https://social-analytics-demo.com",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
