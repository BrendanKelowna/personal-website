import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import SubHeader from "../../SubHeader";

//* Types
export type SkillItemProps = { title: string; details: string };

//* Definitions

//* Styling

//* Helpers

export default function SkillItem({
  title,
  details,
  ...props
}: React.PropsWithChildren<SkillItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Stack sx={{ mb: 1 }}>
      <SubHeader>{title}</SubHeader>
      <List sx={{ pt: 0 }}>
        <ListItem sx={{ paddingTop: 0 }}>
          <Typography>{details}</Typography>
        </ListItem>
      </List>
    </Stack>
  );
}
