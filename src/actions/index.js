import { FETCH_DATA } from '../constants/action-types';

export function fetchData(payload) {
	return { type: FETCH_DATA, payload };
}
