/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uweOiqD7sKg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import project from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center  items-center ">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="mb-8 md:mb-12 lg:mb-16 flex justify-center  items-center flex-col">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A selection of my recent projects.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
            {project.map((el, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <Link
                  href={el.link}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                  target="_blank"
                >
                  <span className="sr-only">{el.name}</span>
                </Link>
                <Image
                  src={el.image}
                  alt="Project 1 Image"
                  width="360"
                  height="240"
                  className="object-cover w-full h-48 sm:h-56"
                  style={{ aspectRatio: "360/240", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">{el.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
