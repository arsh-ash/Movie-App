import React from "react";
import {data} from "../data.js"
import Navbarwrapper from "./Navbar.jsx"
import MovieCard from "./MovieCard.js"
import {addmovies,showfav}from "../actions"
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { search } from "../reducer/index.js";


class  App extends React.Component {
  componentDidMount(){
   
    this.props.dispatch(addmovies(data));
  }

  isFavourite=(movie)=>{

    const{movies}=this.props
    const index=movies.favourites.indexOf(movie);
    if(index==-1){
      return true;
    }
    else{
      return false;
    }

  }
  onChangeTab=(val)=>{
    this.props.dispatch(showfav(val))
  }
  
  render(){ 
    // pehle state array thi 
    // const movies=this.props.store.getState();
    // ab state object hai
    // console.log("state=",this.props.store.getState());
    const{movies,search}=this.props
    const{ showSearchResult,result}=search;
    const{list,favourites,showFavourite}=movies
    const displaymovies=showFavourite?favourites:list;
    return (
      <div className="main">   
      <Navbarwrapper />
      
      <div className="main"> 
        <div className="tabs">
             <div className={`tab ${showFavourite?'':`active-tabs`}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
             <div className={`tab ${showFavourite?`active-tabs`:''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
  
        </div>
        <div className="list">
             {displaymovies.map((movie,index)=>{
             return(
              <MovieCard  
              movie={movie} 
              key={index} 
              dispatch={this.props.dispatch}
              isFavourite={this.isFavourite(movie)}

              />
              )
     
             })}
        </div>
        {displaymovies.length==0?<div className="no-movies">No movies to display!</div>:null}
      </div>
      </div>
      
  
    );

  }
 
}

// class Appwrapper extends React.Component{
//   render(){
//     return(
//       <storeContext.Consumer>
//       {
//         (store)=>{
//           return(
//             <App store={store}/>          
//             )

//         }
//       }

//       </storeContext.Consumer>
//     )
//   }
// }
function mapStateToprops(state){
  return{
    movies:state.movies,
    search:state.search
  }
}
const connectAppcomponent=connect(mapStateToprops)(App);
export default connectAppcomponent

