import axios from 'axios';

export const SMURF_NEW = 'SMURF_NEW';
export const SMURF_NEW_ERROR = 'SMURF_NEW_ERROR';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

/*******************************************
 * fetchSmurfs()
 * Description: Invoking this function, will trigger a GET request to the smurfs api.
 * Usage: fetchSmurfs()
 * Output:If successful, will return an array of smurfs from the api
 *******************************************/
export const fetchSmurfs = () => ( dispatch ) => {
    dispatch( { type: FETCH_SMURF_START } );
    axios.get( 'http://localhost:3333/smurfs' )
        .then( res => {
            dispatch( { type: FETCH_SMURF_SUCCESS, payload: res.data } )
        })
        .catch( err => {
            dispatch( { type: FETCH_SMURF_ERROR, payload: err.response } )
        }) 
}
/*******************************************
 * addSmurf()
 * Description: sends a post request to the api, adding a new smurf to the database.
 * Usage: addSmurf( smurfObject ) - object must contain 4 keys, set as strings. name, position, nickname, description
 * Output: Should return successful, if so, a new smurf will be added to the DB.
 *******************************************/
export const addSmurf = ( smurf ) => ( dispatch ) => {
    axios.post( 'http://localhost:3333/smurfs', smurf )
        .then( res => {
            dispatch( { type: SMURF_NEW, payload: smurf } )
        })
        .catch( err => {
            dispatch( { type: SMURF_NEW_ERROR, payload: err.response } );
        })
}

export const newError = ( err ) => ( dispatch ) => {
    dispatch( { type: SMURF_NEW_ERROR, payload:err } );
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.