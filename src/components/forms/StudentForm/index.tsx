import React, { useMemo, useState } from "react";
import Fade from "@mui/material/Fade";
import { Formik, Form, FormikHelpers } from "formik";
import {
  Box,
  BoxFormHeader,
  ButtonWrapper,
  FieldBox,
} from "./StyledComponents";
import Modal from "@mui/material/Modal";
import FormikField from "../../ui/inputs/formik/FormikField";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { Button, Logo2 } from "../../../styles/globalStyledComponents";
import {
  studentFormInitialValues,
  studentFormValidationSchema,
} from "../../../data/helpers/studentFormHelpers";
import { Student } from "../../../types";
import {
  createStudent,
  updateStudent,
} from "../../../data/features/students/studentActions";

interface Props {
  open: boolean;
  handleClose: () => void;
  isEdit: boolean;
}

const StudentForm: React.FC<Props> = ({ open, handleClose, isEdit }) => {
  //to reduce api calls on submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();

  const specificStudent = useAppSelector(
    (state) => state.rootReducer.studentSlice.specificStudent
  );

  // to persist initialvalues on rerender
  const initialValues = useMemo(
    () =>
      isEdit && specificStudent ? specificStudent : studentFormInitialValues,
    [specificStudent, isEdit]
  );

  //handler fired on submit button while adding and updating student
  const onSubmitHandler = async (
    values: Omit<Student, "uuid">,
    formikBag: FormikHelpers<Omit<Student, "uuid">>
  ) => {
    try {
      setIsSubmitting(true);
      isEdit && specificStudent
        ? await dispatch(
            updateStudent({ uuid: specificStudent.uuid, ...values })
          )
        : await dispatch(createStudent(values));
      formikBag.resetForm({ values: studentFormInitialValues });
      handleClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open} timeout={600}>
        <Box>
          <BoxFormHeader>
            <Logo2 />
            <h2>STUDENT FORM</h2>
          </BoxFormHeader>
          <Formik
            enableReinitialize //reinitializes initial values
            initialValues={initialValues}
            validationSchema={studentFormValidationSchema}
            onSubmit={onSubmitHandler}
          >
            <Form>
              <FieldBox>
                <FormikField
                  placeholder={"Enter name"}
                  name="name"
                  label="NAME"
                  maxLength={20}
                />
                <FormikField
                  placeholder={"Enter sex"}
                  name="sex"
                  label="SEX"
                  maxLength={10}
                />
                <FormikField
                  placeholder={"Enter age"}
                  name="age"
                  label="AGE"
                  allowOnlyNumbers
                  maxLength={2}
                  isEdit={isEdit}
                />
                <FormikField
                  placeholder={"Enter siblings"}
                  name="siblings"
                  label="SIBLINGS"
                  allowOnlyNumbers
                  maxLength={2}
                  isEdit={isEdit}
                />
                <FormikField
                  placeholder={"Enter class"}
                  name="class"
                  label="CLASS"
                  allowOnlyNumbers
                  maxLength={2}
                  isEdit={isEdit}
                />
                <FormikField
                  placeholder={"X.XX"}
                  name="gpa"
                  label="GPA"
                  maxLength={4}
                  allowGPA
                  isEdit={isEdit}
                />
              </FieldBox>
              <ButtonWrapper>
                <Button page="home" type="submit" disabled={isSubmitting}>
                  {isEdit ? "UPDATE STUDENT" : "ADD STUDENT"}
                </Button>
              </ButtonWrapper>
            </Form>
          </Formik>
        </Box>
      </Fade>
    </Modal>
  );
};

export default StudentForm;
