import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import InputField from "../../components/ui/inputs/InputField";
import StudentInformationCard from "../../components/ui/cards/StudentInformationCard";
import {
  FlexLayoutWrapper,
  InputWrapper,
} from "../../styles/globalStyledComponents";
import { useAppDispatch } from "../../store/hooks";
import { getSpecificStudent } from "../../data/features/students/studentActions";
import backgroundImage from "../../assets/Images/backgroundImage.webp"; //Compressed Image

const Lookup: React.FC = () => {
  //States
  const [lookupID, setLookupID] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch();

  const id = Number(lookupID);

  //Dispatches the fetch student api on the search icon click and validates the UUID before calling the api
  const handleIconClick = () => {
    if (!isNaN(id) && lookupID) {
      setErrorMessage("");
      dispatch(getSpecificStudent(id));
    } else if (!isNaN(id) && !lookupID) {
      setErrorMessage("Please enter a UUID!");
    }
  };

  //Dispatches the fetch student api on the ENTER button and validates the UUID before calling the api
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter" && lookupID) {
      setErrorMessage("");
      dispatch(getSpecificStudent(id));
    } else if (event.key == "Enter" && !lookupID) {
      setErrorMessage("Please enter a UUID!");
    }
  };

  return (
    <DashboardLayout background={backgroundImage}>
      <InputWrapper>
        <InputField
          name="lookup"
          label="LOOKUP WITH UUID"
          error={errorMessage}
          endIcon
          allowOnlyNumbers
          maxLength={5}
          onChange={(event) => setLookupID(event.target.value)}
          onIconClick={handleIconClick}
          onKeyDown={handleOnKeyDown}
        />
      </InputWrapper>

      <FlexLayoutWrapper page="lookup">
        <StudentInformationCard />
      </FlexLayoutWrapper>
    </DashboardLayout>
  );
};

export default Lookup;
