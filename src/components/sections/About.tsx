import { User, Heart } from "lucide-react";
import profileData from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b-8 border-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
              <User className="w-6 h-6" />
              <h2 className="text-3xl md:text-5xl font-black">ABOUT ME</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-300 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-yellow-300 rounded-full flex items-center justify-center">
                  !
                </span>
                My Story
              </h3>
              <p className="text-lg leading-relaxed font-medium">
                {profileData.about}
              </p>
            </div>

            <div className="bg-pink-400 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Heart className="w-7 h-7" fill="black" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {profileData.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white border-3 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-lime-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <p className="text-xl font-bold text-center">
              "{profileData.tagline}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
