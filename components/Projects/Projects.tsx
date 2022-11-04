import { Stack } from "@mui/material";
import React from "react";
import AppArtical from "../AppArtical";
import ProjectItem from "./ProjectItem";

//* Types
export type ProjectsProps = {};

//* Definitions
const cupcasionsImages = [
  { title: "Login", url: "/images/cupcasions/login.png" },
  { title: "Edit Files", url: "/images/cupcasions/editfiles.png" },
  { title: "New Account", url: "/images/cupcasions/newaccount.png" },
  { title: "Profile", url: "/images/cupcasions/profile.png" },
];

//* Styling

//* Helpers

export default function Projects({
  ...props
}: React.PropsWithChildren<ProjectsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Projects">
      <Stack>
        <ProjectItem
          photos={cupcasionsImages}
          title="Cupcasions Back-End Web App Project"
          details="test "
          width={810}
          height={450}
        />
      </Stack>
    </AppArtical>
  );
}
