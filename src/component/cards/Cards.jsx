import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ players, handleAddToBookmark }) => {
  return (
    <div>
      <Card players={players} handleAddToBookmark={handleAddToBookmark}></Card>
    </div>
  );
};
Cards.propTypes = {
  players: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
};

export default Cards;
