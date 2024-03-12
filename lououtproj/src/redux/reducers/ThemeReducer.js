import { CHANGE_THEME,  } from "../ActionType";

export const ThemeReducers=(state=false,action)=>{
    switch(action.type){
        case CHANGE_THEME:
            return action.payload
        break;

        default:
            return state;
        break;

    }
}