import Bookmark from "../bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ player }) => {
  return (
    <div>
      <Bookmark player={player}></Bookmark>
    </div>
  );
};
Bookmarks.propTypes = {
  player: PropTypes.object,
};

export default Bookmarks;
