import React from "react";
import { renderHook, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FilteredData } from "../Components/FilteredData";
const props = {
  data: ["abc", "xyz"],
  filterTableData: ["abc"],
  searchLog: "",
  setSearchLog: "",
};
describe("Render filtered data component", () => {
  const Wrapper = (props) => <FilteredData {...props} />;
  test("Should Check Button", () => {
    render(<Wrapper {...props} />);
    const searchLogger = screen.getByText("Search Logger");
  });
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
