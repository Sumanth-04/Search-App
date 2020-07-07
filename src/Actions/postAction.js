import {FETCH_POSTS,SEARCH_POSTS} from './index';

export const fetchPosts = ()=> dispatch =>{
    
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(data =>
    dispatch({
        type : FETCH_POSTS,
        payload : data
    })
    )
}

export const searchPosts = (post)=> dispatch =>{
    
    fetch(`https://api.github.com/users/${post}`)
    .then(response => response.json())
    .then(post =>{
        //console.log(JSON.stringify(post) + 'lalalallalla');
    dispatch({
        type : SEARCH_POSTS,
        payload : post
    })
}    )
}