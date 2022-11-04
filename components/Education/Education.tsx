import React from "react";
import AppArtical from "../AppArtical";
import EducationItem from "./EducationItem";

//* Types
export type EducationProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Education({
  ...props
}: React.PropsWithChildren<EducationProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Education">
      <EducationItem
        title="Building Service Worker Certificate"
        details={["Okanagan College Vernon 2011"]}
      />
      <EducationItem
        title="Aircaft Maintenance Engineer - Structures"
        details={["BCIT Kelowna airport 2007"]}
      />
      <EducationItem
        title="High School Deploma"
        details={["Rutland Senior Secondary 2006"]}
      />
    </AppArtical>
  );
}
