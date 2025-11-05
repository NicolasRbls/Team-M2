import { useParams, Link } from 'react-router-dom';
import { players } from '../data';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';

const PlayerProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const player = players.find(p => p.id === parseInt(id || ""));

  if (!player) {
    return <div className="container text-center my-5"><h2>Player not found</h2></div>;
  }

  const strengths = player.codingStrengths.split(', ').map(s => s.trim());
  const weaknesses = player.codingWeaknesses.split(', ').map(w => w.trim());

  return (
    <div className="player-profile-container">
      <div className="player-profile-card">
        <div className="player-profile-header">
          <img src={player.photo} className="player-profile-img" alt={player.name} />
          <div className="player-profile-header-info">
            <h1 className="player-profile-name">{player.name}</h1>
            <div className="player-profile-meta">
              <span>Age: {player.age}</span>
              <span>DOB: {player.dateOfBirth}</span>
              <span><FlagIcon code={player.countryCode as FlagIconCode} /> {player.nationality}</span>
            </div>
          </div>
        </div>

        <div className="player-profile-body">
          <div className="profile-section">
            <h3>Biggest Achievement</h3>
            <p>{player.biggestAchievement}</p>
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
            <h3>Fun Fact</h3>
            <p>{player.funFact}</p>
          </div>
        </div>

        <div className="player-profile-footer">
          <Link to="/" className="btn btn-primary">Back to Squad</Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfilePage;
