import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-200 sticky top-0 z-30">
      <div className="flex-1">
        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        {/* Hidden on small screens, shown on medium and up */}
        <h1 className="text-2xl font-bold hidden md:block ml-2">Dashboard</h1>
      </div>
      <div className="flex-none gap-4">
        {/* Notifications Dropdown */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-sm badge-primary indicator-item">2</span>
            </div>
          </button>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-72">
            <li className="p-2 font-bold">Notifications</li>
            <li><a><span className="font-bold text-error">Alert:</span> TSLA is down 5% today</a></li>
            <li><a><span className="font-bold text-success">Alert:</span> APPL reached your price target</a></li>
          </ul>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* Using a placeholder image generator */}
              <img alt="User Avatar" src={`https://i.pravatar.cc/150?u=${user?.email}`} />
            </div>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
            <li><Link to="/profile" className="justify-between">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;