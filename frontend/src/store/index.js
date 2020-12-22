import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  allData = []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_ALL_DATA": 
      return { ...state, allData: payload }
    default: 
    return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
