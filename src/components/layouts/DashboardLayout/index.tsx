import React from "react";
import PrimaryLoader from "../../ui/loaders/PrimaryLoader";
import Header from "../../common/Header";
import { ContentWrapper } from "./styledComponents";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <PrimaryLoader loading={false}>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </PrimaryLoader>
  );
};

export default DashboardLayout;
