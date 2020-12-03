import Axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("jYlIyJNi03tsAyGIGdtQZAB7KPPK6CGo");

  function handleSubmit(event) {
    event.preventDefault();

    Axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=" +
        apiKey +
        "&maxResults=40"
    ).then((data) => {
      console.log(data.data.results);
      setResult(data.data.results);
    });
  }
  return (
    <div class="container">
      <br></br>
      <h1>New York Times Best Selling Books List</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-info">
          Best Selling Book List
        </button>
      </form>
      <br></br>
      <table>
        {result.map((book) => (
          <tr>
            <td>
              <b>{book.display_name}</b>
              <td>
                <u>View Details</u>
                <br></br>
                List Name: {book.list_name}
                <br></br>
                Neweset Published Date: {book.newest_published_date}
                <br></br>
                Oldest Published Date: {book.oldest_published_date}
                <br></br>
                Updated: {book.updated}
                <br></br>
                <a href="https://www.amazon.com/">
                  <button type="submit" className="btn btn-danger">
                    Buy
                  </button>
                </a>
              </td>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
