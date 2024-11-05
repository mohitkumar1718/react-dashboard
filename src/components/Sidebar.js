import { FaHome, FaUserFriends, FaCalendar, FaUsers, FaBuilding, FaHeadset, FaCog } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for screen size and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Consider less than 1024px as mobile
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`sticky top-0 ${isMobile ? 'w-48' : 'w-64'} h-screen bg-gray-50 p-6 flex flex-col`}>
      {/* Logo Section */}
      <div className="mb-10 flex items-center space-x-2">
        {/* <img src="" alt="Logo" className="h-8 w-8" /> */}
        <h2 className="text-2xl font-semibold text-indigo-700">Vasitum</h2>
      </div>

      {/* Main Menu Section */}
      <div className="mb-8">
        <p className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-4">Main Menu</p>
        <nav className="flex flex-col gap-4 text-gray-600">
          <MenuItem icon={<FaHome />} label="Dashboard" active isMobile={isMobile} />
          <MenuItem icon={<FaUserFriends />} label="Recruitment" isMobile={isMobile} />
          <MenuItem icon={<FaCalendar />} label="Schedule" isMobile={isMobile} />
          <MenuItem icon={<FaUsers />} label="Employee" isMobile={isMobile} />
          <MenuItem icon={<FaBuilding />} label="Department" isMobile={isMobile} />
        </nav>
      </div>

      {/* Other Section */}
      <div>
        <p className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-4">Other</p>
        <nav className="flex flex-col gap-4 text-gray-600">
          <MenuItem icon={<FaHeadset />} label="Support" isMobile={isMobile} />
          <MenuItem icon={<FaCog />} label="Settings" isMobile={isMobile} />
        </nav>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ icon, label, active, isMobile }) => (
  <div
    className={`flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer ${
      active ? "bg-red-100 text-red-500" : "hover:bg-gray-100 hover:text-gray-800"
    }`}
  >
    <div className="text-lg">{icon}</div>
    {!isMobile && <span className={`font-medium ${active ? "text-red-500" : ""}`}>{label}</span>}
  </div>
);

export default Sidebar;
