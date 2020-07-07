export const increment = () => {
    return {
      type : 'INCREMENT',
      payload : 'THis is increment'
    }
  }
  export const decrement = () => {
    return {
      type : 'DECREMENT',
      payload : 'THis is increment'
    }
}

export const FETCH_POSTS = "FETCH_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";