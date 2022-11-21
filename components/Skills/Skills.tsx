import React from "react";
import { Article } from "../Article/Article";
import Section, { AppSectionProps } from "../Section";
import SkillItem, { SkillItemProps } from "./SkillItem";

//* Types
export type SkillsProps = Omit<SkillItemProps, "article"> & {
  articles: Article[];
  containerProps?: AppSectionProps;
};

//* Definitions

//* Styling

//* Helpers

export default function Skills({
  articles,
  containerProps,
  ...props
}: React.PropsWithChildren<SkillsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const skillElements = articles.map((article) => (
    <SkillItem key={article.id} article={article} {...props} />
  ));
  return (
    <Section title="Skills and Hobbies" {...containerProps}>
      {skillElements}
    </Section>
  );
}
