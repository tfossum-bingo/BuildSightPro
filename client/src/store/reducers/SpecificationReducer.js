const {
  
} = require('../types')

const iState = {
  // jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
}

const SpecificationReducer = (state = iState, action) => {
  switch (action.type) {
    // case GET_ENTITIES:
    //   return { ...state, jobsites: action.payload }
    default:
      return { ...state }
  }
}

export default SpecificationReducer