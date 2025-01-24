//Customized Safepay brand loader to display during requests -- NOT USED anywhere because the response time was extremely fast

import React from "react";
import LoaderImage from "../../../../assets/Logos/1/Safepay-logo-01_black.svg";
import { Backdrop, Loader, LoaderContainer } from "./styledComponents";

interface Props {
  children: React.ReactNode;
  loading: boolean;
}

const PrimaryLoader: React.FC<Props> = ({ children, loading = false }) => {
  return (
    <Backdrop loading={loading}>
      {loading && (
        <LoaderContainer>
          <Loader src={LoaderImage} />
        </LoaderContainer>
      )}
      {children}
    </Backdrop>
  );
};

export default PrimaryLoader;
