import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Utkarsh Kapoor",
  initials: "UK",
  url: "https://github.com/Utkarsh-K09984",
  location: "Dehradun, India",
  locationLink: "https://www.google.com/maps/place/Dehradun",
  description:
    "Frontend Developer",
  summary:
    "I'm a frontend developer who loves building beautiful and responsive user interfaces. I specialize in React, Next.js, and TypeScript, and I'm always exploring new tools to improve performance and user experience. I enjoy learning, creating, and contributing to real-world projects.",
  avatarUrl: "/profile.jpg",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
    "Redux",
    "Zustand",
    "Figma",
    "Git",
    "Responsive Design",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "kapoorutkarsh17@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Utkarsh-K09984",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/utkarsh-kapoor-747a4b275/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kapoorutkarsh17@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
      {
    company: "URIDA NGO (Urbo Rural Integrated Development Association)",
    href: "https://uridango.org",
    badges: [],
    location: "Remote",
    title: "Content & Design Intern",
    logoUrl: "/urida.png", // Add this image in /public folder
    start: "June 2024",
    end: "July 2024",
    description:
      "Worked as a content and design intern. Designed promotional posters and creative assets for social media using Figma and Canva. Contributed to content strategies and wrote engaging descriptions for awareness campaigns. Improved my visual communication, time management, and professional collaboration skills.",
  },
  {
    company: "Microsoft Technical Club (MTC)",
    href: "#", // add actual club link if available
    badges: [],
    location: "Dehradun, India",
    title: "Design Core Team Member",
    logoUrl: "/mtc.png", // add this image to public folder
    start: "September 2023",
    end: "May 2024",
    description:
      "Worked as a core design team member at Microsoft Technical Club (MTC). Designed promotional posters, event banners, and digital assets for various technical events. Coordinated with the event and content team to maintain brand consistency and impactful visual communication.",
  },
  ],

  education: [
    {
      school: "University of Petroleum and Energy Studies (UPES)",
      href: "https://www.upes.ac.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/upes.jpg",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Portfolio Website",
      href: "https://utkarshkapoor.tech",
      dates: "June 2025",
      active: true,
      description:
        "A sleek and responsive portfolio to showcase my frontend projects, resume, and skills. Built with latest frontend tech stack.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarsh-K09984/portfolio",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://utkarsh-kapoor.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portoflio.png",
    },
    {
      title: "The Wander Log",
      dates: "June 2025",
      active: true,
      description:
        "A travel journaling web application where users can sign in and create personal travel logs for different destinations. Each entry includes title, content, location, and images. Designed with a clean and intuitive UI to give users a delightful experience while documenting their journeys.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarsh-K09984/wanderlog", // GitHub link if available
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://thewanderlog.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wanderlog.png", // Add image of project in /public
    },
    {
      title: "Restaura",
      dates: "June 2025",
      active: true,
      description:
        "A platform where users can browse menus, place orders, and track deliveries in real-time. Designed with a user-friendly interface to ensure a seamless food ordering experience.",
      technologies: ["React", "Javascript", "TailwindCSS", "Framer motion"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarsh-K09984/Restaura-foodz", // GitHub link if available
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://restaura-foodz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/restaura.png", // Add image of project in /public
    },
    {
      title: "Travel Explorer",
      dates: "April 2025",
      active: true,
      description:
        "A user-friendly travel booking website that allows users to explore a variety of travel packages, add their preferred options to the cart, and complete bookings seamlessly. Designed to offer a smooth and intuitive experience for hassle-free travel planning..",
      technologies: ["React", "Javascript", "TailwindCSS", "Framer motion"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarsh-K09984/TravelExplorer", // GitHub link if available
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://travel-explorer-bay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/travel.png", // Add image of project in /public
    },
  ],

  
} as const;
