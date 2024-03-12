import { REMOVE_ITEM } from "../ActionType";

export const Reducers=(state=[],action)=>{
    switch(action.type){
        case ADD_ITEM:
            return [...state,action.payload]
        break;
        
        case REMOVE_ITEM:
            const removeddata=state.filter((ele,index)=>{
            return(index==action.payload)
        })
        break;

        default:
            return state;
        break;

    }
}