import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Fab, SvgIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import { primaryOpacity } from "../../personal-website";

//* Types
export type ToTopProps = {};

//* Definitions

//* Styling

//* Helpers

export default function ToTop({
  ...props
}: React.PropsWithChildren<ToTopProps>): JSX.Element {
  //* Context

  //* State
  const [show, setShow] = useState(false);

  //* Effects
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShow(window.scrollY > 100 ? true : false)
    );
  }, []);

  //* Handlers
  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  //* Renders
  //TODO
  return (
    <Fab
      color="primary"
      size="small"
      aria-label="scroll back to top"
      onClick={scrollUp}
      sx={{
        backgroundColor: primaryOpacity(25),
        display: {
          xs: "initial",
          lg: "none",
          position: "fixed",
          right: "10px",
          bottom: "10px",
        },
      }}
    >
      <SvgIcon>
        <KeyboardDoubleArrowUpIcon sx={{ color: "black" }} />
      </SvgIcon>
    </Fab>
  );
}
