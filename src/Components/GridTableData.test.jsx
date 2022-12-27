import React from "react";
import { render, screen } from "@testing-library/react";
import { GridTableData } from "./GridTableData";

const defaultProps = {
  data: [],
};
const logsData = [
  {
    logId: "1",
    applicationId: "6",
    actionType: "ADD",
    applicationType: "Change",
    source: "ONLINE",
    creationTimestamp: "22/11/2022",
  },
];

const columns = [
  { field: "logId", headerName: "Log ID" },
  {
    field: "applicationType",
    headerName: "Application Type",
  },
  {
    field: "applicationId",
    headerName: "Application ID",
  },
];

describe("Render table data columns and rows", () => {
  const Wrapper = (props) => <GridTableData {...props} />;

  test("should render no results found text", () => {
    render(<Wrapper {...defaultProps} />);
    expect(screen.getByText("No rows")).toBeInTheDocument();
  });

  test("should render column headings", () => {
    render(<Wrapper {...defaultProps} />);
    columns.forEach(({ headerName }) => {
      expect(screen.getByText(headerName)).toBeInTheDocument();
    });
  });

  test("should render table data", () => {
    render(<Wrapper data={logsData} />);
    logsData.forEach((curLog) => {
      columns.forEach(({ field }) => {
        expect(screen.getByText(curLog[field])).toBeInTheDocument();
      });
    });
  });
});
