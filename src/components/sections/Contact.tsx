import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

export default function Contact() {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      url: `https://${profileData.contact.github}`,
      color: "bg-pink-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: `https://${profileData.contact.linkedin}`,
      color: "bg-cyan-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: `https://${profileData.contact.twitter}`,
      color: "bg-lime-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-yellow-300 border-b-8 border-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black text-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
              <Send className="w-6 h-6" />
              <h2 className="text-4xl md:text-5xl font-black">GET IN TOUCH</h2>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h3 className="text-3xl font-black mb-4">
              Let's Build Something Great
            </h3>
            <p className="text-lg font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in hearing about new projects,
              opportunities, and collaborations. Whether you're looking for a
              system engineer or just want to chat about distributed systems,
              feel free to reach out.
            </p>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-block"
            >
              <Button className="px-8 py-6 text-lg font-bold bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <Mail className="w-5 h-5 mr-2" />
                {profileData.contact.email}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-4 ${social.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all`}
              >
                <social.icon className="w-6 h-6" />
                <span className="font-bold text-lg">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-4 border-black">
            <p className="font-bold text-lg">
              Built with passion using Astro, React and TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
