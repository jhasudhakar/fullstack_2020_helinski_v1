
/*
Following link has code for 6.1 part of redux tutorial in FullStack course.
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-1
  https://github.com/fullstack-hy2020/redux-notes/tree/part6-2
*/
import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import noteReducer, { initializeNotes } from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'


import noteService from './services/notes'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
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


noteService.getAll().then(notes => {
  console.log("Dispatching initilization notes");
  store.dispatch(initializeNotes(notes))
  }
)

//store.dispatch(filterChange('IMPORTANT'))
store.dispatch(filterChange('ALL'))
console.log("Dispatching Sample new note");
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))