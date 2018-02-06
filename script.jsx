const counter = (state = 0. action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }
}

// create store and pass in the reducer
const store = createStore(counter);

// quickly define our render using getState
const render = () => {
  document.body.innerText = store.getState();
};

// listen for changes and update ui
store.subscribe(render);
render();

// basic example dispatching action!!!
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});