import { Stack } from "@mui/material";
import React from "react";
import AppArtical from "../AppArtical";
import AppLink from "../AppLink";
import Details from "../Details";

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
        <div>Website made with NextJs 12, Material UI, Firebase hosting</div>
        <AppLink href="https://github.com/BrendanKelowna/personal-website">
          Sorce code
        </AppLink>
        <AppLink href="mailto:brendan.kelly.kelowna@outlook.com">
          brendan.kelly.kelowna@outlook.com
        </AppLink>
      </Stack>
    </AppArtical>
  );
}
