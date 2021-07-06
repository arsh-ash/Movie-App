import { render } from "@testing-library/react";
import React from "react";
import {addfavourite,unfavourite} from "../actions"

class  MovieCard extends React.Component{
    handleFavluriteClick=()=>{
         const {movie}=this.props
        this.props.dispatch(addfavourite(movie));
    }
    handleUnfavouriteClick=()=>{
        const {movie}=this.props

        this.props.dispatch(unfavourite(movie))
    }
    
    render(){
        const {movie,isFavourite}=this.props
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster"src={movie.Poster}/>
                </div>
                <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        isFavourite?<button className="favourite-btn" onClick={this.handleFavluriteClick}>Favourite</button>
                        :<button className="unfavourite-btn" onClick={this.handleUnfavouriteClick}>unFavourite</button>
                    }
                
                </div>
                    
                    
    
                </div>
            </div>
        )
    }
 

}

export default MovieCard;