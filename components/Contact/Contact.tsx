import { Stack } from "@mui/material";
import React from "react";
import AppArtical from "../AppArtical";
import AppLink from "../AppLink";

//* Types
export type ContactProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Contact({
  ...props
}: React.PropsWithChildren<ContactProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Contact">
      <Stack>
        <p>Website made with NextJs 12, Material UI, Firebase hosting</p>
        <p>Sorce code</p>
        <AppLink href="mailto:brendan.kelly.kelowna@outlook.com">
          brendan.kelly.kelowna@outlook.com
        </AppLink>
      </Stack>
    </AppArtical>
  );
}
