import {FETCH_POSTS,SEARCH_POSTS} from '../Actions/index';

const intitalState = {
    items : [],
    item : []
};

export default function (state = intitalState , action ) {
    switch(action.type){
        case FETCH_POSTS : 
            return {
                ...state,
                items : action.payload
            }
        case SEARCH_POSTS:
            //console.log(action.payload)
            return {
                ...state,
                item : action.payload
            }
        default :
            return state;
    }
}