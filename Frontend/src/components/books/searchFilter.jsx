import { FaSearch } from "react-icons/fa";


export default function SearchFilter() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        

        <div className="md:col-span-8 flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
          <FaSearch className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search books by title or author..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>


        <div className="md:col-span-3">
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 outline-none text-sm"
            defaultValue=""
          >
            <option value="" disabled>Filter by category</option>
            <option value="all">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

      
        <div className="md:col-span-1">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}