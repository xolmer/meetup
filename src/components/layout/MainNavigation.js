import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
const MainNavigation = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        Meetups
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              {favoritesCtx.totalFavorites > 0 && (
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
