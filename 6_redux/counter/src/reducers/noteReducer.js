/*
const initialState = [
    { content: 'reducer defines how redux store works', important: true, id: 1},
    { content: 'state of store can contain any data', important: false, id: 2}
  ]

  const noteReducer = (state = initialState, action) => {
    ...
  }
  */

const noteReducer = (state = [], action) => {
    //console.log('noteReducer ACTION: ', action)
    switch(action.type) {
      case 'NEW_NOTE':
        return state.concat(action.data)
        //state.push(action.data); return state;
      case 'INIT_NOTES':
        return action.data
      case 'TOGGLE_IMPORTANCE': {
        const id = action.data.id
        console.log(state);
        console.log("Toggle of id=", id);
        const noteToChange = state.find(n => n.id === id)
        const changedNote = { 
          ...noteToChange, 
          important: !noteToChange.important 
        }
        return state.map(note =>
          note.id !== id ? note : changedNote 
        )
       }
      default:
        return state
    }
  }


/*
const generateId = () => {
  var rand = Math.random() * 1000000;
  var rand_fixed =  rand.toFixed(0)
  var ret = Number(rand_fixed);
  console.log("Random num = ", ret);
  return ret;
  //Number((Math.random() * 1000000).toFixed(0))
}
*/
const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

/*
export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}
*/
export const createNote = (data) => {
  return {
    type: 'NEW_NOTE',
    data,
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  }
}

export default noteReducer;
