import { Stack } from "@mui/material";
import React from "react";
import ArticleDetails from "../../Article/Details";
import ArticleContent from "../../Article/Content";
import PhotoCarousel, { Photo, PhotoCarouselProps } from "../../PhotoCarousel";
import ArticleHeader from "../../Article/Header";

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
    <ArticleDetails key={key}>{detail}</ArticleDetails>
  ));
  return (
    <Stack sx={{ pb: 2 }}>
      <ArticleHeader>{title}</ArticleHeader>
      <ArticleContent>{detailsComp}</ArticleContent>
      <PhotoCarousel {...props} />
    </Stack>
  );
}
