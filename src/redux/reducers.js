import {combineReducers} from 'redux'
//name reducer
const initNameState={
    name:'Youtube'
}
function nameReducer(state=initNameState, action){
    console.log("inside name reducer", action)
    switch(action.type){

        case "UPDATE_NAME":
            return {
               ...state,
               name:action.payload
            }

        default:
            return state
    }
}


//lists reducer
const listInitialState={
    lists:[], 
   
}
function listsReducer(state=listInitialState, action){
    console.log("inside list reducer", action)
    switch(action.type){
        case "ADD_ITEM":
            return {
              ...state, 
              lists:[...state.lists, action.payload]
            }
        default: 
            return state
    }

}



//combine all reducers to one
const rootReducer=combineReducers({
    nameReducer,
    listsReducer
})

export default rootReducer