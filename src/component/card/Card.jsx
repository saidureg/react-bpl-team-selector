import PropTypes from "prop-types";

const Card = ({ players, handleAddToBookmark }) => {
  const { name, age, salary, country, image } = players;
  return (
    <div className="card glass">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Country : {country} </p>
        <p>Salary : $ {salary} </p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToBookmark(players)}
            className="btn btn-primary"
          >
            Add this player
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  players: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Card;
