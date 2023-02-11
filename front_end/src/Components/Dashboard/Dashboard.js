import React from 'react';
import UserAdmin from '../UserAdminPanel/UserAdmin';
import classes from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={classes.dashboardContainer}>
            <div className="px-5">
                <UserAdmin />
            </div>
        </div>
    )
}

export default Dashboard;