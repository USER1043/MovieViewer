import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");

    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addtoFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieID) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavourite = (movieID) => {
    return favourites.some((movie) => movie.id === movieID);
  };

  const value = {
    favourites,
    addtoFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}> {children} </MovieContext.Provider>
  );
};

export default MovieContext;
