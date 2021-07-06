
import {ADD_MOVIES
    ,ADD_FAVOURITE
    ,UN_FAVOURITE
    ,SHOW_FAVOURITE
    ,ADD_MOVIE_TO_LIST
    ,ADD_SEARCH_RESULTS
} from "../actions"

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourite:false
}
export function movies(state=initialMoviesState,action){
    if(action.type===ADD_MOVIES){
     return{
       ...state,
       list:action.movies

       }
    }
    else if(action.type===ADD_FAVOURITE){
      
        return{
            ...state,
            favourites:[action.movie, ...state.favourites]
        }
    }
    else if(action.type===UN_FAVOURITE){
        const filteredarray=state.favourites.filter(movie=>{
           return  movie.Title!==action.movie.Title

        })
        return{ ...state,favourites:filteredarray }
        

    }
    else if(action.type===SHOW_FAVOURITE){
        return{
            ...state,
            showFavourite:action.val
        }

    }
    else if(action.type===ADD_MOVIE_TO_LIST){
        return{
            ...state,
            list:[action.movie,...state.list]
        }
    }
    return state;
    
}
const initialsearch={
    result:{},
    showSearchResult:false

}

export function search(state=initialsearch,action){
    
    
    if(action.type===ADD_SEARCH_RESULTS){
        return{
            ...state,
            result:action.movie,
            showSearchResult:true
            }
    }
    else if(action.type===ADD_MOVIE_TO_LIST){
        return{
            ...state,
            showSearchResult:false
        }
    }
    return state;

}

const initialRootState={

    movies:initialMoviesState,
    search:initialsearch
}

export  default function rootReducer(state=initialRootState,action){
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }

}