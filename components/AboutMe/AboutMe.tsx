import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AboutArticle } from "../Article/Article";
import ArticleDetails from "../Article/Details";
import Section from "../Section";

//* Types
export type AboutMeProps = { article?: AboutArticle };

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
  article,
  ...props
}: React.PropsWithChildren<AboutMeProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  const _details = article?.details
    ? Array.isArray(article.details)
      ? article.details
      : [article.details]
    : undefined;
  const detailElements = _details?.map((detail, index) => (
    <ArticleDetails key={index}>{detail}</ArticleDetails>
  ));

  return (
    <Section title="About" id="about">
      <Box sx={imageContainerStyle}>
        <Image
          alt="Profile Picture"
          height={400}
          width={300}
          src={article?.photos?.[0].href ?? "/images/profilepic.jpg"}
          objectFit="cover"
        />
      </Box>
      {detailElements}
    </Section>
  );
}
