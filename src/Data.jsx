import fitness from "./assets/fitness.png";
import foodapp from "./assets/foodapp.png";
import renthome from "./assets/renthome.png";
import shopper from "./assets/shopper.png";
import tictactoe from "./assets/tic.png";
import flipkart from "./assets/flipkart.jpg";
import amazon from "./assets/amazon.jfif";
import netflix from "./assets/netflix.jfif";
import hulu from "./assets/hulu.jfif";
import postdes from "./assets/postdes.jpg";
import todo from "./assets/todo.png";

import Testimonial1 from "./assets/testimonial1.jpg";
import Testimonial2 from "./assets/testimonial2.jpg";
import Testimonial3 from "./assets/testimonial3.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Works",
    path: "works",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  // {
  //   name: "Blog",
  //   path: "blog",
  // },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Front-End & Backend",
    description:
      "Crafting engaging, responsive user interfaces with modern technologies like React  to enhance user experience and performance.And connect with server  to  access data from Database.",
  },
  {
    id: 2,
    name: " FrontEnd  Development ",
    title: " React.js Developer ",
    description:
      "Building dynamic, high-performance, web applications using React.js which is commonly used in single-page applications due to its architecture and features to deliver seamless user experiences with responsive designs and efficient state management.",
  },
  {
    id: 3,
    name: " Full Stack Development ",
    title: "MERN Stack Developer",
    description:
      " Delivering full-stack web applications with the MERN stack, integrating MongoDB for robust databases, Express.js for scalable server-side logic, React.js for dynamic front-end interfaces, and Node.js for efficient back-end operations.",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML5",
    percentage: 85,
    description: "",
  },

  {
    id: 2,
    name: "CSS3",
    percentage: 75,
    description: "",
  },

  {
    id: 3,
    name: "JavaScript",
    percentage: 90,
    description: "",
  },

  {
    id: 4,
    name: "React.js",
    percentage: 75,
    description: "",
  },

  {
    id: 5,
    name: "MERN",
    percentage: 70,
    description: "",
  },

  {
    id: 6,
    name: "Next.js",
    percentage: 80,
    description: "",
  },
];

export const projects = [
  {
    id: 1,
    img: foodapp,
    category: "MERN",
    title: "Food App",
    description: `Food website to order food.It was inspired by Zomato and swiggy.
      For payment please use dummy card details.
      Card=> 4000003560000008,
      month/year=> 06/29, CVV=> 567.`,
    github: "https://github.com/manoj-amirkalai/react-food-app",
    web: "https://manoj-food-app-frontend.onrender.com/",
  },
  {
    id: 2,
    img: renthome,
    category: "MERN",
    title: "Rent Home",
    description: ` A Website to book home or room for vacation.
                  For payment please use dummy card details. 
                  Card=> 4000003560000008
                  month/year=> 06/29
                  CVV=> 567`,
    github: "https://github.com/manoj-amirkalai/Rent-Home",
    web: "https://manoj-rent-home-frontend.onrender.com/",
  },
  {
    id: 3,
    img: fitness,
    category: "MERN",
    title: "Fitness App",
    description: `Fitness website to track daily life excercise by 
    collecting your excercise details.`,
    github: "https://github.com/manoj-amirkalai/Fitness-Tracker",
    web: "https://manoj-fitness-tracker.onrender.com/",
  },
  {
    id: 4,
    img: shopper,
    category: "React.JS",
    title: "Shopping",
    description: `E-commerce website to order clothes.It was inspired by Flipkart.`,
    github: "https://github.com/manoj-amirkalai/e-commerce",
    web: "https://manojs-e-commerce.onrender.com/",
  },
  {
    id: 5,
    img: flipkart,
    category: "React.JS",
    title: "Flipkart",
    description: "Flipkart user interface for web browsers.",
    github: "https://github.com/manoj-amirkalai/flipkartUI",
    web: "https://flipkart-ui-app.onrender.com/",
  },
  {
    id: 6,
    img: amazon,
    category: "React.JS",
    title: "Amazon",
    description: "Flipkart landing home page.",
    github: "https://github.com/manoj-amirkalai/UIPrime",
    web: "https://uiprime.onrender.com/",
  },
  {
    id: 7,
    img: netflix,
    category: "React.JS",
    title: "Netflix",
    description: "Netflix landing home page.",
    github: "https://github.com/manoj-amirkalai/UINetflix",
    web: "https://netflix-ui-app.onrender.com/",
  },
  {
    id: 8,
    img: todo,
    category: "HTML+CSS+JS",
    title: "TODO",
    description: "TODO website for daily checklist.",
    github: "https://github.com/manoj-amirkalai/ToDo-List",
    web: "https://manoj-todo-list.onrender.com/",
  },
  {
    id: 9,
    img: postdes,
    category: "MERN",
    title: "Post Description",
    description: `Post Descriptionapp.
                 By using this website we can create,update and delete posts.`,
    github: "https://github.com/manoj-amirkalai/mernpostdescriptionapp",
    web: "https://mern-post-description-app.onrender.com/",
  },
  {
    id: 10,
    img: hulu,
    category: "React.JS",
    title: "Hulu",
    description: "Hulu website to get categorized movies list.",
    github: "https://github.com/manoj-amirkalai/huluapp",
    web: "https://hulu-app.onrender.com/",
  },
  {
    id: 11,
    img: tictactoe,
    category: "React.JS",
    title: "TicTacToe",
    description:
      "A refreshing dual player game to spend free time with friends.",
    github: "https://github.com/manoj-amirkalai/tictactoe",
    web: "https://manoj-tictactoe-game.onrender.com/",
  },
];

