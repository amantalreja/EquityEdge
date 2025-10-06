import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-200 sticky top-0 z-30">
      {/* ... navbar-start content is fine ... */}
      <div className="flex-1">
        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <h1 className="text-2xl font-bold hidden md:block ml-2">Dashboard</h1>
      </div>
      
      <div className="flex-none gap-4">
        {/* ... notifications dropdown is fine ... */}
        <div className="dropdown dropdown-end">
          {/* ... content ... */}
        </div>

        {/* --- THIS IS THE FIX --- */}
        {/* Only render the profile section if a user exists */}
        {user && (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={`https://i.pravatar.cc/150?u=${user.email}`} />
              </div>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
              <li><Link to="/profile" className="justify-between">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;