import styles from './not-found-layout.module.css';

const NotFoundLayout = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default NotFoundLayout;
