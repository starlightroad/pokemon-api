import styles from './description-section.module.css';
import { Typography } from 'components/ui';

const DescriptionSection = ({ description }) => {
  return (
    <section className={styles.descriptionSection}>
      <Typography variant="p">{description}</Typography>
    </section>
  );
};

export default DescriptionSection;
