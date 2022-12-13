import { v4 as generateKey } from 'uuid';

import styles from './allowed-values.module.css';
import { Typography } from 'components/ui';

const AllowedValues = ({ allowedValues }) => {
  return (
    <div className={styles.allowedValues}>
      <Typography variant="p">Allowed values:</Typography>
      <div className={styles.allowedValuesContainer}>
        {allowedValues.map((value) => (
          <span key={generateKey()} className={styles.allowedValuesText}>
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AllowedValues;
