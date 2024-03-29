import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const handleLogOut = () =>{
    dispatch(authAction.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
