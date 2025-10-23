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
  dataScienceProjectsPortfolio: "https://datascienceportfol.io/tahalokhandwala",
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
  {
    name: "WhatsApp",
    link: "https://wa.me/9284536939",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#26c962",
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
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Currently working on real-world data science tasks like web scraping, data cleaning, and preprocessing",
        "⚡ Hands-on experience with Python libraries such as pandas, NumPy, and scikit-learn for data manipulation and modeling",
        "⚡ Familiar with building machine learning models and evaluating them using standard metrics",
        "⚡ Comfortable using Jupyter Notebooks and visualizing data using matplotlib and seaborn",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "white",
            color: "#013243",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "white",
            color: "#F7931E",
          },
        },
        {
          skillName: "Seaborn",
          imageSrc: "seaborn1.png",
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Hochschule Neu-Ulm",
      subtitle: "M.Sc. Artificial Intelligence and Data Analytics",
      logo_path: "hnu-logo2.png",
      alt_name: "HNU, Germany",
      duration: "2025 - Present",
      descriptions: [
        "⚡ Focusing on data-driven business strategy, big data, and AI applications.",
        "⚡ The program combines management, analytics, and IT to build skills for roles like data scientist, BI specialist, or AI consultant.",
      ],
      website_link: "https://www.hnu.de/",
    },
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
      title: "Front End Development Libraries",
      subtitle: "- Quincy Larson",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://freecodecamp.org/certification/crocodile8/front-end-development-libraries",
      alt_name: "freeCodeCamp",
      color_code: "#ffffff",
    },
    {
      title: "Node.js Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/636d7b9f66689ec02d1775f785578a55782d957ed4fdfe5ba52e0de729ac04b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJL7s%2FmxySiy2mvbACn%2Bgtw%3D%3D",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
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
      title: "DevOps Foundations: CI/CD",
      subtitle: "- LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/0c49bb5438edabfcd6dea7055a47e5d6e31c6b67a0f0158bf147eea3011e6760?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJL7s%2FmxySiy2mvbACn%2Bgtw%3D%3D",
      alt_name: "LinkedIn",
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
    {
      title: "Express Essentials",
      subtitle: "- LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3391f8b3b9b4a789e896ea9687b6a2df4a98a4a42e91fb684855082b3862fc5a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJL7s%2FmxySiy2mvbACn%2Bgtw%3D%3D",
      alt_name: "LinkedIn",
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
      title: "MongoDB",
      subtitle: "- LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ec4928fde88f62f36f84296707685d76c4b4545b8ad737efa949c99d12f8bc28?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJL7s%2FmxySiy2mvbACn%2Bgtw%3D%3D",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Tableau",
      subtitle: "- coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TR3Q8G42GGF6",
      alt_name: "coursera",
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
          title: "Full Stack AI Agent Developer",
          company: "Rubikon Labs",
          company_url: "https://rubikonlabs.com/",
          logo_path: "rubikon_labs_logo.jpeg",
          // duration: "Nov 2024 - Jan 2025",
          location: "Pune, India",
          description: `Developed AI agents integrating LLMs using various tools like LangGraph and built AI workflows.`,
          color: "#ffffff",
        },
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
          title: "Data Science Intern",
          company: "Codveda Technologies",
          company_url: "https://codveda.com/",
          logo_path: "codveda_technologies_logo.jpeg",
          duration: "Jun 2025 - Jul 2025",
          location: "Remote",
          description:
            "Participating in a variety of projects that require your expertise in data analysis, statistical modeling, and machine learning. Your contributions will be pivotal in extracting valuable insights from complex datasets, driving our company’s strategies and decision-making processes",
          color: "#000000",
        },
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
  title: "My Projects",
  description:
    "Given below are some of my web dev projects. To view my Data science projects, click the button below",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Taha-Ghibli.png",
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
