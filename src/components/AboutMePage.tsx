import { FlagIcon } from 'react-flag-kit';

const AboutMePage = () => {
  return (
    <div className="container about-me-page">
      <h1 className="my-5 display-4">About Me</h1>
      <div className="row">
        <div className="col-md-4 text-center">
          {/* You can add a photo of yourself here */}
          <img src="/images/NR-pdp.jpg" className="img-fluid rounded-circle mb-4" alt="Your Name" style={{width: '250px', height: '250px', objectFit: 'cover'}} />
        </div>
        <div className="col-md-8">
          <h2>Nicolas Robles</h2>
          <hr />
          <p><strong>Age:</strong> 20</p>
          <p><strong>Date of Birth:</strong> 2003-07-23</p>
          <p><strong>Place of Birth:</strong> Libourne , France</p>
          <p><strong>Nationality:</strong> French <FlagIcon code="FR" /></p>
          <hr />
          <h4>Written Evaluation</h4>
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
          <hr />
          <h4>Coding Strengths</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>php</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Flask</li>
          </ul>
          <h4>Coding Weaknesses</h4>
          <ul>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
          <hr />
          <h4>Biggest Achievement in Coding</h4>
          <p>Created a mobile app called HealthyCore, focused on fitness and nutrition.</p>
          <h4>Future Plans</h4>
          <p>To become a full-stack developer and an SRE/DevOps engineer, managing system administration, deployment, and automation, while working on exciting and challenging projects.</p>
          <h4>Interesting Fact</h4>
          <p>Practice scuba diving and have earned several diving certifications.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
