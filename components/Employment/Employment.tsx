import React from "react";
import { EmploymentArticle } from "../Article/Article";
import Section, { AppSectionProps } from "../Section";
import EmploymentItem, { EmploymentItemProps } from "./EmploymentItem";

//* Types
export type EmploymentProps = Omit<EmploymentItemProps, "article"> & {
  containerProps?: AppSectionProps;
  articles?: EmploymentArticle[];
};

//* Definitions

//* Styling

//* Helpers

export default function Employment({
  articles,
  containerProps,
  ...props
}: React.PropsWithChildren<EmploymentProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const articlesElements = articles?.map((article) => (
    <EmploymentItem key={article.id} article={article} {...props} />
  ));
  return (
    <Section title="Employment" {...containerProps}>
      {articlesElements}
    </Section>
  );
}
