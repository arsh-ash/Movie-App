
import React from "react";
import {data} from "../data"
import { connect } from "react-redux";
import {handleMovieSearch, addMovieToList} from "../actions"



class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchText:""
        }
    }
    handleAddToMovies=(movie)=>{
       this.props.dispatch(addMovieToList(movie))
    }
    handleSearch=()=>{
    const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText))
    }
    handleChange=(event)=>{
         this.setState({
             searchText:event.target.value
            
         })
    }
    render(){
        console.log(this.props)
         const{result,showSearchResult}=this.props.search;
         
        
        return(
            <div className="nav">
                <div className="search-container">
                <input onChange={this.handleChange}></input>
                <button id="search-btn" onClick={this.handleSearch}>search</button>
                {showSearchResult&&
                
                <div className="search-results">
                <div className="search-result">
                <img src={result.Poster} alt="searchpic"/>
                <div className="movie-info">
                <span>{result.Title}</span>
                <button onClick={()=>this.handleAddToMovies(result)}>ADD TO MOVIES</button>
                </div>
                </div>
                </div>
                
                }
                </div>
            </div>
        )


    }
    
    
    

}

// class Navbarwrapper extends React.Component{
//     render(){
//       return(
//         <storeContext.Consumer>
//         {
//           (store)=>{
//            const{search}=store.getState();
//             return(
//               <Navbar store={store} search={search}/>          
//               )
  
//           }
//         }
  
//         </storeContext.Consumer>
//       )
//     }
//   }

function mapStateToprops(state){
  return{
    search:state.search
  }
}


export default connect(mapStateToprops)(Navbar);