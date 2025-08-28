import { useState, useEffect } from "react";
import axios from "axios";
import BookTable from "../components/books/bookTable";
import BookForm from "../components/books/bookForm";
import SearchFilter from "../components/books/searchFilter";
import ActionButton from "../components/books/actionButton";


export default function BookManagement() {
 
  const [allBooks, setAllBooks] = useState([]);
  const [showBookForm, setShowBookForm] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  
  const fetchAllBooks = async () => {
    const authToken = localStorage.getItem("authToken");
    
    try {
      const booksResponse = await axios.get("http://localhost:8000/books", {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      
      setAllBooks(booksResponse.data);
    } catch (error) {
      console.error("Failed to get books:", error);
      alert("Could not load books. Please try again.");
    }
  };

  const removeBook = async (bookId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    const authToken = localStorage.getItem("authToken");
    
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      

      setAllBooks(allBooks.filter(book => book.id !== bookId));
      alert("Book deleted successfully!");
      
    } catch (error) {
      console.error("Failed to delete book:", error);
      alert("Could not delete book. Please try again.");
    }
  };


  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Book Collection</h1>
        

        <ActionButton 
          onClick={() => setShowBookForm(true)}
          text="Add New Book"
          icon="+"
        />
      </div>


      <SearchFilter />


      <BookTable
        books={allBooks}
        onEditBook={(book) => {
          setBookToEdit(book);
          setShowBookForm(true);
        }}
        onDeleteBook={removeBook}
      />

      {showBookForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
            <BookForm
              allBooks={allBooks}
              setAllBooks={setAllBooks}
              closeForm={() => {
                setShowBookForm(false);
                setBookToEdit(null);
              }}
              bookToEdit={bookToEdit}
            />
          </div>
        </div>
      )}
    </>
  );
}