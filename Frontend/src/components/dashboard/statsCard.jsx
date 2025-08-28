
export default function StatsCard({ title, number, icon, colorTheme }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {number.toLocaleString()}
          </p>
        </div>
        
     
        <div className={`${colorTheme} p-3 rounded-full`}>
          <div className="text-2xl">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}