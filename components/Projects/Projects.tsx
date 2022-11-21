import React from "react";
import { Article, ProjectArticle } from "../Article/Article";
import PhotoCarousel, { PhotoCarouselProps } from "../PhotoCarousel";
import Section, { AppSectionProps } from "../Section";
import Default, { DefaultProps } from "../Article/Default/";
import { Stack } from "@mui/system";

//* Types
export type ProjectsProps = Omit<DefaultProps, "article"> & {
  articles: ProjectArticle[];
  containterProps?: AppSectionProps;
  photoProps?: PhotoCarouselProps;
};

//* Definitions

//* Styling

//* Helpers

export default function Projects({
  articles,
  photoProps,
  containterProps,
  ...props
}: React.PropsWithChildren<ProjectsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const projectElements = articles.map((article) => (
    <Stack key={article.id} sx={{ mb: 2 }}>
      <Default article={article} {...props} />
      <PhotoCarousel
        photos={article.photos}
        height={article.photoSize.y}
        width={article.photoSize.x}
      />
    </Stack>
  ));

  return (
    <Section title="Projects" {...containterProps}>
      {projectElements}
    </Section>
  );
}
