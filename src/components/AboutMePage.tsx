import { FlagIcon, FlagIconCode } from 'react-flag-kit';

const AboutMePage = () => {
  const strengths = ["React", "Node.js", "php", "Kubernetes", "Docker", "Flask"];
  const weaknesses = ["CSS", "TypeScript"];

  return (
    <div className="player-profile-container">
      <div className="player-profile-card">
        <div className="player-profile-header">
          <img src="/images/NR-pdp.jpg" className="player-profile-img" alt="Nicolas Robles" />
          <div className="player-profile-header-info">
            <h1 className="player-profile-name">Nicolas Robles</h1>
            <div className="player-profile-meta">
              <span>Age: 20</span>
              <span>DOB: 2003-07-23</span>
              <span><FlagIcon code={"FR" as FlagIconCode} /> French</span>
            </div>
          </div>
        </div>

        <div className="player-profile-body">
          <div className="profile-section">
            <h3>Written Evaluation</h3>
            <p>
              My name is Nicolas Robles, and I was born on July 23, 2003, in Libourne, France. I am currently a Master’s student in Computer Science (M2), specializing in full-stack development. I have always been passionate about technology and enjoy building creative and functional web applications that combine good design with efficient back-end logic.
            </p>
            <p>
              Over the past few years, I have worked on several projects, including a mobile fitness and nutrition app called HealthyCore, and a music web app built with Node.js, Express, SQLite, and Twig, which I deployed on an Nginx server. These projects have helped me strengthen my skills in both frontend and backend development, as well as improve my understanding of database management and server configuration.
            </p>
            <p>
              My strengths include being organized, curious, and persistent when facing technical challenges. I enjoy problem-solving and learning new technologies quickly. However, I sometimes spend too much time perfecting details instead of focusing on the bigger picture — something I’m learning to balance.
            </p>
            <p>
              In the future, I aspire to become a full-stack developer and SRE/DevOps engineer, focusing on system administration, deployment, and automation. I would like to work abroad to gain experience, discover new cultures, and, of course, find better career opportunities and salaries.
            </p>
            <p>
              Outside of coding, I enjoy video games, motocross, rugby, and scuba diving, for which I’ve earned several diving certifications. These activities help me stay focused, motivated, and ready for any new challenge.
            </p>
          </div>

          <div className="profile-section">
            <h3>Skills</h3>
            <div className="skills-container">
              <div className="skills-list strengths">
                <h4>Strengths</h4>
                <ul>
                  {strengths.map((strength, index) => <li key={index}>{strength}</li>)}
                </ul>
              </div>
              <div className="skills-list weaknesses">
                <h4>Weaknesses</h4>
                <ul>
                  {weaknesses.map((weakness, index) => <li key={index}>{weakness}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3>Biggest Achievement in Coding</h3>
            <p>Created a mobile app called HealthyCore, focused on fitness and nutrition.</p>
          </div>

          <div className="profile-section">
            <h3>Future Plans</h3>
            <p>To become a full-stack developer and an SRE/DevOps engineer, managing system administration, deployment, and automation, while working on exciting and challenging projects.</p>
          </div>

          <div className="profile-section">
            <h3>Interesting Fact</h3>
            <p>Practice scuba diving and have earned several diving certifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
