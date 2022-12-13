import { v4 as generateKey } from 'uuid';

import styles from './parameters-section.module.css';
import { Typography, Table } from 'components/ui';
import AllowedValues from './allowed-values';

const ParametersSection = ({ title, sectionData }) => {
  return (
    <section className={styles.parametersSection}>
      <Typography variant="h3" className={styles.heading}>
        {title}
      </Typography>

      {sectionData.map(({ name, type, description, table, allowedValues }) => {
        return (
          <article key={generateKey()} className={styles.article}>
            <div className={styles.articleHeader}>
              <span className={styles.articleHeaderName}>{name}</span>
              <span className={styles.articleHeaderType}>{type}</span>
            </div>
            <p className={styles.articleDescription}>{description}</p>

            {allowedValues && <AllowedValues allowedValues={allowedValues} />}
            {table && <Table data={table} className={styles.table} />}
          </article>
        );
      })}
    </section>
  );
};

export default ParametersSection;
