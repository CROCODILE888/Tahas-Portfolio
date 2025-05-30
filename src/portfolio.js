// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Taha's Portfolio",
  description:
    "As a Full Stack Developer with hands-on experience, I thrive in building scalable, high-performance applications for the modern web.",
  og: {
    title: "Taha Lokhandwala Portfolio",
    type: "website",
    url: "https://tahas-portfolio-react.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Taha Lokhandwala",
  logo_name: "Taha Lokhandwala",
  subTitle:
    "As a Full Stack Developer with hands-on experience, I thrive in building scalable, high-performance applications for the modern web.",
  resumeLink:
    "https://drive.google.com/drive/folders/13VzDf9EOpI4NibDO5XBDP89KSdUjaUXa?usp=drive_link",
  portfolio_repository: "https://github.com/CROCODILE888/Tahas-Portfolio",
  githubProfile: "https://github.com/CROCODILE888",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/CROCODILE888",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/taha-lokhandwala-866794188/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:tahalokhandwala1303@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux/ Angular",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Java",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS and React native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Trinity Academy of Engineering",
      subtitle: "B.E. in Computer Science",
      logo_path: "taelogo.png",
      alt_name: "TAE Pune",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Core Java, Database Administration, Tableau and React.",
      ],
      website_link: "https://www.kjei.edu.in/tae/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JavaScript DSA",
      subtitle: "- Quincy Larson",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/crocodile8/javascript-algorithms-and-data-structures",
      alt_name: "freeCodeCamp",
      color_code: "#ffffff",
    },
    {
      title: "Database Fundamentals",
      subtitle: "- Skillsoft",
      logo_path: "skillsoft_logo.png",
      certificate_link:
        "https://skillsoft.digitalbadges.skillsoft.com/80019087-b43e-4477-9013-c08fb13016e0#gs.gne1jh",
      alt_name: "freeCodeCamp",
      color_code: "#ffffff",
    },
    {
      title: "Tableau",
      subtitle: "- coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TR3Q8G42GGF6",
      alt_name: "freeCodeCamp",
      color_code: "#ffffff",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- Quincy Larson",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/crocodile8/responsive-web-design",
      alt_name: "freeCodeCamp",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I bring valuable experience as a Full Stack Developer, complemented by multiple internships and professional training programs. These opportunities have equipped me with a versatile skill set, practical industry knowledge, and the ability to deliver impactful solutions in dynamic environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Al Merak Tech",
          company_url: "https://almerak.com/",
          logo_path: "merak-logo1.jpg",
          // duration: "Nov 2024 - Jan 2025",
          location: "Pune, India",
          description: `Full Stack Developer | Short-Term Projects from scratch (2 Months) 
            Food Ordering PWA - Built a Progressive Web Application (PWA) for seamless online food ordering, ensuring responsiveness and fast performance. 
            Salon and Products Booking Mobile App - Developed a cross-platform mobile application for booking salon services and purchasing products using Expo (React Native), focusing on intuitive UI/UX and real-time updates.`,
          color: "#ffffff",
        },
        {
          title: "Full Stack Developer",
          company: "Polyglot Consultants",
          company_url: "https://lspware.com/",
          logo_path: "lspware.png",
          // duration: "May 2023 - Oct 2024",
          location: "Pune, India",
          description:
            "Developed a scalable case management system with a modern frontend and a robust backend, enabling efficient data management and improving operational workflows. Ensured high code quality through comprehensive unit testing using industry-standard tools.",
          color: "#ffffff",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Ethical Hacking Intern",
          company: "Internship Studio",
          company_url: "https://internshipstudio.com/",
          logo_path: "internshipStudio_logo.png",
          duration: "Jan 2022 - Feb 2022",
          location: "Remote",
          description:
            "Conducted penetration testing and vulnerability assessments on web applications. Trained in ethical hacking tools and techniques, identifying security flaws and providing remediation strategies.",
          color: "#000000",
        },
        {
          title: "Java Software Development Intern",
          company: "Sun Infotech",
          company_url: "blank",
          logo_path: "NA.png",
          duration: "Jun 2020 - Oct 2020",
          location: "Remote",
          description:
            "Developed Java-based applications with a focus on object-oriented programming and best practices. Received training in the full software lifecycle, including requirement analysis, development, and testing.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Taha-animated1.png",
    description:
      "I am available on very limited social media but you can message me and I will reply within 24 hours.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
