import noteReducer from './noteReducer'
import deepFreeze from 'deep-freeze'
import expect from 'expect';

/*
describe('noteReducer', () => {
  test('returns new state with action NEW_NOTE', () => {
    const state = []
    const action = {
      type: 'NEW_NOTE',
      data: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      }
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })


  test('returns new state with action TOGGLE_IMPORTANCE', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2
      }]
  
    const action = {
      type: 'TOGGLE_IMPORTANCE',
      data: {
        id: 2
      }
    }
  
    deepFreeze(state)
    const newState = noteReducer(state, action)
  
    expect(newState).toHaveLength(2)
  
    expect(newState).toContainEqual(state[0])
  
    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      important: true,
      id: 2
    })
  })

})
*/

const testAddToState = (success_msg) => {
    //test('returns new state with action NEW_NOTE', () => {
      const state = []
      const action = {
        type: 'NEW_NOTE',
        data: {
          content: 'the app state is in redux store',
          important: true,
          id: 1
        }
      }
  
      deepFreeze(state)
      const newState = noteReducer(state, action)
  
      expect(newState).toHaveLength(1)
      expect(newState).toContainEqual(action.data)
    //})

    console.log(success_msg);
}
  

const testToggleState = (success_msg) => {
    //test('returns new state with action TOGGLE_IMPORTANCE', () => {
      const state = [
        {
          content: 'the app state is in redux store',
          important: true,
          id: 1
        },
        {
          content: 'state changes are made with actions',
          important: false,
          id: 2
        }]
    
      const action = {
        type: 'TOGGLE_IMPORTANCE',
        data: {
          id: 2
        }
      }
    
      deepFreeze(state)
      const newState = noteReducer(state, action)
    
      expect(newState).toHaveLength(2)
    
      expect(newState).toContainEqual(state[0])
    
      expect(newState).toContainEqual({
        content: 'state changes are made with actions',
        important: true,
        id: 2
      })
    //})
    console.log(success_msg);
  }
  

const runTests = (successMsg) => {
    testAddToState('Add test passed');
    testToggleState('Toggle test passed');
  
    console.info(successMsg);
  };
  
  export default runTests;
  //runTests('all tests passed');
