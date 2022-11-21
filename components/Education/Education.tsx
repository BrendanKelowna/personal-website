import React from "react";
import { Article } from "../Article/Article";
import Section, { AppSectionProps } from "../Section";
import EducationItem, { EducationItemProps } from "./EducationItem";

//* Types
export type EducationProps = Omit<EducationItemProps, "article"> & {
  articles: Article[];
  containerProps?: AppSectionProps;
};

//* Definitions

//* Styling

//* Helpers

export default function Education({
  articles,
  containerProps,
  ...props
}: React.PropsWithChildren<EducationProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const educationElements = articles.map((article) => (
    <EducationItem key={article.id} article={article} {...props} />
  ));

  return (
    <Section title="Education" {...containerProps}>
      {educationElements}
    </Section>
  );
}
