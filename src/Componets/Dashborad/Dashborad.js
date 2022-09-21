import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import  useAdmit  from "../../hooks/useAdmit";
import { useAuthState } from 'react-firebase-hooks/auth';
import  auth from "../../firebase.init";

const Dashborad = () => {
    const [user] = useAuthState(auth)
    const [admit] = useAdmit(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="myDashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome To Your DashBoard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="myDashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashborad'>MyAppointment</Link></li>
                    <li><Link to='/dashborad/review'>MyReview</Link></li>
                    <li><Link to='/dashborad/myhistory'>MyHistory</Link></li>
                    {admit && <li><Link to='/dashborad/allusers'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashborad;