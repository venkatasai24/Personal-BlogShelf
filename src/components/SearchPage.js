import { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { ClipLoader } from "react-spinners";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (query.trim() !== "") {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setBooks(response.data.docs);
      } else {
        setBooks([]);
      }
    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch}>
        <input
          className="form-control mb-4"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search for books..."
        />
      </form>
      {loading && (
        <div className="text-center">
          <ClipLoader color="#007bff" loading={loading} size={50} />
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {books.map((book) => (
          <div key={book.key} className="col-md-4 mb-4">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
