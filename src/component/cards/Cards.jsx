import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ players, handleAddToBookmark, selectedPlayer }) => {
  return (
    <div>
      <Card
        players={players}
        selectedPlayer={selectedPlayer}
        handleAddToBookmark={handleAddToBookmark}
      ></Card>
    </div>
  );
};
Cards.propTypes = {
  players: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  selectedPlayer: PropTypes.array,
};

export default Cards;
