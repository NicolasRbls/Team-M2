import { FlagIconCode } from 'react-flag-kit';

export interface Player {
  id: number;
  name: string;
  age: number;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  countryCode: FlagIconCode;
  codingStrengths: string;
  codingWeaknesses: string;
  biggestAchievement: string;
  funFact: string;
  photo: string;
}

export const players: Player[] = [
  {
    id: 1,
    name: "Nicolas Robles",
    age: 22,
    dateOfBirth: "2003-07-23",
    placeOfBirth: "Libourne , France",
    nationality: "France",
    countryCode: "FR",
    codingStrengths: "React, Node.js , php , Kubernetes , Docker , Flask",
    codingWeaknesses: "CSS , TypeScript",
    biggestAchievement: "Created a mobile app called HealthyCore, focused on fitness and nutrition.",
    funFact: "Practice scuba diving and have earned several diving certifications.",
    photo: "/images/NR-pdp.jpg"
  },
  {
    id: 2,
    name: "Achille POIRIER",
    age: 22,
    dateOfBirth: "2003-06-01", 
    placeOfBirth: "Marseille , France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Backend, CI/CD, K8s",
    codingWeaknesses: "CSS styling, UI/UX design, Presentation skills",
    biggestAchievement: "Wrote the necessary code for running the webcomic at janov.eu/comic",
    funFact: "I really enjoy looking at pictures of pallas' cats",
    photo: "/images/AP-pdp.webp"
  },
  {
    id: 3,
    name: "DAHDOUH AHMED",
    age: 27,
    dateOfBirth: "1998-03-16",
    placeOfBirth: "Algiers, Algeria",
    nationality: "Algerian",
    countryCode: "DZ",
    codingStrengths: "Full Stack Development, Artificial Intelligence, FastAPI, Python, PostgreSQL, Software Architecture",
    codingWeaknesses: "Frontend design and advanced CSS styling",
    biggestAchievement: "Developed a voice recognition system with 98% accuracy",
    funFact: "Sports enthusiast and music lover",
    photo: "/images/DA-pdp.webp"
  },
  {
    id: 4,
    name: "Thomas CATTAROSSI DARTIGUELONGUE",
    age: 21,
    dateOfBirth: "2004-05-08",
    placeOfBirth: "Mont-de-Marsan, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Python (API/Backend), Next.js / Vue.js, Scrum / Agile",
    codingWeaknesses: "C#, Database management, Windev/Webdev",
    biggestAchievement: "Made a fully fledged and complete chess tournament simulator on Python",
    funFact: "I listen to a ton of music everyday",
    photo: "/images/TC-pdp.png"
  },
  {
    id: 5,
    name: "Badre EL MOURABIT",
    age: 21,
    dateOfBirth: "2004-09-07",
    placeOfBirth: "Bastia, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "React Native, Next.js, UX/UI Design, Spring Boot",
    codingWeaknesses: "Cobol, Kubernetes, C",
    biggestAchievement: "Made a cross-platform mobile app for sport and nutrition called HealthyCore.",
    funFact: "Chases summits and sunrises !",
    photo: "/images/BE-pdp.png"
  },
  {
    id: 6,
    name: "Stéphane THIRY",
    age: 27,
    dateOfBirth: "1998-04-08",
    placeOfBirth: "Ajaccio, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Python object / PyQt, Dev mobile, Agile",
    codingWeaknesses: "JS, Web development",
    biggestAchievement: "Made a desktop application with python and PyQt6",
    funFact: "i'm fun",
    photo: "/images/ST-pdp.png"
  },
  {
    id: 7,
    name: "Mehdi Ghoulam",
    age: 23,
    dateOfBirth: "2002-09-07",
    placeOfBirth: "Mulhouse, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Typescript, React, React Native, PHP, Laravel, API, PostgreSQL",
    codingWeaknesses: "Python",
    biggestAchievement: "Co-founder of Mindlet 🐙",
    funFact: "when it works, don't touch it!",
    photo: "/images/MD-pdp.webp"
  },
  {
    id: 8,
    name: "Anthony Pierre Philippe Menghi",
    age: 22,
    dateOfBirth: "2003-04-04",
    placeOfBirth: "Nice, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Python, AI, Machine Learning, FastAPI, JavaScript, TypeScript, React, Next.js",
    codingWeaknesses: "DevOps, Kubernetes, Docker",
    biggestAchievement: "Co-founder of Mindlet 🐙",
    funFact: "who runs, falls!",
    photo: "/images/AM-pdp.webp"
  },
  {
    id: 9,
    name: "Dorian Lovichi",
    age: 23,
    dateOfBirth: "2002-05-08",
    placeOfBirth: "Ajaccio, France",
    nationality: "French",
    countryCode: "FR",
    codingStrengths: "Full-Stack Development DevOps AI intregration",
    codingWeaknesses: "UI/UX",
    biggestAchievement: "Create an AI girlfriend",
    funFact: "Number one boucherville fan!",
    photo: "/images/DL-pdp.jpg"
  }
];