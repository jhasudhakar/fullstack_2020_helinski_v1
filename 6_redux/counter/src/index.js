import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'
import runTests from './reducers/noteReducer.test'

const store = createStore(noteReducer)

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
const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const App = () => {

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id))
  }



  const createNote = (content) => {
      return {
        type: 'NEW_NOTE',
        data: {
          content,
          important: false,
          id: generateId()
        }
      }
  }
  
  const toggleImportanceOf = (id) => {
      return {
        type: 'TOGGLE_IMPORTANCE',
        data: { id }
      }
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" /> 
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map(note =>
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}
//===============================================

const renderApp = () => {
  console.log(store.getState());
  ReactDOM.render(<App />, document.getElementById('root'))
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