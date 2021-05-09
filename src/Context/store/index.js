import React,{useReducer} from 'react'
import reducer from '../reducers/reducer'

export const Store=React.createContext();

const initialState=false;

export const StoreProvider = (props) => {
    const [loading,dispatch]=useReducer(reducer,initialState);

    return <Store.Provider value={{loadingState:loading, loadingDispatch:dispatch}}>{props.children}</Store.Provider>
}
