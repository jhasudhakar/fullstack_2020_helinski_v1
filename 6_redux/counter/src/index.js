
/*
Following link has code for 6.1 part of redux tutorial in FullStack course.
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-1
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-2
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => console.log(store.getState()))
