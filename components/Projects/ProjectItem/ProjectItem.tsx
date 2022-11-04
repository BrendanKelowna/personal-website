import { Stack } from "@mui/material";
import React from "react";
import Details from "../../Details";
import PhotoCarousel, { Photo } from "../../PhotoCarousel";
import SubHeader from "../../SubHeader";

//* Types
export type ProjectItemProps = {
  photos: Photo[];
  title: string;
  details?: string;
  width: string | number;
  height: string | number;
};

//* Definitions

//* Styling

//* Helpers

export default function ProjectItem({
  photos,
  title,
  details,
  height,
  width,
  ...props
}: React.PropsWithChildren<ProjectItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Stack>
      <SubHeader>{title}</SubHeader>
      <PhotoCarousel photos={photos} height={height} width={width} />
      {details && <Details>{details}</Details>}
    </Stack>
  );
}
