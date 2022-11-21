import React from "react";
import ArticleContent, { ArticleContentProps } from "../Content";
import AppLink, { AppLinkProps } from "../../Link";
import ArticleDetails, { ArticleDetailsProps } from "../Details";
import { DBArticle } from "../Article";

//* Types
export type DefaultProps = ArticleContentProps & {
  article: DBArticle;
  detailProps?: ArticleDetailsProps;
  linkProps?: Partial<AppLinkProps>;
};

//* Definitions

//* Styling

//* Helpers

export default function Default({
  article,
  detailProps,
  linkProps,
  children,
  ...props
}: React.PropsWithChildren<DefaultProps>): JSX.Element {
  //* Context
  const { title, details, links, subheader } = article;

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const _details = typeof details === "string" ? [details] : details;
  const detailsElements = _details?.map((detail, index) => (
    <ArticleDetails key={index} {...detailProps}>
      {detail}
    </ArticleDetails>
  ));
  const linksElements = links?.map((link, index) => (
    <AppLink key={index} href={link.href} newPage={link.newPage} {...linkProps}>
      {link.name}
    </AppLink>
  ));

  return (
    <ArticleContent title={title} subheader={subheader} {...props}>
      {linksElements}
      {detailsElements}
      {children}
    </ArticleContent>
  );
}
