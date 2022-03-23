import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export class Movies extends Component {
    constructor() {
    super();
    this.state = {
        movies: getMovies(),

    }
}

render(){
    
    
    //return count;
    return (
      <>  
        <table>
         <thead>
             <tr>
                    <th>titre</th>
                    <th>genre</th>
                    <th>stock</th>
                    <th>Note</th>
                    
            </tr>
            
        </thead>
        <tbody>
       {this.state.movies.map((movie)=>(
         <tr >
         <td>{movie.title}</td>
         <td>{movie.genre.name}</td>
         <td>{movie.numberInStock}</td>
         <td>{movie.dailyRentalRate}</td>
         </tr>

       ))}
        
        </tbody>
        </table>
        </>
    )
}


}
export default Movies;