import { v4 as generateKey } from 'uuid';

import styles from './welcome-content.module.css';
import { Typography } from 'components/ui';

const WelcomeContent = ({ contentData }) => {
  const { description, other } = contentData.sections;

  return (
    <>
      <Typography variant="h2" className={styles.mainHeading}>
        {description.title}
      </Typography>
      <Typography variant="p" className={styles.mainDescription}>
        {description.description}
      </Typography>
      {other.map(({ title, description }) => {
        return (
          <section key={generateKey()} className={styles.content}>
            <Typography variant="h3" className={styles.heading}>
              {title}
            </Typography>
            <Typography variant="p" className={styles.description}>
              {description}
            </Typography>
          </section>
        );
      })}
    </>
  );
};

export default WelcomeContent;
