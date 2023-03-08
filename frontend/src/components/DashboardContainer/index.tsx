import React from "react";

import DashboardComp from "../DashboardComps";

interface IProps {
    children: JSX.Element;
}

const AppPage: React.FC<IProps> = ({ children }) => (
    <DashboardComp>{children}</DashboardComp>
);

export default AppPage;
