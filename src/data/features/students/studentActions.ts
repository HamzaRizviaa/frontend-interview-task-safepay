//Actions for the student slice

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createStudentApi,
  deleteStudentApi,
  getAllStudentsApi,
  getSpecificStudentApi,
  updateStudentApi,
} from "../../services/studentService";
import { Student } from "../../../types";

export const getAllStudents = createAsyncThunk(
  "student/getAllStudents",
  async () => {
    const { data } = await getAllStudentsApi();

    return data;
  }
);

export const getSpecificStudent = createAsyncThunk(
  "student/getSpecificStudent",
  async (id: number) => {
    const { data } = await getSpecificStudentApi(id);

    return data;
  }
);

export const createStudent = createAsyncThunk(
  "student/createStudent",
  async (payload: Omit<Student, "uuid">) => {
    try {
      const { data } = await createStudentApi(payload);

      toast.success("Student has been added!");
      return { uuid: data.uuid, ...payload };
    } catch (e) {
      toast.error("Failed to add Student!");
      console.error(e);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async (payload: Student) => {
    const { uuid, ...studentData } = payload;
    try {
      const { data } = await updateStudentApi(uuid, studentData);

      if (data.success) {
        toast.success("Student has been updated!");
        return payload;
      } else {
        toast.error("Failed to update Student!");
      }
    } catch (e) {
      toast.error("Failed to update Student!");
      console.error(e);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id: number) => {
    try {
      const { data } = await deleteStudentApi(id);

      if (data.success) {
        toast.success("Student has been deleted!");
        return id;
      } else {
        toast.error("Failed to delete Student!");
      }
    } catch (e) {
      toast.error("Failed to delete Student!");
      console.error(e);
    }
  }
);
