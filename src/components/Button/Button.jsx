import React, { useContext, useState, useEffect } from 'react';
import './Button.css';
import { WatchListContext } from '../../providers/WatchList/WatchListState';

const Button = ({ movieId, onClick }) => {
  const { watchList } = useContext(WatchListContext);
  const [isActive, setIsActive] = useState(false);

  // Effect pour mettre à jour l'état du bouton en fonction de la watchList
  useEffect(() => {
    const movieInWatchList = watchList.find((movie) => movie.id === movieId);
    setIsActive(movieInWatchList !== undefined);
  }, [watchList, movieId]);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick(!isActive);
    }
  };

  return (
    <button className={`btn toggle ${isActive ? 'active' : ''}`} onClick={handleToggle}>
      {isActive ? '♡' : '+'}
    </button>
  );
};

export default Button;
