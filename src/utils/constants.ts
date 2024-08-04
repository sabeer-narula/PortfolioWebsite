import {
  certinia,
  fps,
  gooff,
  gridsme,
  ooma,
} from "../assets";
import {
  IconPlaneTilt,
  IconCircleLetterC,
  IconDeviceGamepad,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandAws,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandCpp,
  IconCoffee,
  IconFlask,
  IconBrandSpotify,
  IconBrandBlender,
  IconLetterR,
  IconBrandGolang,
  IconHash,
  IconApi,
  IconCloudCode,
  IconSql,
  IconBrandMongodb,
  IconTestPipe,
  IconPhone,
  IconBallBasketball,
  IconMotorbike,
  IconBook,
  IconSnowboarding,
  IconDeviceAnalytics,
  IconInputAi,
  IconBrandVisualStudio,


} from "@tabler/icons-react";
import { Project, NavLink, About, Experience, ProjectType } from "./types";

export const loadingMessages: string[] = [
  "Just a tad more patience! 3D models are preparing for their grand entrance...",
  "Almost there...",
];

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sabeernarula/",
  github: "https://github.com/sabeer-narula",
};

export const cvPath = "/Sabeer_Narula_Resume.pdf";

export const about: About = {
  description:
    "As a passionate and highly motivated software engineer, I thoroughly enjoy expanding my technical knowledge and the thrill of working with other developers to solve complex problems. I am currently looking for full time software engineer roles within the United States - please reach out to me for job opportunities in the contact form below - thank you!",
  interests: [
    {
      title: "Basketball",
      icon: IconBallBasketball,
      description:
        "Basketball is not just a sport for me; it's a passion. I love the excitement of playing, feeling the rush of adrenaline as I make a play. Off the court, I'm an avid fan of the Golden State Warriors, following their games with keen interest and admiration for their skill and team dynamics.",
    },
    {
      title: "Developing Video Games",
      icon: IconDeviceGamepad,
      description:
        "Creating video games is where my creative and technical skills converge. From conceptualizing game mechanics to coding and designing, every step in the process fuels my passion for interactive storytelling and immersive experiences.",
    },
    {
      title: "Travel",
      icon: IconPlaneTilt,
      description:
        "Traveling is my window to the world's cultures, cuisines, and landscapes, with Hungary holding a special place in my heart. Its rich history, stunning architecture, and vibrant culture never fail to amaze me, making it my favorite travel destination.",
    },
    {
      title: "Motorcycles",
      icon: IconMotorbike,
      description:
        "There's a unique sense of freedom and excitement that comes with riding motorcycles. The roar of the engine, the rush of the wind, and the seamless blend of speed and control provide an exhilarating experience that I find endlessly thrilling.",
    },
    {
      title: "Reading",
      icon: IconBook,
      description:
        "Reading is a doorway to countless worlds for me, with Ender's Game by Orson Scott Card being my all-time favorite. I am captivated by its blend of science fiction and deep strategic thinking, reflecting my love for stories that challenge the mind and imagination.",
    },
    {
      title: "Snowboarding",
      icon: IconSnowboarding,
      description:
      "Snowboarding offers me an exhilarating escape to the mountains, where I can challenge myself against nature's splendid backdrop. The thrill of gliding down snowy slopes combines my love for adventure and the great outdoors, making every trip a memorable experience.",
    },
  ],
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    employmentType: "Internship",
    companyName: "Certinia",
    companyLink: "https://certinia.com",
    location: "Harrogate, UK",
    logo: certinia,
    iconBg: "#EE2A1F",
    date: "June 2022 - September 2022",
    summary: [
      "Implemented an automated Salesforce portfolio limit detection system using Git Hooks, Bash, and Python, improving workflow automation significantly",
      "Designed a Visual Studio Code Extension with TypeScript, Python, Go, and REST API to automate Salesforce data collection and enforce code standards, preventing limit overages and code errors"
    ],
    skills: [
      { title: "Golang", icon: IconBrandGolang },
      { title: "TypeScript", icon: IconBrandTypescript },
      { title: "Bash", icon: IconHash },
      { title: "Python", icon: IconBrandPython },
      { title: "RestAPI", icon: IconApi },
      { title: "Salesforce", icon: IconCloudCode },
      { title: "VS Code", icon: IconBrandVisualStudio },
    ],
  },
  {
    title: "Salesforce Development Intern",
    employmentType: "Internship",
    companyName: "Full Potential Solutions",
    companyLink: "https://www.fpsinc.com",
    location: "Kansas City, MO",
    logo: fps,  // Update with actual FPS logo
    iconBg: "#fff",
    date: "May 2021 - September 2021",
    summary: [
      "Wrote APEX test classes with integrated SOQL in order to maintain optimal code coverage between Salesforce updates",
      "Collaborated in developing and managing workflow rules, processes, and APEX triggers, significantly speeding up customer query response times and improving data availability on their dashboards"
    ],
    skills: [
      { title: "Salesforce", icon: IconCloudCode },
      { title: "Java / APEX", icon: IconCoffee },
      { title: "SQL", icon: IconSql },
    ],
  },
  {
    title: "Software Engineer Intern",
    employmentType: "Internship",
    companyName: "GridSME",
    companyLink: "https://www.gridsme.com",  // Update with actual link
    location: "Folsom, CA",
    logo: gridsme,  // Update with actual GridSME logo
    iconBg: "#EE2A1F",
    date: "July 2020 - December 2020",
    summary: [
      "Enhanced customer experience by developing a dashboard that dynamically displays weather and electricity sensor data, utilizing server-side Python API calls for real-time data processing and visualization",
      "Developed and sped up website’s customer portal using JavaScript and JQuery, decreasing time spent waiting by ~17%"
    ],
    skills: [
      { title: "Python", icon: IconBrandPython },
      { title: "JavaScript", icon: IconBrandJavascript },
      { title: "JQuery", icon: IconBrandJavascript },
      { title: "RestAPI", icon: IconApi },
      // Add more skills as needed
    ],
  },
  {
    title: "Co-Founder / Chief Technology Officer",
    employmentType: "Full-time",
    companyName: "Go Off!",
    companyLink: "https://www.gooff.com",  // Update with actual link
    location: "Boston, MA",
    logo: gooff,  // Update with actual Go Off! logo
    iconBg: "#EE2A1F",
    date: "January 2020 - February 2021",
    summary: [
      "Played a pivotal role in major company decisions, impacting company direction, financial strategies, and hiring, as well as leading tech discussions and driving technology initiatives",
      "Secured over $10,000 in funding by entering various startup competitions and pitching to potential company investors",
      "Led a tech team of four devs in order to develop our website, chrome extension, and chat room service using JavaScript, and Python. We supplemented our site with MongoDB, MySQL, and AWS to manage data and launch our site which had over 600 registered users"
    ],
    skills: [
      { title: "JavaScript", icon: IconBrandJavascript },
      { title: "Python", icon: IconBrandPython },
      { title: "Node.JS", icon: IconBrandNodejs },
      { title: "SQL", icon: IconSql },
      { title: "AWS", icon: IconBrandAws },
      { title: "MongoDB", icon: IconBrandMongodb },
    ],
  },
  {
    title: "Quality Assurance Engineer Intern",
    employmentType: "Internship",
    companyName: "Ooma",
    companyLink: "https://www.ooma.com",  // Update with actual link
    location: "Sunnyvale, CA",
    logo: ooma,  // Update with actual Ooma logo
    iconBg: "#EE2A1F",
    date: "June 2019 - December 2019",
    summary: [
      "Automated log-collecting and client-side server testing interface in Python, achieving an over 80% reduction in log retrieval and testing operational time",
      "Tested pre-release iOS and Android builds of enterprise and consumer applications. Discovered, tested, logged, and reported over 70 bugs in the beta build"
    ],
    skills: [
      { title: "Python", icon: IconBrandPython },
      { title: "Selenium", icon: IconTestPipe },
      { title: "VoIP / SIPp testing", icon: IconPhone },
    ],
  },
];


