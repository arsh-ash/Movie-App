
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const UN_FAVOURITE="UN_FAVOURITE";
export const SHOW_FAVOURITE="SHOW_FAVOURITE";
export const  ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST"
export const ADD_SEARCH_RESULTS="ADD_SEARCH_RESULTS"

export function addmovies(data){
    return{
    type:ADD_MOVIES,
    movies:data
    }

}

export function addfavourite(movie){
    return{
    type:ADD_FAVOURITE,
    movie:movie
}

}


export function unfavourite(movie){
    return{
    type:UN_FAVOURITE,
    movie:movie
}

}


export function showfav(val){
    return{
    type: SHOW_FAVOURITE,
    val:val
  }
}
export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie:movie
    }
}
export function addMovieSearchResult(movie){
    
    return{
        type:ADD_SEARCH_RESULTS,
        movie:movie
    }
}
// serach will be the string fo the serach right? or the movie u got after serach/

export function handleMovieSearch(movie){
    console.log(movie);
    const url=`http://www.omdbapi.com/?apikey=99a2d4&t=${movie}`
return function(dispatch){
    fetch(url)
    .then(response=>response.json())
    .then(movie=>{
        console.log("movie",movie);
        dispatch(addMovieSearchResult(movie));
        
    })

}



}