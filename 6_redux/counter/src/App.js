
// Used for functional component.
import React from 'react'


// Used for class Redux Component.
//import React, { Component } from 'react';

const generateId = () =>
Number((Math.random() * 1000000).toFixed(0))

const App = (props) => {
//class App extends Component {

    const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    props.store.dispatch(createNote(content))
    }

    const toggleImportance = (id) => {
        props.store.dispatch(toggleImportanceOf(id))
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
        {props.store.getState().map(note =>
            <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
            </li>
        )}
        </ul>
    </div>
    )
}


export default App;
