import { useParams, Link } from 'react-router-dom';
import { players } from '../data';

const PlayerProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const player = players.find(p => p.id === parseInt(id || ""));

  if (!player) {
    return <div className="container text-center my-5"><h2>Player not found</h2></div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={`/${player.photo}`} className="img-fluid rounded-circle mb-4" alt={player.name} style={{width: '250px', height: '250px', objectFit: 'cover'}} />
          <Link to="/" className="btn btn-primary btn-lg">Back to Squad</Link>
        </div>
        <div className="col-md-8">
          <h1 className="display-4">{player.name}</h1>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p><strong>Age:</strong> {player.age}</p>
              <p><strong>Date of Birth:</strong> {player.dateOfBirth}</p>
              <p><strong>Place of Birth:</strong> {player.placeOfBirth}</p>
              <p><strong>Nationality:</strong> {player.nationality} {player.flag}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Coding Strengths:</strong> {player.codingStrengths}</p>
              <p><strong>Coding Weaknesses:</strong> {player.codingWeaknesses}</p>
              <p><strong>Biggest Achievement:</strong> {player.biggestAchievement}</p>
              <p><strong>Fun Fact:</strong> {player.funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfilePage;
