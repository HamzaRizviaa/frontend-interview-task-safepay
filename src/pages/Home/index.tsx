import React, { useEffect, useState } from "react";
import { GridRowsProp, GridRowParams } from "@mui/x-data-grid";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Button, FlexLayoutWrapper } from "../../styles/globalStyledComponents";
import StudentForm from "../../components/forms/StudentForm";
import DataGrid from "../../components/ui/tables/DataGrid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getAllStudents,
  getSpecificStudent,
} from "../../data/features/students/studentActions";
import { columns } from "../../data/helpers/dataGridHelpers";
import { Student } from "../../types";

const Home: React.FC = () => {
  //States
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const dispatch = useAppDispatch();

  //dispatches get students api on component mount
  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const { students } = useAppSelector(
    (state) => state.rootReducer.studentSlice
  );

  const rows: GridRowsProp = students;

  const handleOpenFormModal = () => {
    setEdit(false);
    setShowModal(true);
  };

  const handleCloseFormModal = () => {
    setShowModal(false);
  };

  //function for row click on the data grid which dispatches the specific student's detials through fetch student.
  const handleRowClick = (params: GridRowParams<Student>) => {
    dispatch(getSpecificStudent(params.row.uuid));
    setEdit(true);
    setShowModal(true);
  };

  return (
    <DashboardLayout>
      <FlexLayoutWrapper page="home">
        <Button onClick={handleOpenFormModal} page="home" size="large">
          ADD STUDENT
        </Button>
      </FlexLayoutWrapper>

      <DataGrid onRowClick={handleRowClick} columns={columns} rows={rows} />

      <StudentForm
        isEdit={isEdit}
        open={showModal}
        handleClose={handleCloseFormModal}
      />
    </DashboardLayout>
  );
};

export default Home;
