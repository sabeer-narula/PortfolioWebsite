import {
  certinia,
  fps,
  gooff,
  gridsme,
  ooma,
  instock,
  instockDemo,
  wrackreport,
  wrackreportDemo,
  prayerpal,
  prayerpalDemo,
  e2s,
  e2sDemo,
  hafod,
  hafodDemo,
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

export const cvPath = "/assets/Sabeer_Narula_Resume.pdf";


export const about: About = {
  description:
    "As a passionate software engineer, I thrive on the thrill of solving complex problems and continuously expanding my technical knowledge. My enthusiasm for technology is matched only by my eagerness to learn and innovate, ensuring I stay at the forefront of software development trends and techniques.",
  interests: [
    {
      title: "Basketball",
      icon: IconBallBasketball,
      description:
        "Basketball is not just a sport for me; it's a passion. I love the excitement of playing, feeling the rush of adrenaline as I make a play. Off the court, I'm an avid fan of the Golden State Warriors, following their games with keen interest and admiration for their skill and team dynamics.",
    },
    {
      title: "Snowboarding",
      icon: IconSnowboarding,
      description:
        "Snowboarding offers me an exhilarating escape to the mountains, where I can challenge myself against nature's splendid backdrop. The thrill of gliding down snowy slopes combines my love for adventure and the great outdoors, making every trip a memorable experience.",
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
      title: "Developing Video Games",
      icon: IconDeviceGamepad,
      description:
        "Creating video games is where my creative and technical skills converge. From conceptualizing game mechanics to coding and designing, every step in the process fuels my passion for interactive storytelling and immersive experiences.",
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
      "Streamlines inventory management for small independent sellers.",
      "User-friendly mobile application.",
      "Modern and intuitive design.",
      "Manages stock levels efficiently across platforms (Etsy, Shopify, Faire).",
      "Centralised hub for unified and accurate stock representation.",
      "Seamless integration with popular selling platforms.",
      "Notifies users of low stock levels and stockouts.",
      "Provides a reliable single source of truth for inventory management.",
    ],
    description:
      "This project aims to streamline inventory management for small independent sellers by offering a user-friendly mobile application. The app features a modern and intuitive design, facilitating efficient stock level management across various selling platforms like Etsy, Shopify, and Faire. It serves as a centralised hub that seamlessly integrates with popular selling platforms, ensuring a unified and accurate representation of stock levels. Through strategic integrations, the application notifies users of low stock levels and stockouts, providing a reliable single source of truth for inventory management.",
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
    link: "https://github.com/AbdulMiah/InStock",
    hero: "",
    images: instock,
    demo: instockDemo,
    delay: 0.6,
    color: "#2FD4A3",
  },
  {
    id: 2,
    projectType: ProjectType.WEB_APP,
    title: "Data Analytics Research: Impact on Weather on Baseball Pitches",
    summary: [
      "Comprehensive platform for flood incident management.",
      "Empowers residents and local councils.",
      "User-friendly website for seamless reporting and tracking.",
      "Interactive map functionalities for pinpointing incident locations.",
      "Residents submit detailed reports with flood type, descriptions, images/videos, contact details, and timestamps.",
      "Local councils have secure login for efficient navigation and focused investigation.",
      "Convenient table of report overviews for councils.",
    ],
    description:
      "A comprehensive platform designed to empower residents and local councils in addressing flood incidents swiftly and effectively. This user-friendly website facilitates seamless reporting and tracking of flood-related incidents, offering key features such as interactive map functionalities. Residents can effortlessly click on the map to pinpoint incident locations and submit detailed reports, including crucial information like flood type, descriptions, images/videos, contact details, and timestamps. The local council benefit from secure login capabilities, gaining access to a convenient table of report overviews for efficient navigation and focused investigation.",
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
    link: "https://github.com/AbdulMiah/WrackReport",
    hero: "",
    images: wrackreport,
    demo: wrackreportDemo,
    delay: 0.8,
    color: "#093d61",
  },
  {
    id: 3,
    projectType: ProjectType.MOBILE_APP,
    title: "Spotify Popular Music Analytics",
    summary: [
      "Islamic prayer application for Muslims.",
      "Digital prayer schedule for accessibility and convenience.",
      "Global prayer times search with map functionality.",
      "Compass feature for determining prayer direction.",
      "Prayer tracker to mark completed prayers throughout the day.",
      "Page with a list of supplications (Duas) to enhance prayers.",
      "Notification system for timely alerts about the next prayer.",
    ],
    description:
      "Recognising the significance of prayer as one of the fundamental pillars of Islam, this is a practical Islamic prayer application for Muslims. The objective is to provide a more accessible and convenient option with a digitally displayed prayer schedule, allowing users to track their prayers from anywhere. The application incorporates various features, including a map functionality for searching prayer times globally, a compass to determine the prayer direction, a tracker enabling users to mark completed prayers throughout the day, a page offering a list of supplications (Duas) for users to enhance their prayers, and a notification system to alert users when it is time for the next prayer.",
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
    link: "https://github.com/AbdulMiah/PrayerPal",
    hero: "",
    images: prayerpal,
    demo: prayerpalDemo,
    delay: 1,
    color: "#1a4331",
  },
  {
    id: 4,
    projectType: ProjectType.WEB_APP,
    title: "Treasurer and teacher for Girls Who Code",
    summary: [
      "Data visualisation tool for Facility Energy Managers to help monitor energy performance.",
      "Automated email updates for energy asset performance.",
      "Visual energy flow diagram for intuitive insights.",
      "Data consolidation for streamlined analysis.",
      "Accurate energy cost and consumption forecasting.",
      "Adjustable granularity on charts for user customisation.",
      "Access to historical reports for informed decision-making.",
      "Seamless switching between different sites.",
      "Admin functionalities: importing energy data, user management, site management, organisation management.",
    ],
    description:
      "This project addresses the identified problem of energy site managers, specifically facility energy managers, lacking essential data and tools for making informed decisions on energy cost savings and emission reduction. Key features include automated email updates on energy asset performance, a visual energy flow diagram for intuitive insights, data consolidation for streamlined analysis, and accurate energy cost and consumption forecasting. Users can easily adjust granularity on charts, access historical reports, and switch between sites. Admin functionalities encompass importing energy data, user management, site management, and organisation management.",
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
    link: "https://github.com/AbdulMiah/E2S-System",
    hero: "",
    images: e2s,
    demo: e2sDemo,
    delay: 1.2,
    color: "#417285",
  },
  {
    id: 5,
    projectType: ProjectType.WEB_APP,
    title: "Zombie First Person Shooter Game",
    summary: [
      "Software solution for a non-profit organisation focusing on affordable homes and support services.",
      "Features a map displaying Hafod's properties across Wales.",
      "Includes a heatmap for real-time COVID-19 cases near Wales and Hafod properties.",
      "Utilises bar graphs to show vaccination and infection status of residents.",
      "Incorporates a pie chart indicating popular vaccines among carers and tenants.",
      "Accessible to both carers and administrators for real-time updates.",
      "Admins can view and manage tenant and carer information through tables.",
    ],
    description:
      "This software is a tailored solution for a non-profit organisation committed to providing affordable homes and comprehensive support services. The platform features an interactive map showcasing Hafod's properties across Wales, alongside a dynamic heatmap offering real-time insights into COVID-19 cases in proximity to both Wales and Hafod properties. Through clear and informative bar graphs, the software presents the vaccination and infection status of residents, while a pie graph highlights popular vaccines among carers and tenants. Accessible to both carers and administrators, the user-friendly interface ensures real-time updates, with administrators having additional capabilities to manage tenant and carer information efficiently through intuitive tables.",
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
    link: "https://github.com/AbdulMiah/Hafod-Data",
    hero: "",
    images: hafod,
    demo: hafodDemo,
    delay: 1.4,
    color: "gold",
  },
  {
    id: 6,
    projectType: ProjectType.WEB_APP,
    title: "Multi-threaded image processing server",
    summary: [
      "Software solution for a non-profit organisation focusing on affordable homes and support services.",
      "Features a map displaying Hafod's properties across Wales.",
      "Includes a heatmap for real-time COVID-19 cases near Wales and Hafod properties.",
      "Utilises bar graphs to show vaccination and infection status of residents.",
      "Incorporates a pie chart indicating popular vaccines among carers and tenants.",
      "Accessible to both carers and administrators for real-time updates.",
      "Admins can view and manage tenant and carer information through tables.",
    ],
    description:
      "This software is a tailored solution for a non-profit organisation committed to providing affordable homes and comprehensive support services. The platform features an interactive map showcasing Hafod's properties across Wales, alongside a dynamic heatmap offering real-time insights into COVID-19 cases in proximity to both Wales and Hafod properties. Through clear and informative bar graphs, the software presents the vaccination and infection status of residents, while a pie graph highlights popular vaccines among carers and tenants. Accessible to both carers and administrators, the user-friendly interface ensures real-time updates, with administrators having additional capabilities to manage tenant and carer information efficiently through intuitive tables.",
    skills: [
      {
        title: "C",
        icon: IconCircleLetterC,
      },
    ],
    link: "https://github.com/AbdulMiah/Hafod-Data",
    hero: "",
    images: hafod,
    demo: hafodDemo,
    delay: 1.4,
    color: "gold",
  },
];

export const footerText = `Copyright © 2023 - ${new Date().getFullYear()} | All Rights Reserved | Developed with passion by Abdul Muktadir Miah.`;
