import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = (props) => {
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
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
