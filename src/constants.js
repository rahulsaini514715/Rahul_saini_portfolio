// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import jQueryLogo from './assets/tech_logo/JquerryLog.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifylogo from './assets/tech_logo/netlifylogo.png';
import RenderLogo from './assets/tech_logo/RenderLogo.jpg';
// Experience Section Logo's
//for future



// Education Section Logo's
import rasoni from './assets/education_logo/raisoni.png';
import vidya_logo from './assets/education_logo/vidya_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import EccomerceLogo from './assets/work_logo/EccomerceLogo.png';
import WeatherLogo from './assets/work_logo/WeatherLogo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'JQuery', logo: jQueryLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifylogo},
      { name: 'Render', logo: RenderLogo },
    ],
  },
];

  export const experiences = [
    {
  id: 1,
  role: "Fullstack Developer (Personal Project)",
  company: "Self-Initiated",
  date: "Jan 2024 - Present",
  desc: "Built a full-featured E-commerce website using the MERN stack, handling both frontend and backend development. Implemented features like product listing, cart management, user authentication, admin panel, and payment gateway integration. Focused on writing clean, maintainable code and creating a seamless user experience.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Redux",
    "Node JS",
    "Express JS",
    "MongoDb",
    "Razorpay",
  ],
},  
];
  
  export const education = [
    {
  id: 1,
  img: rasoni, // Replace with your GH Raisoni logo if available
  school: "GH Raisoni College, Jalgaon",
  date: "June 2023 - Aug 2026",
  grade: "8.31 CGPA",
  desc: "Currently pursuing my Bachelor's in Computer Applications (BCA) at GH Raisoni College, Jalgaon. During my studies, I have been actively building real-world projects and strengthening my understanding of full-stack development. My coursework includes programming, data structures, software engineering, and database management. This academic journey is helping me gain practical experience in both frontend and backend technologies, and preparing me for a career as a full-stack developer.",
  degree: "Bachelor of Computer Applications - BCA",
},
    {
  id: 2,
  img: vidya_logo, // Replace this with the MK Memorial School logo if available
  school: "MK Memorial School, Sikar",
  date: "Apr 2020 - July 2021",
  grade: "94.60%",
  desc: "I completed my Class 12 education from MK Memorial School, Sikar, under the Rajasthan Board of Secondary Education (RBSE). I pursued the Science stream with a focus on Physics, Chemistry, and Biology (PCB), which helped me build a strong academic foundation and discipline.",
  degree: "RBSE (XII) - PCB (Physics, Chemistry, Biology)",
},

    {
  id: 3,
  img: vidya_logo, // Replace with Vidya School logo if available
  school: "Vidya English Medium School, Jalgaon, Maharashtra",
  date: "Apr 2018 - Apr 2019",
  grade: "81%",
  desc: "I completed my Class 10 education from Vidya English Medium School, Jalgaon, under the SSC Maharashtra Board. My academic foundation in Mathematics, Science, and English during this period helped me develop logical thinking and a disciplined approach towards learning.",
  degree: "SSC (X) - Maharashtra State Board",
},

  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/rahulsaini514715/Github_search-profile",
      webapp: "https://github-profile-search-rahul.netlify.app/",
    },
    {
      id: 1,
      title: "Ecommerce_website",
      description:"Fully featured e-commerce platform with admin panel, user authentication, product purchasing capabilities, and secure Razorpay integration for authenticated transactions.",
      image: EccomerceLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Redux","Razorpay"],
      github: "https://github.com/rahulsaini514715/ecommerce-app",
      webapp: "https://ecommerce-website-rahul-saini.netlify.app/ ",
    },
    {
      id: 2,
      title: "CityWeather",
      description:"This CityWeather App is a responsive web application that provides real-time weather updates based on searched city. It fetches weather data from the OpenWeatherMap API and displays current temperature, weather conditions, humidity, and wind speed in a clean and user-friendly interface. The app supports location-based geolocation and smooth UI animations for a modern user experience.",
      image: WeatherLogo,
      tags: ["HTML","css","javascript"],
      github: "https://github.com/rahulsaini514715/City_Weather",
      webapp: "https://city-weather-rahul.netlify.app/",
    },

  ];  