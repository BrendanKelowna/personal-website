import { Stack, SxProps, StackProps } from "@mui/material";
import React, { ReactNode } from "react";
import ArticleHeader, { ArticleHeaderProps } from "../Header";
import ArticleSubHeader, { ArticleSubHeaderProps } from "../SubHeader";

//* Types
export type ArticleContentProps = StackProps & {
  title?: string;
  subheader?: string;
  subheaderProps?: ArticleSubHeaderProps;
  content?: ReactNode;
  containerProps?: StackProps;
  titleProps?: ArticleHeaderProps;
};

//* Definitions

//* Styling

//* Helpers

export default function ArticleContent({
  title,
  subheader,
  subheaderProps,
  content,
  containerProps,
  titleProps,
  sx,
  children,
  ...props
}: React.PropsWithChildren<ArticleContentProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Stack {...containerProps}>
      {title && <ArticleHeader {...titleProps}>{title}</ArticleHeader>}
      <Stack sx={{ ...sx, pl: 2 }} {...props}>
        {subheader && (
          <ArticleSubHeader {...subheaderProps}>{subheader}</ArticleSubHeader>
        )}
        {children}
      </Stack>
    </Stack>
  );
}
