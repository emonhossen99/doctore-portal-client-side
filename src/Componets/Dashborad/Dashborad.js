import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashborad = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="myDashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome To Your DashBoard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="myDashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashborad'>MyAppointment</Link></li>
                    <li><Link to='/dashborad/review'>MyReview</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashborad;