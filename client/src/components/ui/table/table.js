import { v4 as generateKey } from 'uuid';

import styles from './table.module.css';

const Table = ({ data: { headers, data } }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((headerName) => (
                <th key={generateKey()}>{headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((tableData) => (
              <tr key={generateKey()}>
                {tableData.map((tableValue) => (
                  <td key={generateKey()}>{tableValue}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
