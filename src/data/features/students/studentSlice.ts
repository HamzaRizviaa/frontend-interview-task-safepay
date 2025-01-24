import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../../types";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getSpecificStudent,
  updateStudent,
} from "./studentActions";

interface StudentState {
  students: Student[];
  specificStudent: Student | null;
  specificStudentStatus: string;
  allStudentstatus: string;
}

//states of the student slice
const initialState: StudentState = {
  students: [],
  specificStudent: null,
  specificStudentStatus: "",
  allStudentstatus: "",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllStudents Action Cases
    builder.addCase(getAllStudents.pending, (state) => {
      state.allStudentstatus = "loading";
    });

    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      state.allStudentstatus = "success";
    });

    builder.addCase(getAllStudents.rejected, (state) => {
      state.allStudentstatus = "failed";
    });

    // getSpecificStudent Action Cases
    builder.addCase(getSpecificStudent.pending, (state) => {
      state.specificStudentStatus = "loading";
    });

    builder.addCase(getSpecificStudent.fulfilled, (state, action) => {
      state.specificStudent = action.payload;

      state.specificStudentStatus = "success";
    });

    builder.addCase(getSpecificStudent.rejected, (state) => {
      state.specificStudentStatus = "failed";
    });

    // deleteStudent Action Cases

    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      if (action.payload) {
        state.students = state.students.filter(
          (item) => item.uuid !== action.payload
        );
      }
    });

    // createStudent Action Cases
    builder.addCase(createStudent.fulfilled, (state, action) => {
      if (action.payload) {
        state.students = [...state.students, action.payload];
      }
    });

    // updateStudent Action Cases
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      if (action.payload) {
        state.students = state.students.map((item) =>
          item.uuid === action.payload?.uuid ? action.payload : item
        );
      }
    });
  },
});

export default studentSlice.reducer;
