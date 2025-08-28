import ActionButton from "./actionButton";
import { useState, useEffect } from "react";
import axios from "axios";


export default function BookForm({ allBooks, setAllBooks, closeForm, bookToEdit }) {

  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookIsbn, setBookIsbn] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");


  useEffect(() => {
    if (bookToEdit) {
      setBookTitle(bookToEdit.title);
      setBookAuthor(bookToEdit.author);
      setBookIsbn(bookToEdit.isbn);
      setBookCategory(bookToEdit.category);
      setTotalCopies(bookToEdit.totalCopies);
      setAvailableCopies(bookToEdit.availableCopies);
    }
  }, [bookToEdit]);


  const handleSaveBook = async (e) => {
    e.preventDefault();
    

    if (!bookTitle || !bookAuthor || !bookIsbn || !bookCategory || !totalCopies || !availableCopies) {
      alert("Please fill in all fields.");
      return;
    }

    
    if (isNaN(totalCopies) || isNaN(availableCopies)) {
      alert("Total copies and available copies must be numbers.");
      return;
    }


    if (parseInt(availableCopies) > parseInt(totalCopies)) {
      alert("Available copies cannot be more than total copies.");
      return;
    }


    const bookData = {
      title: bookTitle,
      author: bookAuthor,
      isbn: bookIsbn,
      category: bookCategory,
      totalCopies: parseInt(totalCopies),
      availableCopies: parseInt(availableCopies),
      dateAdded: new Date().toISOString().split("T")[0], // Today's date
    };

    const authToken = localStorage.getItem("authToken");
    
    try {
      if (bookToEdit) {
     
        const updateResponse = await axios.put(
          `http://localhost:8000/books/${bookToEdit.id}`,
          bookData,
          { headers: { Authorization: `Bearer ${authToken}` } }
        );
        

        setAllBooks((prevBooks) =>
          prevBooks.map((book) => (book.id === bookToEdit.id ? updateResponse.data : book))
        );
        alert("Book updated successfully!");
        
      } else {
    
        const addResponse = await axios.post(
          "http://localhost:8000/books",
          bookData,
          { headers: { Authorization: `Bearer ${authToken}` } }
        );
        
        
        setAllBooks((prevBooks) => [...prevBooks, addResponse.data]);
        alert("Book added successfully!");
      }

      
      clearFormFields();
      closeForm();
      
    } catch (error) {
      console.error("Error saving book:", error);
      alert("Something went wrong while saving the book.");
    }
  };


  const clearFormFields = () => {
    setBookTitle("");
    setBookAuthor("");
    setBookIsbn("");
    setBookCategory("");
    setTotalCopies("");
    setAvailableCopies("");
  };

  return (
    <div className="p-8">
   
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-800">
          {bookToEdit ? "Edit Book Details" : "Add New Book"}
        </h2>
        <p className="text-sm text-gray-500">
          Fill in the book information below
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSaveBook}>
        
   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Book Title</label>
            <input
              type="text"
              placeholder="Enter book title"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Author</label>
            <input
              type="text"
              placeholder="Enter author name"
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">ISBN</label>
            <input
              type="text"
              placeholder="978-0-123456-78-9"
              value={bookIsbn}
              onChange={(e) => setBookIsbn(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Category</label>
            <select
              value={bookCategory}
              onChange={(e) => setBookCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="" disabled>Select category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Biography">Biography</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Total Copies</label>
            <input
              type="number"
              placeholder="5"
              value={totalCopies}
              onChange={(e) => setTotalCopies(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Available Copies</label>
            <input
              type="number"
              placeholder="3"
              value={availableCopies}
              onChange={(e) => setAvailableCopies(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

 
        <div className="flex gap-3 pt-4">
          <ActionButton type="submit" text={bookToEdit ? "Update Book" : "Add Book"} />
          <button
            type="button"
            onClick={closeForm}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}