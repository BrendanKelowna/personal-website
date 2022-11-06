import { Stack } from "@mui/material";
import React from "react";
import AppArtical from "../AppArtical";
import ProjectItem from "./ProjectItem";

//* Types
export type ProjectsProps = {};

//* Definitions
const halloweenImages = [
  { title: "Minecraft Bee", url: "/images/halloween/bee.jpg" },
  { title: "Minecraft Ender Dragon", url: "/images/halloween/enderdragon.jpg" },
];
const pocketImages = [
  { title: "Before", url: "/images/pocket/before.jpg" },
  { title: "Almost Done", url: "/images/pocket/almost.jpg" },
  { title: "Done", url: "/images/pocket/done.jpg" },
];
const cupcasionsImages = [
  { title: "Login", url: "/images/cupcasions/login.png" },
  { title: "Edit Files", url: "/images/cupcasions/editfiles.png" },
  { title: "New Account", url: "/images/cupcasions/newaccount.png" },
  { title: "Profile", url: "/images/cupcasions/profile.png" },
];
const cupcasionsRenoImages = [
  { title: "Before", url: "/images/cupcasionsReno/before.jpg" },
  { title: "During", url: "/images/cupcasionsReno/during.jpg" },
  { title: "After", url: "/images/cupcasionsReno/after.jpg" },
];
const trailerImages = [
  { title: "Starting Floor", url: "/images/trailer/start-floor.jpg" },
  { title: "Starting Side", url: "/images/trailer/start-wall.jpg" },
  { title: "Walls Put Up", url: "/images/trailer/walls-up.jpg" },
  {
    title: "Starting Roof, Front and Back",
    url: "/images/trailer/start-roof.jpg",
  },
  {
    title: "Fan Rough In and Water Proofing",
    url: "/images/trailer/fan-rough-in.jpg",
  },
  { title: "Painted Back Side", url: "/images/trailer/paint-back.jpg" },
  { title: "Doors and Windows In", url: "/images/trailer/windows-door.jpg" },
  {
    title: "Almost Done Bunks and seats ",
    url: "/images/trailer/bunks-seats.jpg",
  },
  { title: "Almost Done Inside", url: "/images/trailer/almost-inside.jpg" },
  { title: "Wiring", url: "/images/trailer/wiring.jpg" },
  { title: "Almost Done Slide", url: "/images/trailer/almost-slide.jpg" },
  {
    title: "Finished Queen Pullout",
    url: "/images/trailer/finished-queen.jpg",
  },
  { title: "Finished Roof", url: "/images/trailer/finished-roof.jpg" },
  { title: "Finished and Towing", url: "/images/trailer/finished-towing.jpg" },
  {
    title: "Finished and Setup Bunkbeds",
    url: "/images/trailer/finished-bunks.jpg",
  },
  {
    title: "Finsihed and Setup Kitchen",
    url: "/images/trailer/finished-setup.jpg",
  },
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
          details={[
            "2021 - Current",
            "First project I started to learn modern front-end web development. Its a back-of-house web app for managing the website, product items, point of sales, orders, accounts, files, stores. It uses nextJs, mui, firebase functions, hosting, storage, firestore, google places. ",
          ]}
          width={810}
          height={450}
        />
        <ProjectItem
          photos={halloweenImages}
          title="Kids Halloween Minecraft Foamboard Costumes"
          details={[
            "October 2021 and 2022",
            "Made my youngest sons Halloween costumes out of foamboard. First year he was a Minecraft bee. Second year he was an Ender dragon",
          ]}
          height={648}
          width={486}
          delaySec={0.5}
        />
        <ProjectItem
          photos={pocketImages}
          title="Restoration Pocket Bike"
          details={["December 2021", "Restored a pocket bike for the kids"]}
          width={648}
          height={486}
          delaySec={1}
        />
        <ProjectItem
          photos={cupcasionsRenoImages}
          title="Cupcasions Reno Project"
          details={[
            "March 04, 2021",
            "Cupcasions asked me to remove a partition wall in the back to give them more working space.",
          ]}
          width={648}
          height={486}
          delaySec={1.5}
        />
        <ProjectItem
          photos={trailerImages}
          title="Travel Trailer Project"
          details={[
            "2020 August - October",
            `My Covid project was demolishing a pop-up tent trailer and building a travel trailer on the frame.
          We decided we wanted hard-sided travel trailer so we could camp earlier and later in the season.
          We wanted a trailer that was small light and could sleep are big family which was hard to find.
          The tent-trailers roof, corners, and front storage was rotten and needed repairs. 
          We decided to sacrifice the trailer and build on the frame. 
          There wasn't much wasted as we were able to reuse a lot of parts and sell what we didn't use. 
          The trailer we build has four single beds and one queen that slides out.
          The appliances from the tent-trailer we installed were the furnace and water pump.
          The walls are made out of 2x2's, 1.5” esp foam board, sandwiched between 4.7mm plywood. 
          The seams were fiberglass taped, then the skin was painted with epoxy, primered then painted. 
          Windows were taken from discarded truck canopies and a bus.
          The gross weight of the trailer is 2800lbs.`,
          ]}
          width={648}
          height={486}
          delaySec={2}
        />
      </Stack>
    </AppArtical>
  );
}
