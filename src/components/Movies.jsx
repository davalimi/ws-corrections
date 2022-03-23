import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) {
      return <p>Il n'y a pas de films dans la base de donnée</p>;
    }

    return (
      <>
        <p>Il y a {count} films dans la base de donnée</p>
        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
