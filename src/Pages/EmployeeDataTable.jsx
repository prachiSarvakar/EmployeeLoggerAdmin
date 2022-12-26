/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import { FilteredData } from "../Components/FilteredData";
import { HeaderMenu } from "../Components/HeaderMenu";
import { GridTableData } from "../Components/GridTableData";

const defaultTableFilters = {
  logID: "",
  actionType: "",
  applicationType: "",
  fromDate: "",
  toDate: "",
  applicationID: "",
};

export const EmployeeDataTable = () => {
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchLog, setSearchLog] = React.useState(defaultTableFilters);

  const getQueryParams = () => {
    let obj = {};
    Object.keys(defaultTableFilters).forEach((val) => {
      obj = { ...obj, [val]: searchParams.get(val) || "" };
    });
    return obj;
  };

  React.useEffect(() => {
    fetch(" https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((response) => response.json())
      .then((data) => {
        setData(data?.result?.auditLog);
        const obj = getQueryParams();
        const dataAfterFilter = getFilteredData(obj, data?.result?.auditLog);
        setSearchLog({ ...defaultTableFilters, ...obj });
        setFilterData(dataAfterFilter);
      });
  }, [location]);

  const getFilteredData = (value, arrData = data) => {
    const dataToFilter = Object.entries(value).filter((item, index) => item[1] !== "");
    const dataAfterFilter = arrData.filter((item) => {
      let count = 0;
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
          new Date(empData[1]).setHours(0, 0, 0, 0) <= new Date(item.creationTimestamp).setHours(0, 0, 0, 0)
        ) {
          count++;
        } else if (
          empData[0] === "toDate" &&
          new Date(empData[1]).setHours(0, 0, 0, 0) >= new Date(item.creationTimestamp).setHours(0, 0, 0, 0)
        ) {
          count++;
        }
      });
      return dataToFilter.length === count;
    });
    return dataAfterFilter;
  };

  const filterTableData = (value) => {
    const dataToFilter = Object.entries(value).filter((item, index) => item[1] !== "");
    const dataAfterFilter = getFilteredData(value);
    setSearchParams(dataToFilter);
    setFilterData(dataAfterFilter);
  };

  return (
    <div style={{ margin: 15 }}>
      <HeaderMenu />
      <Divider style={{ marginTop: "15px" }} />
      <FilteredData data={data} setSearchLog={setSearchLog} searchLog={searchLog} filterTableData={filterTableData} />
      <GridTableData data={filterData} />
    </div>
  );
};
