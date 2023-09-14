import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ players }) => {
  return (
    <div>
      <Card players={players}></Card>
    </div>
  );
};
Cards.propTypes = {
  players: PropTypes.object,
};

export default Cards;
