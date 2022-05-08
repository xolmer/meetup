import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);  
  const content = favoritesCtx.totalFavorites === 0 ? 
    <p>You don't have any favorites yet.</p> : 
    <MeetupList meetups={favoritesCtx.favorites} />;

  return (
    <section>
      <h2>Favorites</h2>
      {content}
    </section>
  );
};

export default Favorites;
