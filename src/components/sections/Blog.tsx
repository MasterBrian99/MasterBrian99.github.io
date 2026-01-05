import { BookOpen, Clock, Tag } from "lucide-react";
import blogData from "@/data/blog.json";

export default function Blog() {
  const featuredArticles = blogData.articles.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-lime-300 border-b-8 border-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black text-lime-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-4xl md:text-5xl font-black">BLOG</h2>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h3 className="text-2xl font-black mb-4">What I Write About</h3>
            <p className="text-lg font-medium mb-4 leading-relaxed">
              {blogData.writingStyle}
            </p>
            <div className="flex flex-wrap gap-2">
              {blogData.themes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-lime-300 border-3 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, idx) => {
              const colors = ["bg-cyan-400", "bg-pink-400", "bg-yellow-300"];
              const bgColor = colors[idx % colors.length];

              const articleUrl = article.url.startsWith("http")
                ? article.url
                : article.url.startsWith("/")
                ? article.url
                : `https://${article.url}`;

              return (
                <a
                  key={article.id}
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read article: ${article.title}`}
                  className={`${bgColor} border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all block`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-bold">
                      {article.readTime}
                    </span>
                    <span className="ml-auto text-sm font-bold">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-black mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-medium mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 2).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="flex items-center gap-1 px-2 py-1 bg-white border-2 border-black text-xs font-bold"
                      >
                        <Tag className="w-3 h-3" aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
