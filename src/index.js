import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './locationFinder/locationFinderReducer'
import App from './app/App'

const store = createStore(reducer)
debugger
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


console.log('hello world dcc');

//throw 'custom error for test';
