import { Box, Typography, useTheme } from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
//* Types
export type AppArticalProps = BoxProps &
  React.PropsWithChildren<{ title?: string }>;

//* Definitions

//* Styling

//* Helpers

export default function AppArtical({
  children,
  title,
  ...props
}: AppArticalProps): JSX.Element {
  //* Context
  const theme = useTheme();

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Box
      component="article"
      //sx={{ maxHeight: { xs: "initial", sm: "90vh" } }}
      {...props}
    >
      {title && (
        <Typography
          variant="h5"
          sx={{
            padding: "10px 10px 10px 20px",
            textTransform: "uppercase",
            opacity: 0.9,
            backgroundColor: theme.palette.primary.main + "30",
          }}
        >
          {title}
        </Typography>
      )}
      <Box role="main" sx={{ p: 2 }}>
        {children}
      </Box>
    </Box>
  );
}
