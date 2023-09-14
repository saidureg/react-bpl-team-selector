import { useState } from "react";
import "./Gallery.css";
import { useEffect } from "react";
import Cards from "../cards/Cards";
import Bookmarks from "../bookmarks/Bookmarks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [dataLoad, setDataLoad] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDataLoad(data));
  }, []);

  const handleAddToBookmark = (player) => {
    setSelectedPlayer([...selectedPlayer, player]);
    // console.log(selectedPlayer);
  };
  return (
    <div className="flex gap-4 p-5">
      <div className="grid lg:grid-cols-3 gap-3 mx-24">
        {dataLoad.map((players, idx) => (
          <Cards
            key={idx}
            handleAddToBookmark={handleAddToBookmark}
            players={players}
          ></Cards>
        ))}
      </div>
      <div>
        <div className="text-center text-3xl text-amber-50 font-medium">
          <div className="flex items-center ml-5">
            <FontAwesomeIcon className="p-2" icon={faUser} />
            <h3>Players Added : {selectedPlayer.length}</h3>
          </div>
          <h3>Total Cost : </h3>
        </div>
        {selectedPlayer.map((player, idx) => (
          <Bookmarks key={idx} player={player}></Bookmarks>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
