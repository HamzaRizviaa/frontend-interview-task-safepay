import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Student } from "../../types";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

//Columns in the data grid and their respective fields and column names.
export function getColumns({
  onEdit,
  onDelete,
}: {
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}): GridColDef[] {
  return [
    { field: "uuid", headerName: "ID", flex: 1, minWidth: 80 },
    { field: "name", headerName: "Name", flex: 2, minWidth: 120 },
    { field: "age", headerName: "Age", flex: 1, minWidth: 80 },
    { field: "sex", headerName: "Sex", flex: 1, minWidth: 80 },
    { field: "class", headerName: "Class", flex: 1, minWidth: 80 },
    { field: "siblings", headerName: "Siblings", flex: 1, minWidth: 80 },
    { field: "gpa", headerName: "GPA", flex: 1, minWidth: 80 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      flex: 1,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams<Student>) => {
        const { row } = params;

        return (
          <>
            <IconButton
              color="primary"
              size="small"
              onClick={() => onEdit(row)}
              sx={{ mr: 1 }}
            >
              <EditIcon fontSize="small" />
            </IconButton>

            <IconButton
              color="error"
              size="small"
              onClick={() => onDelete(row)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </>
        );
      },
    },
  ];
}
