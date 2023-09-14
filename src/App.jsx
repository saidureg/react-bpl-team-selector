import "./App.css";
import Bookmarks from "./component/bookmarks/Bookmarks";
import Gallery from "./component/gallery/Gallery";

function App() {
  return (
    <div>
      <div className="bg-[#DCCFEC] text-[#010C18] text-center py-4 rounded-xl">
        <h1 className="text-5xl font-bold">Bangladesh Premier League</h1>
        <p className="text-xl font-medium mt-2">
          This players are available for your team
        </p>
      </div>
      <div className="flex gap-4 p-5">
        <Gallery></Gallery>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
