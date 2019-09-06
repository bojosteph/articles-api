import { 
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  REPLACE_COMMENT, 
  CLEAR_CURRENT
} from '../actions/types'

const initialState = { comments: [], user: {}, article: {}}

export default function commentsReducer(state = initialState, action) {
  switch(action.type) { 
    case RECEIVE_COMMENTS:
      return action.payload
    case ADD_COMMENT:
      return [action.payload, ...state]
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);
    case REPLACE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            body: action.payload.content
          }
        } else {
          return comment
        }
      })
    default:
      return state;
  }
}