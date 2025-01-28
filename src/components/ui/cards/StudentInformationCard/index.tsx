import CardContent from "@mui/material/CardContent";
import { Card, SubHeading, LogoWrapper } from "./styledComponents";
import { useAppSelector } from "../../../../store/hooks";
import { Logo2 } from "../../../../styles/globalStyledComponents";
import { motion, AnimatePresence } from "framer-motion";
import { childVariants, layoutVariants } from "./animationVariants";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSubHeading = motion(SubHeading);
const MotionLogoWrapper = motion(LogoWrapper);

const StudentInformationCard: React.FC = () => {
  const { specificStudent } = useAppSelector(
    (state) => state.rootReducer.studentSlice
  );

  return (
    <AnimatePresence mode="wait">
      {specificStudent ? (
        <MotionDiv
          key={`studentCard-${specificStudent.uuid}`} // Unique key per student
          variants={layoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
        >
          <Card variant="outlined">
            <CardContent>
              <MotionDiv variants={childVariants}>
                <MotionSubHeading>{specificStudent.sex}</MotionSubHeading>
              </MotionDiv>
              <MotionH1 variants={childVariants}>
                {specificStudent.name}
              </MotionH1>
              <MotionDiv variants={childVariants}>
                <MotionSubHeading>
                  {specificStudent.age} Years Old
                </MotionSubHeading>
              </MotionDiv>
              <MotionP variants={childVariants}>
                <span>Class :</span> {specificStudent.class}
              </MotionP>
              <MotionP variants={childVariants}>
                <span>Siblings :</span> {specificStudent.siblings}
              </MotionP>
              <MotionP variants={childVariants}>
                <span>GPA : </span>
                {specificStudent.gpa}
              </MotionP>
              <MotionDiv variants={childVariants}>
                <MotionLogoWrapper>
                  <Logo2 />
                </MotionLogoWrapper>
              </MotionDiv>
            </CardContent>
          </Card>
        </MotionDiv>
      ) : (
        <MotionDiv
          key="fallbackText"
          variants={layoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <h1> Nothing to see here, yet ...</h1>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default StudentInformationCard;
