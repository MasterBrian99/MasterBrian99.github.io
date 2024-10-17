import { Quote } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" dark:text-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start">
            <Quote className="w-6 h-6 mr-2 flex-shrink-0 text-gray-400" />
            <p className="text-sm">
              "Simplicity is the ultimate sophistication." - Leonardo da Vinci
            </p>
          </div>
          <div className="flex items-start">
            <Quote className="w-6 h-6 mr-2 flex-shrink-0 text-gray-400" />
            <p className="text-sm">
              "The only way to do great work is to love what you do." - Steve
              Jobs
            </p>
          </div>
          <div className="flex items-start">
            <Quote className="w-6 h-6 mr-2 flex-shrink-0 text-gray-400" />
            <p className="text-sm">
              "Innovation distinguishes between a leader and a follower." -
              Steve Jobs
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm dark:text-gray-400 text-gray-800">
            We value your privacy. We do not collect, store, or process any
            personal data.
          </p>
        </div>
      </div>
    </footer>
  );
}
