export function Dashboard() {
    return (
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Item 1
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Item 2
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Item 3
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Dashboard;
  