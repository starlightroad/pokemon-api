import { useDispatch, useSelector } from 'react-redux';

import styles from './search.module.css';
import { Input, Icon } from 'components/ui';
import { searchActions } from './search-slice';

const Search = () => {
  const dispatch = useDispatch();
  const { enteredValue } = useSelector((state) => state.search);

  const searchDocsHandler = ({ target: { value } }) => {
    dispatch(searchActions.setEnteredValue(value));
  };

  const clearSearchInput = () => {
    dispatch(searchActions.setEnteredValue(''));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchContainer}>
        <Icon icon="search" className={styles.searchIcon} />
        <Input
          className={styles.search}
          placeholder="Search docs"
          onChange={searchDocsHandler}
          value={enteredValue}
        />
        {enteredValue && (
          <Icon icon="x" className={styles.cancelIcon} onClick={clearSearchInput} />
        )}
      </div>
    </form>
  );
};

export default Search;
