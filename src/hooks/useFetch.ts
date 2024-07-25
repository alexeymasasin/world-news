import { useEffect, useState } from 'react';

interface FetchFn<P, T> {
	(params?: P): Promise<T>;
}

interface UseFetchRes<T> {
	data: T | null | undefined;
	isLoading: boolean;
	error: Error | null;
}

export const useFetch = <T, P>(
	fetchFn: FetchFn<P, T>,
	params?: P
): UseFetchRes<T> => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const strParams = params ? new URLSearchParams(params).toString() : '';

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const response = await fetchFn(params);
				setData(response);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		})();
	}, [fetchFn, strParams]);

	return { data, loading, error };
};
