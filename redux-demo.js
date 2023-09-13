const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        };
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        };
    }
    return state;

};

const store = redux.createStore(counterReducer);
//console.log(store.getState());

//function doesn't get any paramenter
//it gets the latest state update from redux store
//the function will be triggered once the state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//now we need to make redux aware of this function
//subscribe method will need a function which changes
store.subscribe(counterSubscriber);

//now create a dispatch action
//action is javascript object with type property
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

