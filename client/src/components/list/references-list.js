import { v4 as generateKey } from 'uuid';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './references-list.module.css';
import commonStyles from './common.module.css';
import { Typography } from 'components/ui';
import filterSearchResults from 'utilities/filter-search-results';
import { getListData } from 'data';

const ReferencesList = () => {
  const list = getListData('references-list');
  const { selectedTab } = useSelector((state) => state.sidebar);
  const { enteredValue } = useSelector((state) => state.search);
  const filteredContent = filterSearchResults(list, enteredValue.trim());

  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        References
      </Typography>
      <nav>
        <ul className={styles.mainList}>
          {filteredContent.map(({ title, content }) => {
            return (
              <li key={generateKey()}>
                <Typography variant="p">{title}</Typography>
                <ul className={styles.secondaryList}>
                  {content.map(({ id, value, path }) => {
                    const classNames =
                      (id === selectedTab.id &&
                        `listTab ${commonStyles.activeTab} ${commonStyles.listTabItem}`) ||
                      `listTab ${commonStyles.hoverClass} ${commonStyles.listTabItem}`;

                    return (
                      <li key={generateKey()}>
                        <NavLink to={`/docs${path}`} className={classNames} data-id={id}>
                          {value}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ReferencesList;
