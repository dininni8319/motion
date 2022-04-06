// const initialState = { 
//     post: [],
// };

// export default function favoriteReducer(state = initialState, action) {
//     switch (action.type) {

//         case 'ADD_POST': {
//             const newState = {...state}
            
//             newState.post = newState.post.concat(action.payload);    
            
//             return newState;
//         }

//         case 'REMOVE_POST': {
//             const newState = {...state}
//             newState.post = newState.favorite.filter(el => el.id != action.payload.id);
//             return newState;
//         }

//         default: 
//             return state
//     }
// }