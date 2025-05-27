import { useContext } from "react";
import MovieContext from "./MovieContexts.jsx";

const useMovieContext = () => useContext(MovieContext);

export default useMovieContext;
