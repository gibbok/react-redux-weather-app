import 'isomorphic-fetch'
import * as api from '../app/api' 

const getFindLocations = query => ({
  type: 'GET_FIND',
  payload: new Promise((resolve, reject) => {
    fetch(api.find(query)).then(response => {
      resolve(response.json())
    })
  })
})
const setFinderSearchValue = (value) => ({
  type: 'SET_FIND_VALUE',
  payload: value
})

export { getFindLocations, setFinderSearchValue }
