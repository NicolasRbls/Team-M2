export interface Player {
  id: number;
  name: string;
  age: number;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  flag: string;
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
    nationality: "French",
    flag: "🇫🇷",
    codingStrengths: "React, Node.js , php , Kubernetes , Docker , Flask",
    codingWeaknesses: "CSS , TypeScript",
    biggestAchievement: "Created a mobile app called HealthyCore, focused on fitness and nutrition.",
    funFact: "Practice scuba diving and have earned several diving certifications.",
    photo: "images/NR-pdp.jpg"
  },
  {
    id: 2,
    name: "Achille POIRIER",
    age: 22,
    dateOfBirth: "2003-06-01", 
    placeOfBirth: "Marseille , France",
    nationality: "French",
    flag: "🇫🇷",
    codingStrengths: "Backend, CI/CD, K8s",
    codingWeaknesses: "CSS styling, UI/UX design, Presentation skills",
    biggestAchievement: "Wrote the necessary code for running the webcomic at janov.eu/comic",
    funFact: "I really enjoy looking at pictures of pallas' cats",
    photo: "images/AP-pdp.webp" // Placeholder photo
  }
];
