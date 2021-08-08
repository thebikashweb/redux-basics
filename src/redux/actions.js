// update name action 
export const updateName=(name)=>{

    return {
        type:"UPDATE_NAME", 
        payload:name
    }
}

//add item to list action 
export const addItem=(item)=>{
    return {
        type:"ADD_ITEM", 
        payload:item
    }
}


//TODO HOMEWORK 
//create an action to add food item to food list reducer



