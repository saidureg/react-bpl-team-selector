import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ players, handleAddToBookmark, selectedPlayer }) => {
  const { name, age, salary, country, image } = players;
  const playersId = selectedPlayer.find((item) => item.id === players.id);

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
            className={
              playersId?.id === players.id
                ? "btn btn-primary opacity-70"
                : "btn btn-primary"
            }
          >
            {playersId?.id === players.id && (
              <FontAwesomeIcon className=" text-xl" icon={faCheck} />
            )}
            {playersId?.id === players.id
              ? "Selected Player"
              : "Add this player"}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  players: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  selectedPlayer: PropTypes.array,
};

export default Card;
