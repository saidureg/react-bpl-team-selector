import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Bookmark = ({ player }) => {
  const { name, image } = player;
  return (
    <div>
      <div className="flex items-center bg-[#CACBBC] rounded-2xl pr-5 mt-5">
        <img className="w-[80px] rounded-full" src={image} alt="" />
        <div className="flex flex-1 items-center ml-5 gap-4">
          <h3 className="text-xl text-[#020202] font-medium flex-1">{name}</h3>
          <FontAwesomeIcon
            className="bg-slate-200 rounded-full p-2 text-xl"
            icon={faCheck}
          />
        </div>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  player: PropTypes.object,
};

export default Bookmark;
