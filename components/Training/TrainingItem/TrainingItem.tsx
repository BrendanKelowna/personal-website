import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import SubHeader from "../../SubHeader";

//* Types
export type TrainingItemProps = { title: string; date: string; exp?: string };

//* Definitions

//* Styling

//* Helpers

export default function TrainingItem({
  title,
  date,
  exp,
  ...props
}: React.PropsWithChildren<TrainingItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Stack sx={{ mb: 1 }}>
      <SubHeader>{title}</SubHeader>
      <List sx={{ pt: 0 }}>
        <ListItem sx={{ paddingY: 0 }}>{date}</ListItem>
        {exp && (
          <ListItem sx={{ paddingY: 0 }}>
            <strong style={{ paddingRight: "1ch" }}>exp:</strong>
            {exp}
          </ListItem>
        )}
      </List>
    </Stack>
  );
}
