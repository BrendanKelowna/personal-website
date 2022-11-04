import React from "react";
import AppArtical from "../AppArtical";
import EmploymentItem from "./EmploymentItem";

//* Types
export type EmploymentProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Employment({
  ...props
}: React.PropsWithChildren<EmploymentProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Employment">
      <EmploymentItem
        location="Central Okanagan Public Schools SD#23"
        date="August 11, 2011 - present"
        positions={[
          {
            name: "Custodian",
            roles: [
              "Cleaning school and facilities",
              "General maintenance and upkeep",
              "Security",
              "Snow removal",
            ],
          },
        ]}
      />
    </AppArtical>
  );
}
