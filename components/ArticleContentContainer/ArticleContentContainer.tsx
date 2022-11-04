import React from "react";
import Inline from "../Inline/Inline";

//* Types
export type ArticleContentContainerProps = {};

//* Definitions

//* Styling

//* Helpers

export default function ArticleContentContainer({
  children,
  ...props
}: React.PropsWithChildren<ArticleContentContainerProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Inline>{children}</Inline>;
}
