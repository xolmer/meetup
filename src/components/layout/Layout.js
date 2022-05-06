import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main>
        <div className={classes.main}>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
