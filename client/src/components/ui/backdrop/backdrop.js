import { useDispatch, useSelector } from 'react-redux';

import styles from './backdrop.module.css';
import { sidebarActions } from 'layouts/sidebar';

const Backdrop = () => {
  const dispatch = useDispatch();
  const { isTriggered } = useSelector((state) => state.sidebar);
  const backdropClassName = styles.backdrop;
  const backdropClassNames =
    (isTriggered && `${backdropClassName} ${styles.backdropVisible}`) || backdropClassName;

  const closeSidebarHandler = () => {
    dispatch(sidebarActions.setIsTriggered(false));
  };

  return <div className={backdropClassNames} onClick={closeSidebarHandler}></div>;
};

export default Backdrop;
