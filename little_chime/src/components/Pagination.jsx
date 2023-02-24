import React from 'react'


export const Pagination = ({handlePage,page,total}) => {

console.log(handlePage, page, total);
  return (
    <div style={{margin:"auto"}}>
      <button
        style={{
          backgroundColor: "#4FC3F7",
          color: "white",
          width: "100px",
          border: "0",
          height: "30px",
          fontWeight: "bolder",
          fontSize: "15px",
          borderRadius: "5px",
          marginRight: "5px",
        }}
        disabled={page === 1}
        onClick={() => {
          handlePage(-1);
        }}
      >
        Previous
      </button>
      <button
        style={{
          backgroundColor: "#4FC3F7",
          color: "white",
          width: "100px",
          border: "0",
          height: "30px",
          fontWeight: "bolder",
          fontSize: "15px",
          borderRadius: "5px",
          marginRight: "5px",
        }}
      >
        {page}
      </button>
      <button
        style={{
          backgroundColor: "#4FC3F7",
          color: "white",
          width: "100px",
          border: "0",
          height: "30px",
          fontWeight: "bolder",
          fontSize: "15px",
          borderRadius: "5px",
          marginRight: "5px",
        }}
        disabled={page === total}
        onClick={() => {
          handlePage(1);
        }}
      >
        Next
      </button>
    </div>
  );
}
