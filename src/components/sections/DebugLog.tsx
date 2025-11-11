import {
  Music,
  Video,
  Code,
  Book,
  CheckCircle2,
  Zap,
  Terminal,
} from "lucide-react";
import debuglogData from "@/data/debuglog.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  music: Music,
  video: Video,
  code: Code,
  book: Book,
  check: CheckCircle2,
  zap: Zap,
};

const colorMap: Record<string, string> = {
  music: "bg-pink-400",
  video: "bg-cyan-400",
  work: "bg-yellow-300",
  reading: "bg-lime-400",
  learning: "bg-orange-300",
};

export default function DebugLog() {
  return (
    <section id="debuglog" className="py-20 bg-white border-b-8 border-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
              <Terminal className="w-8 h-8" />
              <h2 className="text-3xl md:text-5xl  font-black">DEBUG LOG</h2>
            </div>
            <p className="text-lg font-bold max-w-2xl mx-auto mt-6">
              Real-time snapshots of what I'm up to — music, videos, code, and
              thoughts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {debuglogData.updates.map((update) => {
              const Icon = iconMap[update.icon] || Code;
              const bgColor = colorMap[update.category] || "bg-gray-300";

              return (
                <div
                  key={update.id}
                  className={`${bgColor} border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-3 border-black transform group-hover:-rotate-12 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h4 className="text-2xl font-black mb-2">{update.title}</h4>
                  <p className="font-bold text-base leading-relaxed">
                    {update.content}
                  </p>

                  <div className="mt-4 pt-4 border-t-3 border-black opacity-60">
                    <span className="text-xs font-black uppercase">
                      {update.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-black border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-white font-bold text-center text-lg">
              Updates refresh daily • Last sync: {debuglogData.lastSync}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
