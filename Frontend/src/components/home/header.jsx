import { FaBook } from "react-icons/fa";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import LogoutButton from "../utils/logout";


export default function LibraryHeader() {
  const iconStyle = "cursor-pointer text-2xl";
  
  return (
    <div className="flex justify-between">
      
      <div className="flex items-center p-2 gap-2.5">
        <FaBook className="cursor-pointer text-4xl text-blue-600" />
        <h1 className="text-3xl text-blue-700 font-bold">LIBRARY PORTAL</h1>
      </div>
      
      
      <div className="flex items-center justify-between text-5xl gap-6 mr-4">
        <FaSearch className={`${iconStyle}`} />
        <FaBell className={`${iconStyle}`} />
        <FaUser className={`${iconStyle}`} />
        <LogoutButton />
      </div>
    </div>
  );
}