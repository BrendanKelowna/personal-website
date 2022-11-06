import { Stack } from "@mui/material";
import React from "react";
import Details from "../../Details";
import PhotoCarousel, { Photo, PhotoCarouselProps } from "../../PhotoCarousel";
import SubHeader from "../../SubHeader";

//* Types
export type ProjectItemProps = PhotoCarouselProps & {
  title: string;
  details?: string[];
};

//* Definitions

//* Styling

//* Helpers

export default function ProjectItem({
  title,
  details,
  ...props
}: React.PropsWithChildren<ProjectItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const detailsComp = details?.map((detail, key) => (
    <Details key={key}>{detail}</Details>
  ));
  return (
    <Stack sx={{ pb: 2 }}>
      <SubHeader>{title}</SubHeader>
      {detailsComp}
      <PhotoCarousel {...props} />
    </Stack>
  );
}
