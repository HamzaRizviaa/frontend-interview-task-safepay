import React, { useEffect, useState } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Button, FlexLayoutWrapper } from "../../styles/globalStyledComponents";
import StudentForm from "../../components/forms/StudentForm";
import DataGrid from "../../components/ui/tables/DataGrid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteStudent,
  getAllStudents,
  getSpecificStudent,
} from "../../data/features/students/studentActions";
import { getColumns } from "../../data/helpers/dataGridHelpers";
import { Student } from "../../types";
import DeleteStudentModal from "../../components/forms/DeleteForm";

const Home: React.FC = () => {
  //States
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  //dispatches get students api on component mount
  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const { students, specificStudent } = useAppSelector(
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

  const handleOpenDeleteModal = (student: Student) => {
    dispatch(getSpecificStudent(student.uuid));
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  //function for editing a row on the data grid which dispatches the specific student's detials through fetch student.
  const handleEditStudent = (student: Student) => {
    dispatch(getSpecificStudent(student.uuid));
    setEdit(true);
    setShowModal(true);
  };

  //function for deleting a row on the data grid.
  const handleConfirmDelete = async () => {
    try {
      if (!specificStudent) return;
      await dispatch(deleteStudent(specificStudent.uuid));
      handleCloseDeleteModal();
    } catch (e) {
      console.error(e);
    }
  };

  const columns = getColumns({
    onEdit: handleEditStudent,
    onDelete: handleOpenDeleteModal,
  });

  return (
    <DashboardLayout>
      <FlexLayoutWrapper page="home">
        <Button onClick={handleOpenFormModal} page="home" size="large">
          ADD STUDENT
        </Button>
      </FlexLayoutWrapper>

      <DataGrid columns={columns} rows={rows} />

      <StudentForm
        isEdit={isEdit}
        open={showModal}
        handleClose={handleCloseFormModal}
      />

      <DeleteStudentModal
        open={deleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleConfirm={handleConfirmDelete}
      />
    </DashboardLayout>
  );
};

export default Home;
