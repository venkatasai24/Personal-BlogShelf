import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { toast } from "react-toastify";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBooks);
  }, []);

  const removeFromShelf = (key) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    const newBookshelf = bookshelf.filter((b) => key !== b.key);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
    setBookshelf(newBookshelf);
    toast.success("Book removed successfully.");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Bookshelf</h2>
      <div className="row">
        {bookshelf.map((book, index) => (
          <div key={index} className="col-md-4 mb-4">
            <BookCard
              book={book}
              location="bookShelf"
              removeFromShelf={removeFromShelf}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
