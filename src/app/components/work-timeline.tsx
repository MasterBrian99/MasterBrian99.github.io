import React from "react";

export default function WorkTimeline() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work History</h2>
      <div className="relative flex flex-col items-start gap-8">
        <div className="absolute inset-0 w-px bg-gray-200 dark:bg-gray-700 left-1/2 -translate-x-1/2" />
        <div className="grid grid-cols-[auto_1fr] items-start gap-6 w-full">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            Oct 2025 - Present
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg w-full">
            <h3 className="text-lg font-semibold mb-2">
              Contract Software Engineer
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Worked with invenstment banking systems and managed the backend
              for the banking system.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-start gap-6 w-full justify-end">
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg w-full">
            <h3 className="text-lg font-semibold mb-2">
              Senior Software Engineer
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Worked with cloud infastructure and managed the backend services
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            April 2024 - Oct 2024
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start gap-6 w-full">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            April 2022 - April 2024
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg w-full">
            <h3 className="text-lg font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Designed and maintained the Video streaming applications and
              maintained University and schools CMS systems.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-start gap-6 w-full justify-end">
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg w-full">
            <h3 className="text-lg font-semibold mb-2">
              Software Engineer Intern
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Managed a video and audio streaming platform, enhancing user
              experience with exclusive content and a vast library of media
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            Aug 2021 - April 2022
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start gap-6 w-full">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            April 2021 - July 2021
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg w-full">
            <h3 className="text-lg font-semibold mb-2">React Developer</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Developed and maintained interactive user interfaces using React,
              ensuring seamless integration with backend services for scalable
              web applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