export const cv = [
  {
    id: 1,
    title: "Bachelor Degree",
    subtitle: "Aeronautical Engineering - 75%",
    date: "2017- 2021",
    description: "",
    category: "education",
  },

  {
    id: 2,
    title: "HSC",
    subtitle: "Secondary School - 85%",
    date: "2016 - 2017",
    description: "",
    category: "education",
  },

  {
    id: 3,
    title: "SSLC",
    subtitle: "High School - 97%",
    date: "2014 - 2015",
    description: "",
    category: "education",
  },

  {
    id: 4,
    title: "Front-End Developer",
    subtitle: "TCS",
    date: "Nov / 2021 - PRESENT",
    description: `Working for an Australia-based WESTPAC Bank project on 4 apppcations
Assisted in the development of user inteface web applications, focusing on front-end technologies with modern JavaScript frameworks, HTML5, and CSS3.
Developed documentation to train new team members in company standards.
Collaborates with onshore team members and clients to complete tasks within the deadline, resulting in 100% on-time delivery and delivers defect-free projects.`,
    category: "experience",
  },{
    id: 5,
    title: "Web Developer",
    subtitle: "Self Development",
    date: "2021 - PRESENT",
    description: `Deepened my expertise in MERN stack technologies by mastering MongoDB, Express.js, React.js, and Node.js.
     Successfully developed over 40 diverse projects and deployed over 20+ diverse projects, 
     ranging from dynamic web applications to complex server-side solutions.`,
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Rakshana",
    author: "Team Member",
    description: `Highly skilled React developer with a strong ability to create efficient, user-friendly interfaces and dynamic applications.
     Consistently produces clean, well-documented code and provides valuable insights during team discussions.`,
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Gowtham",
    author: "Team lead",
    description: `Exceptional React developer with a strong grasp of modern front-end technologies and best practices. 
    Delivers high-quality, maintainable code and effectively integrates complex features with seamless user interfaces. 
     Demonstrates a deep commitment to both technical excellence and team success.`,
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Siva",
    author: "Team Manager",
    description: `An outstanding React developer with a deep understanding of component-based architecture and state management.
     Consistently delivers high-quality, scalable solutions while maintaining a keen focus on performance and user experience.
      Highly collaborative and proactive, contributing effectively to team goals and project success. `,
  },
];
