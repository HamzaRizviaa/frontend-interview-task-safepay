import * as Yup from "yup";
import { Student } from "../../types";

//Initial values of the form
export const studentFormInitialValues: Omit<Student, "uuid"> = {
  name: "",
  age: 0,
  siblings: 0,
  sex: "",
  gpa: 0,
  class: 0,
};

//Schema to validate the forms in the field
export const studentFormValidationSchema = Yup.object({
  name: Yup.string().trim().required("You need to enter a name"),
  sex: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Please select an appropriate option.")
    .required("You need to select the gender"),
  age: Yup.number()
    .required("You need to enter your age")
    .min(1, "Atleast 1 character required"),
  siblings: Yup.number()
    .required("You need to enter your siblings")
    .min(1, "Atleast 1 character required"),
  gpa: Yup.string()
    .matches(/^[0-4][.][0-9][0-9]*$/, "Invalid Format of the GPA (ex. 3.47)")
    .required("You need to enter your gpa")
    .min(3, "Atleast 3 characters required"),
  class: Yup.number()
    .max(12, "Class cannot be greater than 12")
    .required("You need to enter your class")
    .min(1, "Class should be greater than 0"),
});
