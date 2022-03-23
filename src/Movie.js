import React from "react"

export default function Movie({title,genre,number,daily}) {
    return (
        <>
        <td>{title}</td>
         <td>{genre}</td>
         <td>{number}</td>
         <td>{daily}</td>
         </>   
    )
}