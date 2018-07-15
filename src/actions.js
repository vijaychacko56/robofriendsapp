import {
	SEARCH_FIELD_INPUT,
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED
	} from './constants';

export const  searchFieldInputAction = (text) => {
	return {
		type:SEARCH_FIELD_INPUT,
		payload: text
	}
}

export const loadRobotsAction = () => (dispatch) => {

			dispatch({type:GET_ROBOTS_PENDING})
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({type:GET_ROBOTS_SUCCESS, payload: data}))
			.catch(err => dispatch({type: GET_ROBOTS_FAILED, payload: err}))
}