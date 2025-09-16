"use client";

import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import bgImg from "../public/hero/bg.png";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Renuka_Fuse_Resume.pdf"; // replace with your resume file
    window.open(resumeUrl, "_blank");
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4">
      {/* Left Section */}
      <section className="max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <p className="lg:text-3xl text-2xl font-medium">👋 Hello, I am</p>
        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          Renuka Fuse
        </h1>
        <h2 className="lg:text-4xl text-3xl font-medium">
          Full Stack Developer
        </h2>

        <p className="lg:text-2xl text-lg text-gray-600">
I build responsive, user-friendly, and performance-optimized websites and web applications. With expertise in JavaScript, Next.js, React.js, Node.js, Express.js, Supabase, HTML, CSS and  Tailwind CSS, I deliver clean interfaces with reliable backend systems.     
  </p>

        {/* Social + Buttons */}
        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/renuka-fuse-r10/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            <a
              href="https://github.com/Renukafuse10"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
          </section>

          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:renukafuse22@gmail.com">
              <button
                className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                aria-label="Contact Button"
              >
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button
              className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
              onClick={handleDownloadResume}
              aria-label="Resume Download Button"
            >
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className="lg:max-w-lg p-4 max-lg:hidden">
        <Image
          className="max-w-xl rounded-xl"
          src={bgImg}
          alt="Renuka Fuse"
          priority={false}
          height={300}
          width={350}
          placeholder="blur"
          style={{
            width: "350px",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};

export default Hero;
