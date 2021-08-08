import {createStore} from 'redux'

import rootReducer from './reducers'


//creating store
const store=createStore(rootReducer)

//store example
// {
//     nameReducer, 
//     listsReducer.lists

// }

export default store