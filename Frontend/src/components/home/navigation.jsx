import {
  FiHome,
  FiBookOpen,
  FiUsers,
  FiFileText,
  FiSettings,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";


export default function NavigationSidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md border-r p-4">
      <nav className="flex flex-col gap-4 text-gray-400">
        
        
        <NavItem
          icon={<FiHome />}
          text="Dashboard"
          linkTo="/home/dashboard"
        />
        
       
        <NavItem
          icon={<FiBookOpen />}
          text="Manage Books"
          linkTo="/home/books"
        />
        
       
        <NavItem
          icon={<FiUsers />}
          text="Borrowers"
          linkTo="/home/borrowers"
        />
 
        <NavItem
          icon={<FiFileText />}
          text="Borrow Records"
          linkTo="/home/records"
        />
        
  
        <NavItem
          icon={<FiSettings />}
          text="Settings"
        />
      </nav>
    </div>
  );
}

const NavItem = ({ icon, text, linkTo }) => {
  const currentLocation = useLocation();
  const isCurrentPage = currentLocation.pathname === linkTo;
  
  const normalStyle = "flex items-center gap-2 py-2 px-2 text-black";
  const activeStyle = isCurrentPage ? "bg-blue-600 text-white rounded" : "bg-none";
  
  return (
    <Link to={linkTo} className={`${normalStyle} ${activeStyle}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{text}</span>
    </Link>
  );
};