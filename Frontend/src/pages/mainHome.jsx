import { Outlet } from "react-router-dom";
import LibraryHeader from "../components/home/header";
import NavigationSidebar from "../components/home/navigation";


export default function LibraryHome() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top header bar */}
      <LibraryHeader />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar navigation */}
        <div>
          <NavigationSidebar />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}