import React from "react";
import { Helmet } from "react-helmet";

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{"Client Portal" | process.env.REACT_APP_APP_NAME}</title>
      </Helmet>

      <div className="main-layout">
        <DefaultHeader />
        
        {children}

        <DefaultFooter />
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
