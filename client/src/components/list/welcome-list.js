import { v4 as generateKey } from 'uuid';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './welcome-list.module.css';
import commonStyles from './common.module.css';
import { Typography } from 'components/ui';
import filterSearchResults from 'utilities/filter-search-results';
import { getListData } from 'data';

const WelcomeList = () => {
  const list = getListData('welcome-list');
  const { selectedTab } = useSelector((state) => state.sidebar);
  const { enteredValue } = useSelector((state) => state.search);
  const [{ title, content }] = filterSearchResults(list, enteredValue.trim());

  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
      <nav>
        <ul className={styles.mainList}>
          {content.map((item) => {
            const classNames =
              (item.id === selectedTab.id &&
                `listTab ${commonStyles.activeTab} ${commonStyles.listTabItem}`) ||
              `listTab ${commonStyles.hoverClass} ${commonStyles.listTabItem}`;

            return (
              <li key={generateKey()}>
                <NavLink to={item.path} className={classNames} data-id={item.id}>
                  {item.value}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default WelcomeList;
