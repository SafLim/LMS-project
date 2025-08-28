import { useNavigate } from "react-router-dom";


export default function LogoutButton() {
  const navigate = useNavigate();
  

  const handleSignOut = () => {

    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    

    navigate("/");
  };
  
  return (
    <button
      onClick={handleSignOut}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
    >
      Sign Out
    </button>
  );
}