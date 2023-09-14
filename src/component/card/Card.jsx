import PropTypes from "prop-types";

const Card = ({ players }) => {
  const { name, age, salary, country, image } = players;
  return (
    <div className="card glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Country : {country} </p>
        <p> Salary : {salary} </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add this player</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  players: PropTypes.object.isRequired,
};

export default Card;
