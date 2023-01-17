import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../components/uiComponents/Panel";
import { addSong, removeSong } from "../../store";

interface Song {
  id: string;
  title: string;
}

interface songsState {
  songs: Song[];
}

const Song: React.FC = () => {
  const [songsList, setSongsList] = useState<Song[]>([]);
  const dispatch = useDispatch();
  const songs = useSelector((state: songsState) => {
    return state.songs;
  });

  useEffect(() => {
    if (Array.isArray(songs) && songs.length > 0) {
      setSongsList(songs);
    }
  }, [songs]);

  const songLists =
    Array.isArray(songsList) && songsList.length > 0 ? (
      songsList.map(item => {
        return <div key={item.id}>{item.title}</div>;
      })
    ) : (
      <div>No Song Found</div>
    );

  return (
    <Panel>
      <h3 className='text-center'>Redux Slice Simple Example</h3>
      {songLists}
    </Panel>
  );
};

export default Song;
