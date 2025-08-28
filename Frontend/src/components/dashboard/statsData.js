import {
  FaBook,
  FaBookOpen,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";


const libraryStats = [
  {
    title: "Total Books",
    number: 1250,
    icon: FaBook,
    colorTheme: "text-blue-600 bg-blue-100",
  },
  {
    title: "Books Borrowed",
    number: 89,
    icon: FaBookOpen,
    colorTheme: "text-green-600 bg-green-100",
  },
  {
    title: "Active Borrowers",
    number: 156,
    icon: FaUsers,
    colorTheme: "text-purple-600 bg-purple-100",
  },
  {
    title: "Overdue Books",
    number: 12,
    icon: FaExclamationTriangle,
    colorTheme: "text-red-600 bg-red-100",
  },
];

export default libraryStats;