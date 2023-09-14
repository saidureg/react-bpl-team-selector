import { useState } from "react";
import "./Gallery.css";
import { useEffect } from "react";
import Cards from "../cards/Cards";
const Gallery = () => {
  const [dataLoad, setDataLoad] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDataLoad(data));
  }, []);
  return (
    <div className="gallery-container">
      {dataLoad.map((players, idx) => (
        <Cards key={idx}></Cards>
      ))}
    </div>
  );
};

export default Gallery;
