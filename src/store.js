import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";

const stringEnhancer = (createStore)=>(...args)=>{
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch =(action)=>{
        if(typeof action === 'string'){
            return originalDispatch({
                type: action
            })
        }
        return originalDispatch(action);
    }
    return store
}

const logEnhancer = (createStore)=>(...args)=>{
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch =(action)=>{
            console.log(action.type);
        return originalDispatch(action);
    }
    return store
}

const stringMiddleware =()=>(next)=>(action)=> {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
}

const logMiddleware = ({getState, dispatch})=>(next)=>(action)=>{
    console.log(action.type, getState());
    return next(action);

}

const myAction =(dispath)=>{
    setTimeout(()=>{
        dispath({
            type: 'DELETED_ACTION'
        })
    }, 2000)
}

const myActionCreator =(timeout)=>(dispath)=>{
    setTimeout(()=>{
        dispath({
            type: 'DELETED_ACTION'
        })
    }, timeout)
}
const store = createStore(reducer, composeWithDevTools( applyMiddleware(thunkMiddleware) ));
//store.dispatch(myActionCreator(3000));






//store.dispatch('HELLO_WORLD');

export default store;