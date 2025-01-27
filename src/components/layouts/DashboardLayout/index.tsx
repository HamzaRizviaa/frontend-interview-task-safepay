import React from "react";
import PrimaryLoader from "../../ui/loaders/PrimaryLoader";
import Header from "../../common/Header";
import { ContentWrapper } from "./styledComponents";

interface Props {
  children: React.ReactNode;
  background?: string;
}

const DashboardLayout: React.FC<Props> = ({ children, background = "" }) => {
  return (
    <PrimaryLoader loading={false}>
      <ContentWrapper background={background}>
        <Header />
        {children}
      </ContentWrapper>
    </PrimaryLoader>
  );
};

export default DashboardLayout;
