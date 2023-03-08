import { Card } from "@mui/material";
import React from "react";
import DashboardComp from "../../components/DashboardComps";

const Dashboard: React.FC = () => {
    return (
        <DashboardComp>
            <Card>
                <h1>Dashboard</h1>
            </Card>
        </DashboardComp>
    );
};

export default Dashboard;
