import { Breadcrumbs, Link } from "@mui/material";
import React from "react";

export const HeaderMenu = () => {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link aria-label="home" underline="hover" color="primary" href="/">
        Home
      </Link>
      <Link aria-label="admin" underline="hover" color="primary" href="/">
        Administration
      </Link>
      <Link aria-label="search" color="secondary" underline="hover">
        Logger Search
      </Link>
    </Breadcrumbs>
  );
};
