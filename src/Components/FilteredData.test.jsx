import React from "react";
import { renderHook, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FilteredData } from "../Components/FilteredData";

const logsData = [
  {
    logId: "1",
    applicationId: "6",
    actionType: "ADD",
    applicationType: "INITIATE",
    source: "ONLINE",
    creationTimestamp: "22/11/2022",
  },
];

const defaultProps = {
  actionType: "",
  applicationID: "",
  applicationType: "",
  fromDate: "",
  logID: "",
  toDate: "",
};

const valueProps = {
  actionType: "ADD",
  applicationID: "12345",
  applicationType: "INITIATE",
  fromDate: "22-11-2022",
  logID: "23456",
  toDate: "30-11-2022",
};

const props = {
  data: logsData,
  filterTableData: jest.fn(),
  searchLog: defaultProps,
  setSearchLog: jest.fn(),
};

describe("Render filtered data component", () => {
  const Wrapper = (props) => <FilteredData {...props} />;
  test("Should Check Button", () => {
    render(<Wrapper {...props} />);
    const searchLogger = screen.getByText("Search Logger");
  });

  test("Should render all components", () => {
    render(<Wrapper {...props} />);
    expect(screen.getByText("Employee Log Id")).toBeInTheDocument();
    expect(screen.getByText("Action Type")).toBeInTheDocument();
    expect(screen.getByText("Application Type")).toBeInTheDocument();
    expect(screen.getByText("From Date")).toBeInTheDocument();
    expect(screen.getByText("To Date")).toBeInTheDocument();
    expect(screen.getByText("Application ID")).toBeInTheDocument();
  });

  test("Should Render Values passed as a prop", () => {
    render(<Wrapper {...props} searchLog={valueProps} />);
    expect(screen.getByDisplayValue("23456")).toBeInTheDocument();
    expect(screen.getByDisplayValue("12345")).toBeInTheDocument();
    expect(screen.getByDisplayValue("ADD")).toBeInTheDocument();
    expect(screen.getByDisplayValue("INITIATE")).toBeInTheDocument();
  });

  test("Should Check search logger getting clicked", () => {
    render(<Wrapper {...props} />);
    const searchLogger = screen.getByText("Search Logger");
    fireEvent.click(searchLogger);
  });
});
