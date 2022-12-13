import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './sidebar.module.css';
import { Typography, Line, Backdrop } from 'components/ui';
import { Search } from 'components/search';
import { WelcomeList, ReferencesList } from 'components/list';
import { sidebarActions } from './sidebar-slice';
import useResize from 'hooks/use-resize';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isTriggered } = useSelector((state) => state.sidebar);
  const { id: pageId } = useSelector((state) => state.page.currentPage);
  const { innerWidth } = useResize();
  const sidebarClassName = styles.sidebar;
  const isOpenClassNames = `${sidebarClassName} ${styles.sidebarOpen}`;
  const sidebarClassNames = (isTriggered && isOpenClassNames) || sidebarClassName;

  const activeTabHandler = ({ target }) => {
    const listTab = target.closest('.listTab');
    if (listTab) dispatch(sidebarActions.setIsTriggered(false));
  };

  useEffect(() => {
    if (innerWidth >= 992 && isTriggered) dispatch(sidebarActions.setIsTriggered(false));
  }, [innerWidth, dispatch, isTriggered]);

  useEffect(() => {
    dispatch(sidebarActions.setSelectedTab(pageId));
  }, [pageId, dispatch]);

  return (
    <>
      <aside className={sidebarClassNames}>
        <header className={styles.header}>
          <Typography variant="h1">Pokemon API</Typography>
          <Search />
        </header>
        <Line />
        <nav className={styles.nav} onClick={activeTabHandler}>
          <WelcomeList />
          <Line />
          <ReferencesList />
        </nav>
      </aside>
      <Backdrop />
    </>
  );
};

export default Sidebar;
