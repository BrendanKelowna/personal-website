import { Stack, Box, SxProps } from "@mui/material";
import {} from "@mui/styled-engine";
import Image from "next/image";
import React from "react";
import AppArtical from "../AppArtical";
import AppLink from "../AppLink";
import Details from "../Details";

//* Types
export type AboutMeProps = {};

//* Definitions

//* Styling
const imageContainerStyle: SxProps = {
  flex: " 1 0 auto",
  borderRadius: "50%",
  margin: "20px",
  overflow: "hidden",
  width: 250,
  height: 250,
  shapeOutside: "circle()",
  float: { sx: "none", sm: "left" },
  "&:after": { clear: "both" },
};

//* Helpers

export default function AboutMe({
  ...props
}: React.PropsWithChildren<AboutMeProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="About" id="about">
      {/* <Stack direction="row"> */}
      <Box sx={imageContainerStyle}>
        <Image
          height={400}
          width={300}
          src="/images/profilepic.jpg"
          objectFit="cover"
        />
      </Box>
      {/* <Stack> */}
      <Details>
        Hello. Welcome to my personal website. My name is Brendan Kelly
      </Details>
      <Details>
        I have been living in Kelowna for most of my life and currently working
        as a School District Custodian. I have been working for the school
        district for 11 years and I&apos;m looking for a more challenging and
        rewarding career. The fields I would be best skilled to transition into
        is software development or the skilled trades field. One of my strongest
        strengths is self learning and I have taught myself a lot in these
        fields and I&apos;m always keen to learn more.
      </Details>
      <Details>
        Over the years I have taught myself the basics of the skilled trades by
        doing projects around the house. One of my biggest project was to gut a
        tent trailer and build a hard sided travel trailer on the frame. The
        lesson I learned when building it is water gets everywhere. The bottom 6
        inches of the outer skin is getting water damaged from water getting up
        in behind it. I should have made a drop edge along the bottom. to fix it
        now the plan is to remove the damaged 6 inches and replace with diamond
        plate and proper transition. Even with all my previous experience
        I&apos;m always learning.
      </Details>
      <Details>
        Also I have taught myself how to program. It started when I was little.
        When world of warcraft came out I would write screen reader bots to play
        for me. To me it was more fun to write the bots then play the game. Less
        fun but more important is building and managing websites. The best
        example of a website I wrote would be
        <AppLink
          href="http://www.cupcasions.ca"
          style={{ paddingLeft: "1ch" }}
          target="_blank"
        >
          https://www.cupcasions.ca
        </AppLink>
        . It was built with no frameworks, just js html and css. I have learned
        a lot since then. Also for Cupcasions I installed a raspberry pie to
        turn on and off and run a tv menu board for them. Currently I&apos;m
        teaching myself nextJs and writing a back-of-house software for them to
        keep track of orders, pos, calendar, and website manager.
      </Details>
      {/* </Stack> */}
      {/* </Stack> */}
    </AppArtical>
  );
}
