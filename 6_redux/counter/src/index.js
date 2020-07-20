
/*
Following link has code for 6.1 part of redux tutorial in FullStack course.
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-1
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)

