import React from "react";

import DashboardComp from "../DashboardComps";

interface IProps {
    children: JSX.Element;
}

const AppPageLayout: React.FC<IProps> = ({ children }) => (
    <DashboardComp>{children}</DashboardComp>
);

export default AppPageLayout;
