import React from 'react';
import UserAdmin from '../UserAdminPanel/UserAdmin';
import classes from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={classes.dashboardContainer}>
            <div className="lg:container md:container sm:container px-5">
                <UserAdmin />
            </div>
        </div>
    )
}

export default Dashboard;