import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const GridTableData = ({ data }) => {
  const columns = [
    { field: "id", headerName: "Log ID", width: 200, sortingOrder: ["asc", "desc"] },
    {
      field: "applicationType",
      headerName: "Application Type",
      width: 200,
      sortingOrder: ["asc", "desc"],
      align: "center",
    },
    {
      field: "applicationId",
      headerName: "Application ID",
      width: 200,
      sortingOrder: ["asc", "desc"],
      align: "center",
    },
    { field: "actionType", headerName: "Action", width: 200, sortingOrder: ["asc", "desc"], align: "center" },
    { field: "actionDetails", headerName: "Action Details", sortable: false, width: 200, align: "center" },
    { field: "creationTimestamp", headerName: "Date: Time", width: 200, sortingOrder: ["asc", "desc"] },
  ];

  function createData(id, applicationType, applicationId, actionType, actionDetails, creationTimestamp) {
    return {
      id: id,
      applicationType: applicationType,
      applicationId: applicationId,
      actionType: actionType,
      actionDetails: actionDetails,
      creationTimestamp: creationTimestamp,
    };
  }

  const rows = data?.map((item) => {
    return createData(
      item?.logId,
      item?.applicationType,
      item?.applicationId,
      item?.actionType,
      item?.actionDetails,
      item?.creationTimestamp
    );
  });

  return (
    <div
      style={{
        height: "650px",
        width: "auto",
        margin: "0px 15px",
        boxShadow: "0px 2.17631px 7.61708px rgba(155, 204, 244, 0.241231)",
      }}
    >
      <DataGrid rows={rows} direction="asc" columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
    </div>
  );
};
