import { posts_data } from '../../data/posts';

const defaultState = posts_data;

const CHANGE_LIKE = 'CHANGE_LIKE';
const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

export const changeLike = payload => ({ type: CHANGE_LIKE, payload })
export const deletePost = payload => ({ type: DELETE_POST, payload })
export const addPost = payload => ({ type: ADD_POST, payload })
export const addComment = payload => ({ type: ADD_COMMENT, payload })
export const deleteComment = payload => ({ type: DELETE_COMMENT, payload })

export const postsReducer = (state = defaultState, action) => {
    if (action.type === CHANGE_LIKE){
        const target_post = state.find(el => el.id === action.payload);
        target_post.like = !target_post.like
        return[...state]
    } else if(action.type === DELETE_POST) {
        return state.filter(el => el.id !== action.payload)
      } else if(action.type === ADD_POST) {
        return [...state, {
          id: Date.now(),
          like: false,
          comments: [],
          ...action.payload
        }]
      } else if(action.type === ADD_COMMENT) {
        
        const comment = {
          id: Date.now(),
          comment: action.payload.comment
        }
        const target_post = state.find(el => el.id === action.payload.post_id);
    target_post.comments.push(comment);
    return [...state]
  } else if (action.type === DELETE_COMMENT) {
    const target_post = state.find(el => el.id === action.payload.post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== action.payload.comment_id);
    return [...state]
  } else {
    return state
  }
}