import fitness from "./assets/fitness.png";
import foodapp from "./assets/foodapp.png";
import feedbackform from "./assets/feedbackform.png";
import raretube from "./assets/raretube.png";
import renthome from "./assets/renthome.png";
import shopper from "./assets/shopper.png";
import tictactoe from "./assets/tic.png";
import money from "./assets/money.png";
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
    name: " FrontEnd  Development ",
    title: " React.js Developer ",
    description:
      "Building dynamic, high-performance, web applications using React.js which is commonly used in single-page applications due to its architecture and features to deliver seamless user experiences with responsive designs and efficient state management.",
  },
  {
    id: 2,
    name: "Web Development",
    title: "Front-End & Backend",
    description:
      "Crafting engaging, responsive user interfaces with modern technologies like React  to enhance user experience and performance.And connect with server  to  access data from Database.",
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
    responsive: true,
    description: `Developed a food booking website with capabilities for adding menu items, 
    placing orders, and processing payments. Enhanced the user experience with 
    a streamlined interface for easy menu management and secure transaction handling.
      Card=> 4000003560000008,
      month/year=> 06/29, CVV=> 567.`,
    github: "https://github.com/manoj-amirkalai/react-food-app",
    web: "https://manoj-food-app-frontend.onrender.com/",
  },
  {
    id: 2,
    img: feedbackform,
    responsive: true,
    category: "Next.JS",
    title: "FeedBackForm Admin Panel",
    description: `Our admin panel offers a streamlined solution for managing feedback forms,
     allowing you to effortlessly create, edit, or delete forms as needed.
      You can also access and analyze feedback data collected from your linked website directly 
      within the panel, ensuring a comprehensive view of user input.
        Seamless experience for both feedbackform  and data review.`,
    github: "https://github.com/manoj-amirkalai/feedbackform",
    web: "https://feedbackform-next-js.onrender.com/",
  },
  {
    id: 2,
    img: money,
    responsive: true,
    category: "Next.JS",
    title: "Money Tracker",
    description: `Introducing our money tracker app: easily log in to access a comprehensive table for filtering your transaction data. Visualize your spending with interactive bar charts that highlight trends and help you stay on budget!`,
    github: "https://github.com/manoj-amirkalai/expense-tracker",
    web: "https://budget-tracker-manoj.onrender.com",
  },
  {
    id: 3,
    img: renthome,
    category: "MERN",
    responsive: true,
    title: "Rent Home",
    description: `Developed a comprehensive rent home website with features booking, and listing properties. Integrated secure payment processing and a user-friendly interface to streamline property management.   Card=> 4000003560000008,
      month/year=> 06/29, CVV=> 567.`,
    github: "https://github.com/manoj-amirkalai/Rent-Home",
    web: "https://manoj-rent-home-frontend.onrender.com/",
  },
  {
    id: 4,
    img: raretube,
    category: "React.JS",
    responsive: true,
    title: "You-Tube",
    description: `A YouTube clone replicates the core features of the original platform, 
    allowing users  view videos by categorized. It offers a similar interface and functionality but may cater to niche audiences or specific content types.`,
    github: "https://github.com/manoj-amirkalai/RareTube",
    web: "https://raretube.onrender.com/",
  },
  {
    id: 5,
    img: fitness,
    responsive: true,
    category: "MERN",
    title: "Fitness App",
    description: `Developed a fitness tracker Website that allows
     users to monitor workouts, track progress, and set personalized health goals.
      Integrated real-time analytics 
    and social sharing features to enhance user engagement and motivation.`,
    github: "https://github.com/manoj-amirkalai/Fitness-Tracker",
    web: "https://manoj-fitness-tracker.onrender.com/",
  },
  {
    id: 6,
    img: shopper,
    category: "React.JS",
    responsive: true,
    title: "Shopping",
    description: `Developed a modern, responsive e-commerce UI that streamlined user 
    interactions and optimized the online shopping experience. 
    Implemented features such as  product updates, and secure checkout processes.`,
    github: "https://github.com/manoj-amirkalai/e-commerce",
    web: "https://manojs-e-commerce.onrender.com/",
  },
  {
    id: 7,
    img: flipkart,
    responsive: false,
    category: "React.JS",
    title: "Flipkart",
    description:
      "Developed the user interface for Flipkart's web browser platform, focusing on intuitive navigation and seamless shopping experiences. Implemented  design and dynamic elements to enhance user engagement and accessibility.",
    github: "https://github.com/manoj-amirkalai/flipkartUI",
    web: "https://flipkart-ui-app.onrender.com/",
  },
  {
    id: 8,
    img: amazon,
    responsive: false,
    category: "React.JS",
    title: "Amazon",
    description:
      "Designed and developed the Amazon Prime landing page, focusing on an engaging and intuitive layout. Enhanced user experience with targeted content and streamlined navigation to drive subscriptions and retention.",
    github: "https://github.com/manoj-amirkalai/UIPrime",
    web: "https://uiprime.onrender.com/",
  },
  {
    id: 9,
    responsive: false,
    img: netflix,
    category: "React.JS",
    title: "Netflix",
    description:
      "Developed the Netflix landing page, optimizing its design for enhanced user engagement and intuitive navigation. Implemented features to improve content accessibility and drive conversions.",
    github: "https://github.com/manoj-amirkalai/UINetflix",
    web: "https://netflix-ui-app.onrender.com/",
  },
  {
    id: 10,
    responsive: true,
    img: todo,
    category: "HTML+CSS+JS",
    title: "TODO",
    description:
      "Designed and developed a user-friendly to-do list website that allows users to efficiently manage and track their tasks. Implemented features like Edit , update and delete task ",
    github: "https://github.com/manoj-amirkalai/ToDo-List",
    web: "https://manoj-todo-list.onrender.com/",
  },
  {
    id: 11,
    img: postdes,
    responsive: false,
    category: "MERN",
    title: "Post Description",
    description: `Created a post description list website that enables users 
    to easily browse and manage detailed post content. Integrated features for Editing, Remove,
     and Update  content .`,
    github: "https://github.com/manoj-amirkalai/mernpostdescriptionapp",
    web: "https://mern-post-description-app.onrender.com/",
  },
  {
    id: 12,
    responsive: false,
    img: hulu,
    category: "React.JS",
    title: "Hulu",
    description:
      "Developed a Hulu-style website, featuring an intuitive interface for browsing movies list. Implemented user-friendly filters and personalized recommendations to enhance the viewing experience.",
    github: "https://github.com/manoj-amirkalai/huluapp",
    web: "https://hulu-app.onrender.com/",
  },
  {
    id: 13,
    responsive: true,
    img: tictactoe,
    category: "React.JS",
    title: "TicTacToe",
    description:
      "Developed an interactive Tic-Tac-Toe website with a clean, responsive design for seamless gameplay. Incorporated real-time move updates and win detection to provide an engaging user experience",
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

  //   {
  //     id: 4,
  //     title: "Front-End Developer",
  //     subtitle: "TCS",
  //     date: "Nov / 2021 - PRESENT",
  //     description: `Working for an Australia-based WESTPAC Bank project on 4 apppcations
  // Assisted in the development of user inteface web applications, focusing on front-end technologies with modern JavaScript frameworks, HTML5, and CSS3.
  // Developed documentation to train new team members in company standards.
  // Collaborates with onshore team members and clients to complete tasks within the deadline, resulting in 100% on-time delivery and delivers defect-free projects.`,
  //     category: "experience",
  //   },

  {
    id: 4,
    title: "React Developer",
    subtitle: "Standard Chartered - Singapore",
    date: "JULY-2023 - PRESENT",
    // "description": `As a Front-End Developer specializing in React.js, I excel in crafting responsive, high-performance web applications. My expertise lies in delivering seamless
    //  user experiences and optimizing applications for speed and scalability.\n- Developed reusable UI components and functional conditions, creating a shared library for other developers
    //  to efficiently build pages and maintain consistency across the application.\n- Developed and maintained high-quality web applications using React.js to ensure top-notch performance and
    //  responsiveness.\n- Collaborated with cross-functional teams, including designers, backend developers, and product managers, to deliver cohesive and user-centric products.\n-
    //   Implemented best practices to enhance application performance and scalability, ensuring smooth user experience even under high load conditions.\n- Ensured code quality by writing clean, maintainable,
    //    and well-documented code, and performing thorough testing to
    // ensure robust and reliable applications.\n- Troubleshot and resolved issues efficiently, contributing to the overall stability and reliability of applications.`,
    description: `As a Front-End Developer specializing in React.js, I develop responsive, high-performance web applications optimized for speed and scalability. I create reusable UI components and libraries to maintain consistency across the application, collaborate with cross-functional teams, and ensure high-quality, maintainable code. My role also involves troubleshooting and resolving issues to ensure stability and reliability.`,
    category: "experience",
  },
  {
    id: 5,
    title: "React Developer",
    subtitle: "Singapore Airlines-Singapore",
    date: "OCT-2022 - JULY-2023",
    description:
      "As a React Developer at Singapore Airlines, I was responsible for designing and developing responsive UI screens using Lit library in React.js, ensuring a seamless user experience across devices.\n- Integrated RESTful APIs to fetch and display dynamic data, improving application functionality and interactivity.\n- Collaborated with backend teams to ensure smooth data flow and proper handling of API responses.\n- Optimized API calls for performance and error handling, ensuring a robust and efficient frontend.",
    category: "experience",
  },
  {
    id: 6,
    title: "React UI Developer",
    subtitle: "WESTPAC-Australia",
    date: "NOV 2021 - OCT-2022",
    description:
      "As a React UI Developer, I focused on building dynamic, responsive user interfaces using React.js and modern JavaScript.\n- Collaborated with UX/UI designers to translate design mockups into pixel-perfect, interactive components.\n- Ensured code quality and scalability by following best practices, including component reusability and modular architecture.\n- Maintained and updated UI components, ensuring timely delivery of features and bug fixes.",
    category: "experience",
  },
  {
    id: 7,
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
    name: "Krishna Raikar, Vaishnavi",
    author: "Team Member",
    description: `Highly skilled React developer with a strong ability to create efficient, user-friendly interfaces and dynamic applications.
     Consistently produces clean, well-documented code and provides valuable insights during team discussions.`,
  },
  {
    id: 2,
    img: Testimonial2,
    name: "M Premnath",
    author: "Team lead",
    description: `Exceptional React developer with a strong grasp of modern front-end technologies and best practices. 
    Delivers high-quality, maintainable code and effectively integrates complex features with seamless user interfaces. 
     Demonstrates a deep commitment to both technical excellence and team success.`,
  },
  {
    id: 3,
    img: Testimonial3,
    name: "V V S Krishna Prasad Challa",
    author: "Team Manager",
    description: `An outstanding React developer with a deep understanding of component-based architecture and state management.
     Consistently delivers high-quality, scalable solutions while maintaining a keen focus on performance and user experience.
      Highly collaborative and proactive, contributing effectively to team goals and project success. `,
  },
];
