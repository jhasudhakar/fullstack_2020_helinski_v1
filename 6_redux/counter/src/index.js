
/*
Following link has code for 6.1 part of redux tutorial in FullStack course.
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-1
*/
import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import dummyReducer from './reducers/dummyReducer'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
  dummy: dummyReducer
})

//const store = createStore(noteReducer)
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => console.log(store.getState()))
//store.dispatch(filterChange('IMPORTANT'))
store.dispatch(filterChange('ALL'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))