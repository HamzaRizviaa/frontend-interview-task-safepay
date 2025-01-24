import { DeleteandUpdateRecord, PostResponse, Student } from "../../types";
import axiosInstance from "../axiosInstance";

//ALL students in the database
export const getAllStudentsApi = () =>
  axiosInstance.get<Student[]>("/students");

//Specific student
export const getSpecificStudentApi = (id: number) =>
  axiosInstance.get<Student>(`/student/${id}`);

//Add student
export const createStudentApi = (data: Omit<Student, "uuid">) =>
  axiosInstance.post<PostResponse>("/student", data);

//Update student
export const updateStudentApi = (id: number, data: Omit<Student, "uuid">) =>
  axiosInstance.put<DeleteandUpdateRecord>(`/student/${id}`, data);

//Delete Student
export const deleteStudentApi = (id: number) =>
  axiosInstance.delete<DeleteandUpdateRecord>(`/student/${id}`);
