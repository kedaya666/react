import {FETCH_POSTS,NEW_POSTS} from '../actions/types'

//reducer的作用：返回新的状态

const initialState = {
    items: [],
    item: {}
}
 export default function (state = initialState,action){
     switch(action.type){
        case NEW_POSTS:
            return {
                ...state,
                item:action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state
     }
 }