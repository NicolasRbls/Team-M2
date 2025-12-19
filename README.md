# 🚀 M2 Info Squad - Team Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)

---

### 🌐 **Live Demo:** [https://m2squad.netlify.app/](https://m2squad.netlify.app/)

---

## 📖 About The Project

**M2 Info Squad** is a modern, responsive Single Page Application (SPA) designed to showcase the profiles of the Master 2 Computer Science team. It serves as a dynamic portfolio, highlighting each member's skills, achievements, and professional background.

Built with performance and scalability in mind, this project leverages the latest web technologies to provide a smooth and engaging user experience, featuring a custom dark/light mode and seamless navigation.

## ✨ Key Features

*   **⚡ High Performance:** Powered by Vite for lightning-fast HMR and optimized builds.
*   **🎨 Dynamic Theming:** Built-in Light and Dark mode with persistent state management via React Context.
*   **📱 Fully Responsive:** Adaptive design that looks great on mobile, tablet, and desktop devices.
*   **🔍 Detailed Profiles:** Individual profile pages with routing for each team member.
*   **🛠 Type-Safe:** developed entirely in TypeScript for robust and maintainable code.
*   **🏳️ Internationalization Ready:** Integrated `react-flag-kit` for nationality display.

## 🛠 Tech Stack

*   **Core:** [React 18](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **Styling:** Custom CSS with Variables & BEM methodology
*   **Linting:** ESLint

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   Node.js (v18.0.0 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/m2-squad.git
    cd m2-squad
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Navbar, Cards, etc.)
│   ├── HomePage.tsx
│   ├── PlayerProfilePage.tsx
│   └── ...
├── contexts/         # React Contexts (Theme state management)
├── public/           # Static assets (images, icons)
├── App.tsx           # Main application routing logic
├── App.css           # Global styles and variables
├── data.ts           # Data source for team members
└── main.tsx          # Application entry point
```

## 📜 Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Compiles the application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.

---
