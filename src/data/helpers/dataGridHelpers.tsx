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
    { field: "uuid", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "sex", headerName: "Sex", width: 200 },
    { field: "class", headerName: "Class", width: 150 },
    { field: "siblings", headerName: "Siblings", width: 150 },
    { field: "gpa", headerName: "GPA", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      width: 120,
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
