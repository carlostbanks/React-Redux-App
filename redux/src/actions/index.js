import axios from 'axios';

// export const FETCH_DOGIMAGE_START = 'FETCH_DOGIMAGE_START';
// export const FETCH_DOGIMAGE_SUCCESS = 'FETCH_DOGIMAGE_SUCCESS';
// export const FETCH_DOGIMAGE_FAILURE = 'FETCH_DOGIMAGE_FAILURE';

// export const getDogImage = () => dispatch => {
//     dispatch({ type: FETCH_DOGIMAGE_START });
//     axios
//         .get('https://dog.ceo/api/breeds/image/random')
//         .then(resp => {
//             dispatch({ type: FETCH_DOGIMAGE_SUCCESS, payload: resp.message.file })
//         })
//         .catch(err => {
//             dispatch({ type: FETCH_DOGIMAGE_FAILURE, payload: err })
//         });
// };

export const getDogImage = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        axios 
            .get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                dispatch({ type: 'NEW_DOG', payload: res.data.message })
            })
            .catch(err => console.log("ERROR", err));
    };
};
