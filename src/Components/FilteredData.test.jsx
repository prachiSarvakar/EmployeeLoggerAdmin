import React from "react";
import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FilteredData } from "../Components/FilteredData";

describe("Render filtered data component", () => {
  const Wrapper = (props) => <FilteredData {...props} />;
  test("Render filtered data component", () => {});
});

test("loads and displays updated state", async () => {
  const { result } = renderHook(() => {
    const [searchLog, setSearchLog] = React.useState();
    React.useEffect(() => {
      setSearchLog(["abc"]);
    }, []);
    return searchLog;
  });
});
