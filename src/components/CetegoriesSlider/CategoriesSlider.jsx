import styles from './CategoriesSlider.module.css';
import {capitalize} from '../../helpers/capitalize.js';

const CategoriesSlider = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setSelectedCategory(null)}
              className={!selectedCategory ? styles.active : styles.item}>
        {capitalize('All')}
      </button>
      {categories.map(category => {
        return (
          <button onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? styles.active
                    : styles.item} key={category}
          >
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default CategoriesSlider;