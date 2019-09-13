import {
SEARCH_DATA
} from './types'

export const search = (data) => {
  return {
    type: SEARCH_DATA,
    payload: data
  }
}