import MUILink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

//* Types
export type AppLinkProps = MuiLinkProps & {
  nextProps?: Partial<NextLinkProps>;
  href: string;
};

//* Definitions

//* Styling

//* Helpers

export default function AppLink({
  nextProps,
  href,
  ...props
}: React.PropsWithChildren<AppLinkProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <NextLink href={href} passHref {...nextProps}>
      <MUILink {...props} />
    </NextLink>
  );
}
