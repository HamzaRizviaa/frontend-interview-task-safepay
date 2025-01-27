import React from "react";
import { DataGridProps } from "@mui/x-data-grid";
import { BoxWrapperGrid, DataGridMUI, GridHeader } from "./styledComponents";

const DataGrid: React.FC<DataGridProps> = ({ rows, columns }) => {
  return (
    <BoxWrapperGrid>
      <GridHeader variant="h3">Manage Students</GridHeader>
      <DataGridMUI
        getRowId={(row) => row.uuid}
        rows={rows}
        columns={columns}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        autoPageSize
      />
    </BoxWrapperGrid>
  );
};

export default DataGrid;
