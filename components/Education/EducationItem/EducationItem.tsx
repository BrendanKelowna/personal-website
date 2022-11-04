import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import SubHeader from "../../SubHeader";
//* Types
export type EducationItemProps = { title: string; details: string[] };

//* Definitions

//* Styling

//* Helpers

export default function EducationItem({
  title,
  details,
  ...props
}: React.PropsWithChildren<EducationItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const detailsComps = details.map((detail, index) => (
    <Details detail={detail} key={index} />
  ));
  return (
    <Stack sx={{ mb: 1 }}>
      <SubHeader>{title}</SubHeader>
      <List sx={{ pt: 0 }}>{detailsComps}</List>
    </Stack>
  );
}
const Details = ({ detail }: { detail: string }) => {
  return <ListItem sx={{ paddingY: 0 }}>{detail}</ListItem>;
};
