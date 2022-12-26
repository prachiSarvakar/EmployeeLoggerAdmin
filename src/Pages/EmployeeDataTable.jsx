import React from "react";
import { Divider } from "@mui/material";
import { FilteredData } from "../Components/FilteredData";
import { HeaderMenu } from "../Components/HeaderMenu";
import { GridTableData } from "../Components/GridTableData";

export const EmployeeDataTable = () => {
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    fetch(" https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((response) => response.json())
      .then((data) => {
        setData(data?.result?.auditLog);
        setFilterData(data?.result?.auditLog);
      });
  }, []);

  const filterTableData = (value) => {
    const dataToFilter = Object.entries(value).filter((item, index) => item[1] !== "");

    const dataAfterFilter = data.filter((item) => {
      var count = 0;
      dataToFilter.forEach((empData) => {
        if (empData[0] === "logID" && String(item.logId).includes(empData[1])) {
          count++;
        } else if (empData[0] === "actionType" && empData[1] === item.actionType) {
          count++;
        } else if (empData[0] === "applicationType" && empData[1] === item.applicationType) {
          count++;
        } else if (empData[0] === "applicationID" && String(item.applicationId).includes(empData[1])) {
          count++;
        } else if (
          empData[0] === "fromDate" &&
          new Date(empData[1]).getTime() <= new Date(item.creationTimestamp).getTime()
        ) {
          count++;
        } else if (empData[0] === "toDate" && new Date(empData[1]) >= new Date(item.creationTimestamp).getTime()) {
          count++;
        }
      });
      if (dataToFilter.length === count) return item;
    });
    setFilterData(dataAfterFilter);
  };

  return (
    <div style={{ margin: 15 }}>
      <HeaderMenu />
      <Divider style={{ marginTop: "15px" }} />
      <FilteredData data={data} filterTableData={filterTableData} />
      <GridTableData data={filterData} />
    </div>
  );
};
