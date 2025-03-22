/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dqzv5iwo18v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InboxIcon, MapPinIcon, PhoneOutgoingIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full py-12 lg:py-24 xl:py-32">
      <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-24">
        <div className="flex flex-col gap-4 min-w-[300px]">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Get in Touch
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Have questions?
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-sm">
                Name
              </Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message" className="text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px] resize-none"
              />
            </div>
            <Button size="lg">Submit</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <PhoneOutgoingIcon className="w-6 h-6" />
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Call us:
                <span className="font-medium">+94712240424</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <InboxIcon className="w-6 h-6" />
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Email:
                <span className="font-medium">mail@pasindupramodya.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6" />
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Colombo, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
