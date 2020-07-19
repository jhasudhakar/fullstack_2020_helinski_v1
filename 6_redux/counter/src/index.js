import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'
import App from './App'
import runTests from './reducers/noteReducer.test'

//const store = createStore(noteReducer)

/*
const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? '[important]' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}
*/

//==============================================

//===============================================

const store = createStore(noteReducer)

const renderApp = () => {
  console.log(store.getState());
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'Note 1: the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'Note 2: state changes are made with actions',
    important: false,
    id: 2
  }
})

//runTests('all tests passed');