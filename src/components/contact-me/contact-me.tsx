import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-900 md:text-xl dark:text-zinc-100 italic">
            "Code is like humor. When you have to explain it, it's bad." – Cory
            House
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12 space-y-8">
          <form className="space-y-8" method="POST" data-netlify="true">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="w-full dark:border-gray-600 dark:border-2 "
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full dark:border-gray-600 dark:border-2 "
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[200px] w-full dark:border-gray-600 dark:border-2 "
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-primary"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pasindu-p-konghawaththa-3808861a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-primary"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
