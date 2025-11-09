import { Code2, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-yellow-300 border-b-8 border-black relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-400 border-4 border-black -rotate-12 hidden md:block" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-lime-400 border-4 border-black rotate-45 hidden lg:block" />

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-black text-yellow-300 font-bold text-xs sm:text-sm border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            {profileData.title.toUpperCase()}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="inline-block bg-white border-4 border-black px-6 py-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              {profileData.heroHeadline.split(" ")[0]}
            </span>
            <br />
            <span className="inline-block bg-cyan-400 border-4 border-black px-6 py-2 mt-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              {profileData.heroHeadline.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-xl md:text-xl font-bold mb-12 max-w-2xl mx-auto">
            {profileData.heroSubline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-pink-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Code2 className="w-5 h-5" />
              <span className="font-bold">Java</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-lime-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Terminal className="w-5 h-5" />
              <span className="font-bold">Elixir</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-5 h-5" />
              <span className="font-bold">Rust</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Code2 className="w-5 h-5" />
              <span className="font-bold">TypeScript</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 text-lg font-bold bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="px-8 py-6 text-lg font-bold bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
