import { Stack } from "@mui/material";
import React from "react";
import { Article } from "../Article/Article";
import Section from "../Section";
import ProgramingItem from "./ProgramingItem";

//* Types
export type ProgramingProps = { articles: Article[] };

//* Definitions

//* Styling

//* Helpers

export default function Programing({
  articles,
  ...props
}: React.PropsWithChildren<ProgramingProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const articleElements = articles.map((article) => (
    <ProgramingItem key={article.id} article={article} />
  ));

  return (
    <Section title="Coding Examples" {...props}>
      <Stack>{articleElements}</Stack>
    </Section>
  );
}
