import CardContent from "@mui/material/CardContent";
import { Card, SubHeading, LogoWrapper } from "./styledComponents";
import { useAppSelector } from "../../../../store/hooks";
import { Logo2 } from "../../../../styles/globalStyledComponents";

const StudentInformationCard: React.FC = () => {
  const { specificStudent } = useAppSelector(
    (state) => state.rootReducer.studentSlice
  );

  return specificStudent ? (
    <Card variant="outlined">
      <CardContent>
        <SubHeading>{specificStudent.sex}</SubHeading>
        <h1>{specificStudent.name}</h1>
        <SubHeading>{specificStudent.age} Years Old</SubHeading>
        <p>
          <span>Class :</span> {specificStudent.class}
        </p>
        <p>
          <span>Siblings :</span> {specificStudent.siblings}
        </p>
        <p>
          <span>GPA : </span>
          {specificStudent.gpa}
        </p>
        <LogoWrapper>
          <Logo2 />
        </LogoWrapper>
      </CardContent>
    </Card>
  ) : (
    <h1>Nothing to see here, yet ...</h1>
  );
};

export default StudentInformationCard;
