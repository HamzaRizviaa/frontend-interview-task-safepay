import { GridColDef } from "@mui/x-data-grid";

//Columns in the data grid and their respective fields and column names.
export const columns: GridColDef[] = [
  { field: "uuid", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 350 },
  { field: "age", headerName: "Age", width: 150 },
  { field: "sex", headerName: "Sex", width: 200 },
  { field: "class", headerName: "Class", width: 150 },
  { field: "siblings", headerName: "Siblings", width: 150 },
  { field: "gpa", headerName: "GPA", width: 150 },
];
