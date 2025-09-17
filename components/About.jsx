import React from "react";
import Link from "next/link";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaHtml5, FaReact, FaNodeJs, FaInstagram } from "react-icons/fa";
import { IoIosMail, IoLogoCss3 } from "react-icons/io";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiSupabase,
  SiNextdotjs,
} from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

import "../app/globals.css";

const frontendSkills = [
  {
    icon: <RiJavascriptFill size={50} className="text-yellow-500" />,
    label: "JavaScript",
  },
  { icon: <FaReact size={50} className="text-sky-500" />, label: "React JS" },
  { icon: <SiNextdotjs size={50} className="text-black" />, label: "Next.js" },
  { icon: <IoLogoCss3 size={50} className="text-blue-500" />, label: "CSS" },
  { icon: <FaHtml5 size={50} className="text-red-500" />, label: "HTML" },
 
];

const backendSkills = [
  { icon: <FaNodeJs size={45} className="text-green-500" />, label: "Node.js" },
  { icon: <SiExpress size={45} className="text-black" />, label: "Express.js" },
  {
    icon: <SiSupabase size={50} className="text-green-500" />,
    label: "Supabase",
  },
  { icon: <SiMysql size={45} className="text-cyan-500" />, label: "MySQL" },
];

const About = React.memo(function About() {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col justify-between items-center"
      id="about"
    >
      {/* Section Heading */}
      <section className="flex items-center gap-4 pt-3">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-xl lg:text-2xl font-medium">&lt;About Me /&gt;</p>
      </section>

      <section className="flex flex-col-reverse lg:flex-row lg:p-6 p-4 gap-6 mt-6">
        {/* Left: Skills */}
        <section className="w-full p-2 rounded-xl py-6 lg:py-0.5 shadow-sm flex flex-col gap-6 card lg:p-4">
          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-600 rounded-full" />
            <p className="text-xl lg:text-2xl font-medium">
              &lt;My Skills /&gt;
            </p>
          </section>

          <section className="p-2 flex gap-6 justify-center flex-wrap text-lg">
            {frontendSkills.map((skill) => (
              <div
                key={skill.label}
                className="flex justify-center items-center flex-col"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </section>

          <section className="p-2 flex gap-6 justify-center flex-wrap text-lg">
            {backendSkills.map((skill) => (
              <div
                key={skill.label}
                className="flex justify-center items-center flex-col"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </section>
        </section>

        {/* Right: About Me Content */}
        <section className="w-full p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 shadow-sm lg:p-6 card">
          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-700 rounded-full" />
            <p className="font-medium text-xl lg:text-2xl">
              &lt;More About Me /&gt;
            </p>
          </section>

          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            I specialize in building responsive, user-friendly, and
            high-performance web applications using JavaScript, Next.js (React
            framework), Node.js, and Express.js.{" "}
          </p>
          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            I have hands-on experience in developing clean interfaces, reliable
            backend systems, and SEO-optimized websites, enabling me to deliver
            scalable applications that perform seamlessly across platforms.
          </p>
          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            I also work with Supabase OAuth, REST APIs, payment gateway
            integration, PDF generation, and resume parsing, adding advanced
            functionality to meet real-world business needs.
          </p>

          {/* Social & Contact */}
          <section className="flex max-md:flex-col gap-6 md:items-center">
            <section className="flex items-center gap-4 mt-3">
              <a
                href="https://www.linkedin.com/in/renuka-fuse-r10/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
              </a>
              <a
                href="https://github.com/Renukafuse10"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
              </a>
              {/* <a
                href="https://x.com/theavnishkumar"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
              </a> */}
              {/* <a
                href="https://instagram.com/theavnishkumar"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
              </a> */}
            </section>

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
            </section>
          </section>
        </section>
      </section>
    </main>
  );
});

export default About;
