import React from 'react'
import {LOADING_START,LOADING_STOP} from '../actions/type'

const reducer=(state,action)=>{
    switch(action){
        case LOADING_START:
            return true;
        case LOADING_STOP:
            return false;
        default:
            return state;
    }
}

export default reducer;