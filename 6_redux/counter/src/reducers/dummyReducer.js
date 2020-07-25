var initialDummyState = {
    sname: "sud",
    lname: "jha"
}

const dummyReducer = (state = initialDummyState, action) => {
    console.log('dummyReducer ACTION: ', action)
    return state
  }

  
  export default dummyReducer