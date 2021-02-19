import { FETCH_SMURF_ERROR, SMURF_NEW, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, SMURF_NEW_ERROR } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = ( state = initialState, action ) =>{
    switch( action.type ){
        case FETCH_SMURF_START:
            return({
                ...state,
                error: '',
                isLoading: true
            })
        case FETCH_SMURF_SUCCESS:
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            })
        case FETCH_SMURF_ERROR:
            return({
                ...state,
                error: action.payload,
                isLoading: false,
            })
        case SMURF_NEW:
            return({
                ...state,
                smurfs: [ ...state.smurfs, action.payload ]

            })
        case SMURF_NEW_ERROR:
            return({
                ...state,
                error: action.payload,
                isLoading: false
            })
        default:
            return state;


    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.