import React from "react";
import { render, screen, require, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import fetchMock, { enableFetchMocks, mockResponse } from "jest-fetch-mock";
import { EmployeeDataTable } from "./EmployeeDataTable";

describe("Render app component", () => {
  const Wrapper = (props) => <EmployeeDataTable {...props} />;
  test("Render app component", () => {});
});

test("loads and displays greeting", async () => {
  fetchMock((req) =>
    req.url === "http://myapi/" ? callMyApi().then((res) => "ok") : Promise.reject(new Error("bad url"))
  );
});

test("loads and displays updated state", async () => {
  const { result } = renderHook(() => {
    const [data, setData] = React.useState([]);
    const [filterData, setFilterData] = React.useState([]);
    React.useEffect(() => {
      setData(["abc", "xyz"]);
      setFilterData(["abc"]);
    }, []);
    return data, filterData;
  });
});
