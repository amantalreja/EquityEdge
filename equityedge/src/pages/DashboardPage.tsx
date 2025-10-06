import { useAuth } from "../context/AuthContext";
import PortfolioChart from "../components/PortfolioChart.tsx";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold leading-tight">
            Welcome back, {user?.name.split(' ')[0]}!
          </h1>
          <p className="mt-1 text-lg text-base-content/60">
            Here's your portfolio at a glance.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
           {/* ... your existing stat cards from the previous step are here ... */}
           <div className="stats shadow bg-base-300">
            <div className="stat">
              <div className="stat-figure text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div className="stat-title">Portfolio Value</div>
              <div className="stat-value">$25,650.75</div>
              <div className="stat-desc">Jan 1st - Oct 5th</div>
            </div>
          </div>
          <div className="stats shadow bg-base-300">
            <div className="stat">
              <div className="stat-figure text-success"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></div>
              <div className="stat-title">Today's Gain</div>
              <div className="stat-value text-success">+$341.60</div>
              <div className="stat-desc text-success">↗︎ 2.4%</div>
            </div>
          </div>
          <div className="stats shadow bg-base-300">
            <div className="stat">
              <div className="stat-figure text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div>
              <div className="stat-title">Active Alerts</div>
              <div className="stat-value">4</div>
              <div className="stat-desc">2 triggered today</div>
            </div>
          </div>
        </div>

        {/* NEW: Chart Component */}
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Portfolio Performance</h2>
            <PortfolioChart />
          </div>
        </div>
        
        {/* We can add the watchlist table back here later */}

      </div>
    </div>
  );
};

export default DashboardPage;