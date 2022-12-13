import { useDispatch, useSelector } from 'react-redux';

import styles from './navbar.module.css';
import { Icon } from 'components/ui';
import { sidebarActions } from 'layouts/sidebar';
import setTheme from 'utilities/theme-setter';
import useLocalStorage from 'hooks/use-storage';
import { getNavbarData } from 'data';

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  const { currentPage } = useSelector((state) => state.page);
  const [, setStorage] = useLocalStorage();
  const navData = getNavbarData();

  const changeThemeHandler = () => {
    const newTheme = (currentTheme === 'light' && 'dark') || 'light';
    setTheme(dispatch, newTheme);
    setStorage('theme', newTheme);
  };

  const toggleSidebarHandler = () => {
    dispatch(sidebarActions.setIsTriggered(true));
  };

  const parentClassNames = `${styles.navbar} ${
    currentTheme && styles[`navbar-${currentTheme}`]
  }`;

  const isNotFoundPage = currentPage.id === '22-000';

  return (
    <header className={parentClassNames}>
      <Icon
        icon="menu"
        className={styles.menu}
        onClick={toggleSidebarHandler}
        style={{ visibility: (isNotFoundPage && 'hidden') || null }}
      />

      <nav className={styles.nav}>
        <Icon
          icon={(currentTheme === 'light' && 'moon') || 'sun'}
          className={styles.icon}
          onClick={changeThemeHandler}
        />
        <a
          href={navData.repo}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
