import ReactDeleteRow from "react-delete-row";
import React, { useState } from "react";
import Data from "./fakeMovieService.json";
import { Table, Button } from "react-bootstrap";

const Movie2 = () => {
  const [data, setData] = useState(Data);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <ReactDeleteRow
              key={i}
              data={item}
              deleteElement={<Button variant="danger">Supprimer</Button>}
              onDelete={(item) => {
                return window.confirm(`Tu es sure?`);
              }}
            >
              <td>{item.title}</td>
              <td>{item.genre.name}</td>
              <td>{item.numberInStock}</td>
              <td>{item.dailyRentalRate}</td>
            </ReactDeleteRow>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Movie2;
