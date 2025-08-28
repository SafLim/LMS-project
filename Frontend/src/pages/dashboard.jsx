import React from "react";
import StatsCard from "../components/dashboard/statsCard";
import libraryStats from "../components/dashboard/statsData";


export default function LibraryDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Library Overview</h1>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {libraryStats.map((statItem, index) => {
          return (
            <StatsCard
              key={index}
              title={statItem.title}
              number={statItem.number}
              icon={<statItem.icon />}
              colorTheme={statItem.colorTheme}
            />
          );
        })}
      </div>
      

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-700">📖 "The Great Gatsby" was borrowed by John Smith</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-gray-700">📚 "To Kill a Mockingbird" was returned by Sarah Johnson</span>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <span className="text-gray-700">📕 New book "1984" was added to collection</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </>
  );
}