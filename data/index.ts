export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Github", link: "#Github" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Always evolving, one project at a time",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Driven by curiosity and a passion for learning",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Innovation Arsenal",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Muti_Agent ecosystem",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 7,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 8,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 9,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "GoFlow-mail",
    des: "AI-driven email tools that adapt to your needs and streamline your communication.",
    img: "/goflow.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://go-flow-mu.vercel.app/",
  },

  {
    id: 3,
    title: "HealthGPT",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/hea.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://health-gpt-aba8-7igidnfti-swasthiks-projects-0ad687b8.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://care-plus-2.vercel.app",
  },
  {
    id: 4,
    title: "Search Engine",
    des: "A fast and intelligent chatbot powered by Groq API and LangChain for real-time, context-aware conversations.",
    img: "/SearchEngine.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://chatbotswas.streamlit.app/",
  },
];
export const githubProjects = [
  {
    quote:
      "GoFlow is a full-stack AI-powered Gmail client built with Next.js, Express, Clerk, Gemini, Supabase, and Pinecone — enabling smart email summarization, search, and automation.",
    name: "GoFlow",
    title: "Next.js · Express · Gemini API · Supabase · Clerk",
    link: "https://github.com/swasthik-007/GoFlow", // replace with actual repo link if different
  },
  // {
  //   quote: "Secure and flexible OAuth2 provider implementation in Node.js.",
  //   name: "MyOAuthProvider",
  //   title: "JavaScript",
  //   link: "https://github.com/swasthik-007/MyOAuthProvider",
  // },
  // {
  //   quote: "Chainable API for Mermaid.js that brings jQuery-style syntax to flowchart generation.",
  //   name: "ariel-js",
  //   title: "JavaScript",
  //   link: "https://github.com/swasthik-007/ariel-js",
  // },
  {
    quote:
      "AI-driven medical assistant that explains health reports using Gemini & Supabase.",
    name: "HealthGPT",
    title: "TypeScript",
    link: "https://github.com/swasthik-007/HealthGPT",
  },
  {
    quote:
      "Multi-agent AI tutor for interactive learning, powered by LangChain & Groq.",
    name: "Interactive-Learning-Tutor",
    title: "TypeScript",
    link: "https://github.com/swasthik-007/Interactive-Learning-Tutor",
  },
  {
    quote:
      "Multi-agent AI tutor for interactive learning, powered by LangChain & Groq.",
    name: "Interactive-Learning-Tutor",
    title: "TypeScript",
    link: "https://github.com/swasthik-007/Interactive-Learning-Tutor",
  },
  {
    quote:
      "Multi-agent setup for automating browser actions, search, and real estate insights using Cursor MCP.",
    name: "Cursor MCP Agent Setup",
    title: "Multi-Agent | MCP | Cursor",
    link: "https://github.com/swasthik-007/MCP_trial", // Replace with real link
  },
];

export const companies = [
  {
    id: 1,
    name: "TensorFlow",
    img: "/tf.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "CrewAI",
    img: "/crew.png",
    nameImg: "/crewAI.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/swasthik-007", // your GitHub URL
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://twitter.com/swasthik_007", // replace with your actual Twitter/X handle
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/swasthik-mohanty/", // your LinkedIn profile
  },
];
