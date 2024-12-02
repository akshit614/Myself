import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const ABOUT_TEXT = `Hi I'm Divyanshu Chaudhary, passionate full stack developer based in Kashipur, Uttarakhand, India. Aiming for great opportunities where i can contribute with my skills. I have created and successfully deployed many projects in this domain. I also have experties in machine learning and AI domain as i have created many ML models trained on different datasets that gives best accuracies.
More about this you can find on my github.`
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Self Learner",
    company: "",
    description: `Gaining skills by which i can build some real time application mostly on web. Aiming for great opportunities where i can contribute with my skills. Learning full stack technologies to create optimized backend systems and interecting user interfaces. Alongside gaining information about machine learning and artificial technologies. `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "7/2023 - 9/2023",
    role: "Machine Learning Intern ",
    company: "Codsoft",
    description: `Created many different machine learning models trained on different datasets that can solve real time problems. some of them are Credit card fraud detection model, Real or fake news classifier and more.`,
    technologies: ["Python", "Numpy", "Sk-Learn", "NLP" ,"Pandas", "matplotlib", "ML-Algos"],
  },
  
];

export const PROJECTS = [
  {
    title: "Code Mate",
    image: project2,
    livelink : "https://code-mate-ai.vercel.app/",
    github : "https://github.com/akshit614/CodeMate-Ai",
    description: ["A Gemini 1.5-powered app to generate code snippets with explanations and notes.", "It keeps track of your previous queries and response code listed on the dashboard.",   "Used Express for backend, React for frontend, MongoDB NoSql Database for text-based data and Tailwind for styling and Gemini API."],
    technologies: ["Express", "Gemini", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Script Life",
    image: project1,
    livelink : "https://scriptlife.vercel.app/",
    github : "https://github.com/akshit614/Script-Life",
    description: ["Web app for reading and sharing valuable information via blogs.", 
      "Let users create new blogs and read insights shared by others, used by 5+ users.",   
      "Used Cloudflare workers and Hono.js to create and deploy a fast and serverless scalable backend system."],
    technologies: ["Cloudflare", "Tailwind", "React", "Hono.js", "NeonDB", "Prisma"],
  },
  {
    title: "Pay-Way",
    image: project3,
    livelink : "https://payway-ten.vercel.app/",
    github : "https://github.com/akshit614/Payments-transfer-app",
    description: ["Web app project for making payments scaled to 10 users.", "Gives you a random initial balance and a list of users to further make transactions.",   "Used Zod for input validation and JWTs for managing sessions and securing API endpoints."],
    technologies: ["Javascript", "Tailwind", "React", "Postman", "MongoDB"],
  }
];

export const CONTACT = {
  address: "Kashipur, Udham singh Nagar, Uttarakhand, India",
  phoneNo: "+91 8445957631",
  email: "akkisingh8266@gmail.com",
};
