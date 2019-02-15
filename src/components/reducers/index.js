import { combineReducers, createStore } from 'redux';
export const reduce = (counter=10, action) => {
    switch(action.type){
        case 'INCREMENT':
        return ++counter
        case 'DECREMENT':
        return --counter
        default: return counter
    }
};

export const finalReducer = combineReducers({reduce});
