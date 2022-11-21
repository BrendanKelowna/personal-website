import React from "react";
import { Article } from "../Article/Article";
import Section, { AppSectionProps } from "../Section";
import TrainingItem, { TrainingItemProps } from "./TrainingItem";

//* Types
export type TrainingProps = {
  articles: Article[];
  containerProps?: AppSectionProps;
};

//* Definitions

//* Styling

//* Helpers

export default function Training({
  articles,
  containerProps,
  ...props
}: React.PropsWithChildren<TrainingProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const trainingElements = articles.map((article) => (
    <TrainingItem
      key={article.id}
      sx={{ mb: 1 }}
      article={article}
      detailProps={{ sx: { p: 0 } }}
      {...props}
    />
  ));
  return (
    <Section title="Training" {...containerProps}>
      {trainingElements}
    </Section>
  );
}
