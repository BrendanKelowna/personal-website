import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import SubHeader from "../../SubHeader";

//* Types
export type PositionType = { name: string; roles: string[] };
export type EmploymentItemProps = {
  location: string;
  date: string;
  positions: PositionType[];
};

//* Definitions

//* Styling

//* Helpers

export default function EmploymentItem({
  location,
  date,
  positions,
  ...props
}: React.PropsWithChildren<EmploymentItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const positionComponents = positions.map((position, key) => (
    <Position position={position} key={key} />
  ));
  return (
    <Stack sx={{ mb: 1 }}>
      <SubHeader>{location}</SubHeader>
      <List sx={{ pt: 0 }}>
        <ListItem sx={{ paddingTop: 0 }}>
          <Typography sx={{ fontStyle: "italic" }}>{date}</Typography>
        </ListItem>
        {positionComponents}
      </List>
    </Stack>
  );
}

const Position = ({ position }: { position: PositionType }) => {
  const roleComponents = position.roles.map((roles, key) => (
    <Role role={roles} key={key} />
  ));
  return (
    <div>
      <ListItem sx={{ paddingY: 0 }}>
        <SubHeader>{position.name}</SubHeader>
      </ListItem>
      {roleComponents}
    </div>
  );
};

const Role = ({ role }: { role: string }) => {
  return <ListItem sx={{ paddingY: 0 }}>- {role}</ListItem>;
};
