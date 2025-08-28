import { FaBook, FaEye, FaEdit, FaTrash } from "react-icons/fa";


export default function BookTable({ books, onEditBook, onDeleteBook }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full text-sm text-center text-gray-700">
        

        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-3 text-left">Book Details</th>
            <th className="px-4 py-3">Author</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Total Copies</th>
            <th className="px-4 py-3">Available</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        

        <tbody className="divide-y divide-gray-100">
          {books.map((book) => (
            <tr
              key={book.id}
              className="hover:bg-gray-50 transition-colors"
            >
           
              <td className="flex items-center gap-3 px-4 py-3 text-left">
                <div className="flex-shrink-0">
                  <FaBook className="text-blue-500 text-xl" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{book.title}</div>
                  <div className="text-gray-500 text-xs">ISBN: {book.isbn}</div>
                </div>
              </td>
              
      
              <td className="px-4 py-3">{book.author}</td>
              
         
              <td className="px-4 py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {book.category}
                </span>
              </td>
              
      
              <td className="px-4 py-3 font-medium">{book.totalCopies}</td>
              
             
              <td className="px-4 py-3">
                <span className={`font-medium ${
                  book.availableCopies > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {book.availableCopies}
                </span>
              </td>
              

              <td className="px-4 py-3">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  book.availableCopies > 0 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {book.availableCopies > 0 ? 'Available' : 'All Borrowed'}
                </span>
              </td>
              

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                    <FaEye />
                  </button>
                  <button 
                    onClick={() => onEditBook(book)}
                    className="p-2 text-green-600 hover:bg-green-100 rounded"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => onDeleteBook(book.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      {books.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FaBook className="mx-auto text-4xl mb-4 text-gray-300" />
          <p>No books found in the library collection.</p>
        </div>
      )}
    </div>
  );
}