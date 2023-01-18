import React, { useState, useEffect } from "react";
import { GoPlus, GoTrashcan } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../components/uiComponents/Panel";
import { addSong, removeSong } from "../../store";
import { reset } from "../../store/actions/songsAction";
import { RootState } from "../../store/index";

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
  const songs = useSelector((state: RootState) => {
    return state.song.songs;
  });

  useEffect(() => {
    setSongsList(songs);
  }, [songs]);

  const handleAdd = () => {
    dispatch(
      addSong({
        id: Math.round(Math.random() * 999).toString(),
        title: "song Title",
      })
    );
  };

  const handleRemove = (item: Song) => {
    dispatch(removeSong(item));
  };

  const handleRemoveAll = () => {
    dispatch(reset());
  };

  const songLists = songsList.map(item => {
    return (
      <div
        key={item.id}
        className='flex justify-between text-center bg-gray-100 w-full p-3 my-2'
      >
        <div>
          {item.title} - {item.id}
        </div>
        <span
          className='cursor-pointer hover:font-bold hover:text-red-300'
          onClick={() => handleRemove(item)}
        >
          X
        </span>
      </div>
    );
  });

  return (
    <div className='grid grid-cols-6 gap-4 mt-5'>
      <div className='col-start-3 col-end-5   ...'>
        <Panel className='h-full'>
          <h3 className='text-center'>Redux Slice Simple Example</h3>
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 float-left'
            onClick={handleRemoveAll}
          >
            <GoTrashcan />
          </button>
          <button
            type='button'
            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 float-right'
            onClick={handleAdd}
          >
            <GoPlus />
          </button>

          {songLists}
        </Panel>
      </div>
    </div>
  );
};

export default Song;
