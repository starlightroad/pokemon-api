import styles from './main-layout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <main className={styles.main}>
        <section className={styles.contentContainer}>{children}</section>
      </main>
    </div>
  );
};

export default MainLayout;
