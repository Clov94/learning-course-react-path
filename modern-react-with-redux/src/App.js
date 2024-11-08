import "./style.css";
import MoviePlaylist from "./components/MoviePlayList";
import SongPlaylist from "./components/SongPlayList";

import { useDispatch } from "react-redux";
import { reset } from "./store";


export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset All Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
