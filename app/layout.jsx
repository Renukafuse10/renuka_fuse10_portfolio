import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renuka Fuse – Full Stack Web Developer | MERN & JavaScript Developer",
  description:
    "Renuka Fuse is a Full Stack Web Developer pursuing MCA from Nagpur University. She specializes in building responsive, user-friendly, and high-performance web applications using JavaScript, Next.js, Node.js, Express.js, Supabase, and Tailwind CSS.",
  keywords: [
    "Renuka",
    "Renuka Fuse",
    "therenukafuse",
    "Renuka Fuse web developer",
    "Renuka Fuse full stack developer",
    "Renuka Fuse MERN developer",

    "Renuka Fuse JavaScript",

    "Renuka Fuse Nagpur",
    "Renuka Fuse portfolio",
    "Full Stack Developer India",
    "MERN Stack Developer Bihar",
    "JavaScript Developer India",
    "React Node Developer",
  ],
  authors: [
    { name: "Renuka Fuse" },
    {
      name: "Renuka Fuse",
      url: "https://renuka-fuse10-portfolio.vercel.app/",
    },
  ],
  creator: "Renuka Fuse",
  publisher: "Renuka Fuse",
  category: "Technology",
  metadataBase: new URL("https://renuka-fuse10-portfolio.vercel.app/"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Renuka Fuse – Full Stack Developer | React, Node, MongoDB",
    description:
      "Explore the portfolio of Renuka Fuse, a Full Stack Developer skilled in MERN stack, TypeScript, Java, and more. Based in Nagpur, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://renuka-fuse10-portfolio.vercel.app/",
    siteName: "Renuka Fuse",
    images: [
      // {
      //   url: "/avnishkumar/avnish.jpg",
      //   width: 600,
      //   height: 600,
      // },
      // {
      //   url: "/avnishkumar/avnishkumar.jpg",
      //   width: 500,
      //   height: 600,
      // },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },

  verification: {
    google: "google",
    // yandex: "yandex",
    // yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
