import React from "react";

import DashboardComp from "../DashboardComps";

type IProps = {
    children: JSX.Element;
};

const AppPageLayout: React.FC<IProps> = ({ children }) => (
    <DashboardComp>{children}</DashboardComp>
);

export default AppPageLayout;
