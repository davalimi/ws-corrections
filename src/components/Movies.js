import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export class Movies extends Component {
    constructor() {
    super();
    this.state = {
        movies: getMovies(),

    }
}

handleDelete = (movie) => {
    const movies= this.state.movies.filter((m)=> m._id!==movie._id);
    this.setState({ movies: movies});
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
         <tr key={movie._id}>
         <td>{movie.title}</td>
         <td>{movie.genre.name}</td>
         <td>{movie.numberInStock}</td>
         <td>{movie.dailyRentalRate}</td>
         <td>  <button onClick={ () => this.handleDelete(movie)}
                className="btn btn-danger">Supprimer</button> </td>
         </tr>

       ))}
        
        </tbody>
        </table>
        </>
    )
}


}
export default Movies;