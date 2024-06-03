import { toast } from "react-toastify";

const BookCard = ({ book, location, removeFromShelf }) => {
  const addToBookshelf = () => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    const bookExists = bookshelf.some((b) => b.key === book.key);
    if (bookExists) {
      toast.error("Book already exists!!");
    } else {
      const newBook = {
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        edition_count: book.edition_count,
      };
      localStorage.setItem(
        "bookshelf",
        JSON.stringify([...bookshelf, newBook])
      );
      toast.success("Book added successfully.");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author_name?.[0]}</p>
        <p className="card-text">Edition Count: {book.edition_count}</p>
        {location !== "bookShelf" ? (
          <button className="btn btn-primary" onClick={addToBookshelf}>
            Add to Bookshelf
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => removeFromShelf(book.key)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
