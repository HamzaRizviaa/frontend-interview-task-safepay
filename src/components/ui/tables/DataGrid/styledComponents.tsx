import { styled } from "@mui/system";
import { Box as BoxMUI, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const BoxWrapperGrid = styled(BoxMUI)({
  height: "calc(100vh - 300px)",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const GridHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "20px",
  color: theme.palette.primary.main,
}));

export const DataGridMUI = styled(DataGrid)(({ theme }) => ({
  flexGrow: 1,
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  "& .MuiDataGrid-row": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.dark,
    cursor: "pointer",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: theme.palette.tertiary.light,
  },

  "& .MuiDataGrid-iconButtonContainer": {
    marginLeft: "4px",
    visibility: "visible !important",
    width: "auto !important",
  },

  "& .MuiDataGrid-sortIcon": {
    opacity: "inherit !important",
    color: theme.palette.tertiary.light,
  },
}));
