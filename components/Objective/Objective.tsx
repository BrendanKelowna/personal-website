import React from "react";
import Default, { DefaultProps } from "../Article/Default";
import Section, { AppSectionProps } from "../Section";

//* Types
export type ObjectiveProps = DefaultProps & {
  containerProps?: AppSectionProps;
};

//* Definitions

//* Styling

//* Helpers

export default function Objective({
  containerProps,
  ...props
}: React.PropsWithChildren<ObjectiveProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Section title="Career Objective" {...containerProps}>
      <Default {...props} />
    </Section>
  );
}