export const projects: Project[] = [
  {
    id: 1,
    projectType: ProjectType.MOBILE_APP,
    title: "Spam Detection Bot",
    summary: [
      "Developed an AI/NLP Spam Detection Bot in Python using Flask, applying Naive Bayes and Logistic Regression to distinguish spam in emails and SMS with 98.8% accuracy.",
      "Managed data acquisition and cleaning, ensuring consistensy between datasets.",
      "Created a user-friendly tool allowing users to input texts for immediate spam evaluation, providing a determination accompanied by a confidence score ",
      "Achieved a false positive rate of less than 0.01%, minimizing the misclassification of legitimate messages as spam.",
    ],
    description:
      "This project showcases the development of an AI/NLP-driven Spam Detection Bot, leveraging Python and Flask. By applying sophisticated algorithms such as Naive Bayes and Logistic Regression, it achieves a remarkable 98.8% accuracy in identifying spam across emails and SMS. The bot features a user-friendly interface for real-time spam evaluation, boasting an impressively low false positive rate, making it a highly reliable tool for spam detection.",
    skills: [
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "Flask",
        icon: IconFlask,
      },
      {
        title: "Machine Learning",
        icon: IconInputAi,
      },
      {
        title: "Statistical Analysis",
        icon: IconDeviceAnalytics,
      },
    ],
    link: "https://github.com/sabeer-narula/NLP-Spam-Detection/",
    hero: "",
    // images: "",
    // demo: "",
    delay: 0.6,
    color: "#2FD4A3",
  },
  {
    id: 2,
    projectType: ProjectType.WEB_APP,
    title: "Data Analytics Research: Impact on Weather on Baseball Pitches",
    summary: [
      "Collaborated with Dr. Andy Andres in a data analytics research project, analyzing over 9 million baseball pitches to study the effects of weather patterns.",
      "Uncovered key insights demonstrating that air temperature, humidity, dew point, air pressure, wind, and rain significantly affect pitch speed, spin, trajectory, and break of a pitch.",
      "Utilized R, SABRmetrics data, and weather station API calls in order to clean up data and find correlations between pitch statistics and current weather conditions.",
      "Used Python for data processing and graph visualization when presenting findings.",
    ],
    description:
      "In collaboration with Dr. Andy Andres, this research project delved into the significant effects of weather patterns on baseball pitches, analyzing a dataset of over 9 million pitches. Through meticulous data analytics using R and Python, key insights were uncovered about how environmental factors influence pitch dynamics. This work highlights the intersection of sports science and data analytics, presenting findings through engaging visualizations.",
    skills: [
      {
        title: "R",
        icon: IconLetterR,
      },
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "Statistical Analysis",
        icon: IconDeviceAnalytics,
      },
      {
        title: "Rest API",
        icon: IconApi,
      },
      {
        title: "SQL",
        icon: IconSql,
      },
    ],
    link: "",
    hero: "",
    // images: "",
    // demo: "",
    delay: 0.8,
    color: "#093d61",
  },
  {
    id: 3,
    projectType: ProjectType.MOBILE_APP,
    title: "Spotify Popular Music Analytics",
    summary: [
      "Conducted an in-depth analysis of the top 500 songs on Spotify, examining attributes like genre, acousticness, danceability, tempo, and more using R/R Studio and Spotify API for data acquisition and analysis.",
      "Performed advanced statistical analytics to identify key determinants of song popularity, finding significant covariates including danceability, loudness, speechiness, instrumentalness, valence, and explicit content.",
      "Ran comprehensive regression analyses to discern statistically significant correlations and indicators when compared to a random sample.",
    ],
    description:
      "This project involved a comprehensive analysis of Spotify's top 500 songs to decode the attributes contributing to song popularity. Utilizing R/R Studio and the Spotify API, it uncovered correlations between song features and their popularity, employing advanced statistical techniques. The analysis provides valuable insights into the music industry, offering a data-driven understanding of what makes a song successful on the platform.",
    skills: [
      {
        title: "Python",
        icon: IconCoffee,
      },
      {
        title: "Statistical Analytics",
        icon: IconDeviceAnalytics,
      },
      {
        title: "Spotify API",
        icon: IconBrandSpotify,
      },
    ],
    link: "",
    hero: "",
    // images: "",
    // demo: "",
    delay: 1,
    color: "#1a4331",
  },
  {
    id: 4,
    projectType: ProjectType.WEB_APP,
    title: "Treasurer and teacher for Girls Who Code",
    summary: [
      "Led the development and teaching of comprehensive workshops for Python, JavaScript, and GitHub in order to foster coding skills among group members.",
      "Mentored college students in advanced programming concepts as well as teaching younger learners through weekly Scratch sessions for elementary students and Python lessons for middle school students.",
      "Played a pivotal role in coaching students through hackathon events.",
      "Facilitated connections between students and recruiters, enhancing career opportunities for group members by exposing them to potential employers and industry leaders seeking tech talent.",
      "As treasurer and an e-board leader, balanced administrative responsibilities with a strong focus on technical education and empowerment, in order to help inspire women in technology.",
    ],
    description:
      "Demonstrating a commitment to empowering women in technology, this project involved leading and teaching coding workshops in Python, JavaScript, and using GitHub. By mentoring students across different age groups and facilitating their participation in hackathons, this initiative not only enhanced coding skills but also connected aspiring programmers with career opportunities, showcasing leadership and a dedication to diversity in tech.",
    skills: [
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "Figma",
        icon: IconBrandFigma,
      },
      {
        title: "AWS",
        icon: IconBrandAws,
      },
      {
        title: "Github",
        icon: IconBrandGithub,
      },
    ],
    link: "https://github.com/sabeer-narula/GirlsWhoCode/",
    hero: "",
    // images: ,
    // demo: "",
    delay: 1.2,
    color: "#417285",
  },
  {
    id: 5,
    projectType: ProjectType.WEB_APP,
    title: "Zombie First Person Shooter Game",
    summary: [
      "Developed a zombie survival first-person shooter game using Unreal Engine, which led to winning first place in a game development contest hosted by COSMOS: UC Santa Cruz.",
      "Crafted a challenging and engaging gameplay experience, featuring an immersive environment where zombies continuously spawn and attack the player in a satisfying gameplay loop.",
      "Played a central role in coding and asset creation, including implementing gun mechanics, ammo and health systems, a UI interface, dynamic elements like elevators and moving doors, as well as coding the AI for zombie behavior.",
      "Utilized Blender to create shooting animations and design detailed environment assets.",
    ],
    description:
      "This engaging project resulted in the creation of a first-person shooter game featuring a dynamic zombie survival theme, which won first place in a game development contest. Utilizing Unreal Engine and Blender, it offers an immersive gameplay experience with sophisticated mechanics and AI, highlighting skills in game design, programming, and asset creation.",
    skills: [
      {
        title: "Unreal Engine",
        icon: IconDeviceGamepad,
      },
      {
        title: "C++",
        icon: IconBrandCpp,
      },
      {
        title: "Blender",
        icon: IconBrandBlender,
      },
    ],
    link: "",
    hero: "",
    // images: ,
    // demo: "",
    delay: 1.4,
    color: "gold",
  },
  {
    id: 6,
    projectType: ProjectType.WEB_APP,
    title: "Multi-threaded image processing server",
    summary: [
      "Designed and implemented a multi-threaded server in C, capable of processing image manipulation requests concurrently, emphasizing throughput and efficiency with simultaneous client requests.",
      "Integrated advanced image processing techniques by manipulating pixel data, including rotation, blurring, sharpening, and edge detection, through custom algorithms developed in imglib.c.",
      "Employed concurrency and synchronization mechanisms, such as semaphores and mutexes, in server_mimg.c to ensure thread safety and maintain data integrity across multiple parallel threads.",
      "Implemented a FIFO queue system for request handling with a specified maximum queue size, effectively managing client requests and ensuring orderly processing in a high-load environment.",
    ],
    description:
      "This technical project focused on designing a multi-threaded server in C for efficient image processing, capable of handling multiple requests concurrently. It showcases advanced programming skills, including the use of concurrency mechanisms and custom algorithms for image manipulation, emphasizing throughput and efficiency in a server environment designed for high-load processing.",
    skills: [
      {
        title: "C",
        icon: IconCircleLetterC,
      },
    ],
    link: "https://github.com/sabeer-narula/multi-threaaded-image-processing-server/",
    hero: "",
    // images: "",
    // demo: "",
    delay: 1.4,
    color: "gold",
  },
];

export const footerText = `Copyright © 2024 - ${new Date().getFullYear()} | All Rights Reserved`;
