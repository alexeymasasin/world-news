import styles from './Search.module.css';

const Search = ({keywords, setKeywords}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" value={keywords}
             onChange={(e) => setKeywords(e.target.value)}
             placeholder="Search by keyword..."/>
    </div>
  );
};

export default Search;