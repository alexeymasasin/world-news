import styles from './NewsFilters.module.css';
import CategoriesSlider from '../CetegoriesSlider/CategoriesSlider.tsx';
import Search from '../Search/Search.tsx';
import {useFetch} from '../../hooks/useFetch.ts';
import {getCategories} from '../../api/newsAPI.ts';

const NewsFilters = ({filters, changeFilter}) => {
  const {data: dataCategories} = useFetch(getCategories);

  return (
    <div className={styles.wrapper}>
      {dataCategories ?
        <CategoriesSlider categories={dataCategories.categories}
                          selectedCategory={filters.category}
                          setSelectedCategory={(category) => changeFilter(
                            'category', category)}/>
        : null
      }

      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter(
                'keywords', keywords)}/>
    </div>
  );
};

export default NewsFilters;