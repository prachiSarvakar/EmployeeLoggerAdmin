/* eslint-disable no-unused-vars */
import React from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const FilteredData = ({ data, filterTableData, searchLog, setSearchLog }) => {
  let applicationTypeArray = data?.map(function (element) {
    return `${element?.applicationType}`;
  });
  let actionTypeArray = data?.map(function (element) {
    return `${element?.actionType}`;
  });

  const applicationTypeList = [...new Set(applicationTypeArray)];
  const actionTypeList = [...new Set(actionTypeArray)];

  const filterApplicationTypeList = applicationTypeList.filter((elements) => {
    return elements !== "null";
  });

  const filterActionTypeList = actionTypeList.filter((elements) => {
    return elements !== "null";
  });

  const HandleFilterData = (value, name) => {
    if (name === "logID") {
      setSearchLog({ ...searchLog, logID: value });
    } else if (name === "actionType") {
      setSearchLog({ ...searchLog, actionType: value });
    } else if (name === "applicationType") {
      setSearchLog({ ...searchLog, applicationType: value });
    } else if (name === "fromDate") {
      setSearchLog({ ...searchLog, fromDate: value });
    } else if (name === "toDate") {
      setSearchLog({ ...searchLog, toDate: value });
    } else if (name === "applicationID") {
      setSearchLog({ ...searchLog, applicationID: value });
    }
  };

  const searchResult = () => {
    filterTableData(searchLog);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={2} style={{}}>
              <Typography align="left">Employee Log Id</Typography>
              <TextField
                name="logID"
                value={searchLog.logID}
                onChange={(e) => HandleFilterData(e.target.value, "logID")}
                size="small"
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. 1234567890"
              />
            </Grid>

            <Grid item xs={2}>
              <Typography align="left">Action Type</Typography>
              <TextField
                name="actionType"
                value={searchLog.actionType}
                onChange={(e) => HandleFilterData(e.target.value, "actionType")}
                size="small"
                select
                sx={{ width: 180 }}
              >
                {filterActionTypeList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={2}>
              <Typography align="left">Application Type</Typography>
              <TextField
                name="applicationType"
                value={searchLog.applicationType}
                onChange={(e) => HandleFilterData(e.target.value, "applicationType")}
                size="small"
                select
                sx={{ width: 180 }}
              >
                {filterApplicationTypeList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={2}>
              <Typography align="left">From Date</Typography>
              <TextField
                name="fromDate"
                value={searchLog.fromDate}
                onChange={(e) => HandleFilterData(e.target.value, "fromDate")}
                type="date"
                size="small"
                placeholder="Select date"
                variant="outlined"
                sx={{ width: 180 }}
              />
            </Grid>

            <Grid item xs={2}>
              <Typography align="left">To Date</Typography>
              <TextField
                name="toDate"
                value={searchLog.toDate}
                onChange={(e) => HandleFilterData(e.target.value, "toDate")}
                type="date"
                size="small"
                placeholder="Select date"
                variant="outlined"
                sx={{ width: 180 }}
              />
            </Grid>

            <Grid item xs={2}>
              <Typography align="left">Application ID</Typography>
              <TextField
                onChange={(e) => HandleFilterData(e.target.value, "applicationID")}
                name="applicationID"
                value={searchLog.applicationID}
                size="small"
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. 21981/2022 "
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Typography align="left"></Typography>
          <Button onClick={searchResult} style={{ width: "150px", marginTop: "25px" }} variant="contained" size="small">
            Search Logger
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
