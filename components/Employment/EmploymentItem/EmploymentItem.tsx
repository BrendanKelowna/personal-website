import React from "react";
import { EmploymentArticle } from "../../Article/Article";
import Default, { DefaultProps } from "../../Article/Default";

//* Types
export type EmploymentItemProps = DefaultProps & {
  article: EmploymentArticle;
  positionProps?: DefaultProps;
};

//* Definitions

//* Styling

//* Helpers

export default function EmploymentItem({
  article,
  ...props
}: React.PropsWithChildren<EmploymentItemProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const positionComponents = article.positions?.map((position, key) => (
    <Default
      article={position}
      key={key}
      containerProps={{ sx: { mt: 1 } }}
      detailProps={{ sx: { padding: 0, "&::before": { content: '"- "' } } }}
    ></Default>
  ));

  return (
    <Default article={article} {...props}>
      {positionComponents}
    </Default>
  );
}
