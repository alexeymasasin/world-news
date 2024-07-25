import { getNews } from '../../api/newsAPI.ts';
import {
	FILTERS_PAGE_SIZE,
	FILTERS_TOTAL_PAGES,
	MAIN_PAGE_SIZE,
} from '../../constants/constants.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { useFetch } from '../../hooks/useFetch.ts';
import { useFilters } from '../../hooks/useFilters.ts';
import NewsFilters from '../NewsFilters/NewsFilters.tsx';
import NewsList from '../NewsList/NewsList.tsx';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.tsx';
import SectionHeading from '../SectionHeading/SectionHeading.tsx';
import styles from './NewsByFilters.module.css';

const NewsByFilters = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: MAIN_PAGE_SIZE,
		category: null,
		keywords: '',
	});

	const debouncedKeywords = useDebounce(filters.keywords, 750);

	const {
		data: dataFilteredNews,
		loading,
		error,
	} = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
		page_size: FILTERS_PAGE_SIZE,
	});

	const nextPageHandler = () => {
		if (filters.page_number < FILTERS_TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1);
		}
	};

	const previousPageHandler = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1);
		}
	};

	const goToFirstPageHandler = () => {
		changeFilter('page_number', 1);
	};

	const goToLastPageHandler = () => {
		changeFilter('page_number', FILTERS_TOTAL_PAGES);
	};

	return (
		<section className={styles.wrapper}>
			<SectionHeading title="News by Filters" />

			<NewsFilters filters={filters} changeFilter={changeFilter} />

			<PaginationWrapper
				bottom
				currentPage={filters.page_number}
				previousPageHandler={previousPageHandler}
				nextPageHandler={nextPageHandler}
				goToFirstPage={goToFirstPageHandler}
				goToLastPage={goToLastPageHandler}
				totalPages={FILTERS_TOTAL_PAGES}
			>
				<NewsList
					news={dataFilteredNews?.news}
					filters={filters}
					changeFilter={changeFilter}
					loading={loading}
				/>
			</PaginationWrapper>
		</section>
	);
};

export default NewsByFilters;
