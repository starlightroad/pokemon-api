import styles from './url-banner.module.css';

const URLBanner = ({ method, url, endpoint }) => {
  return (
    <div className={styles.urlBannerContainer}>
      <div className={styles.urlBanner}>
        <span className={styles.method}>{method}</span>
        <div className={styles.url}>
          <span className={styles.urlPath}>{url}</span>
          <span className={styles.urlEndpoint}>{endpoint}</span>
        </div>
      </div>
    </div>
  );
};

export default URLBanner;
