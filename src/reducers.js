import {
	SEARCH_FIELD_INPUT,
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED
	} from './constants';


const initiaState = {
	search: ''
}

export const searchFieldReducer = (state = initiaState,action ={} ) => {
	switch(action.type) {
		case SEARCH_FIELD_INPUT:
			return Object.assign({},state,{search:action.payload})
		default:
		return state; 
	}
}

const initialRobotState = {
	isPending:false,
	robots:[],
	error: ''
}



export const getRobotsReducer = (state = initialRobotState, action ={}) => {

	switch(action.type){

		case GET_ROBOTS_PENDING:
		return Object.assign({},state, {isPending:true})
		case GET_ROBOTS_SUCCESS:
		return Object.assign({},state,{robots:action.payload , isPending: false})
		case GET_ROBOTS_FAILED: 
		return Object.assign({}, state, {error: action.payload, isPending:false})
		default:
		return state;

	}



}