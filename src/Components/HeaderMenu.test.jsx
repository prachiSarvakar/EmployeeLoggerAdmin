import React from "react";
import "@testing-library/jest-dom";
import { HeaderMenu } from "../Components/HeaderMenu";
import { Breadcrumbs, Link } from "@mui/material";
import { render, fireEvent } from "@testing-library/react";

describe("Render header", () => {
  const Wrapper = (props) => <HeaderMenu {...props} />;
  test("Render header", () => {});
});

it("routes to a new route", async () => {
  const { getByText } = render(
    <Breadcrumbs>
      <Link to="/home">Home</Link>
      <Link to="/administration">Administration</Link>
      <Link to="/logger-search"> Logger Search</Link>
    </Breadcrumbs>
  );
  fireEvent.click(getByText("Home"));
  fireEvent.click(getByText("Administration"));
  fireEvent.click(getByText("Logger Search"));
});
