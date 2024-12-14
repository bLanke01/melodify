import React, { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Never Gonna Give You Up", artist: "Rick Astley", file: require("../assets/songs/rick.mp3") },
    { id: 2, title: "APT.", artist: "ROSE & Bruno Mars", file: require("../assets/songs/apt.mp3") }
  ]);

  const addSong = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, { id: prevSongs.length + 1, ...newSong }]);
  };
   const deleteSong = (id) => {
    setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
  };

  return (
    <SongContext.Provider value={{ songs, addSong, deleteSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongs = () => useContext(SongContext);
