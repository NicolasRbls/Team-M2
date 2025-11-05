import { Link } from 'react-router-dom';
import { players } from '../data';

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1 className="my-5 display-4">M2 Info Squad</h1>
      <div className="row">
        {players.map(player => (
          <div key={player.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link to={`/player/${player.id}`} className="card h-100 text-decoration-none">
              <img src={player.photo} className="card-img-top" alt={player.name} />
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
