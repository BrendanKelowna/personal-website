import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Fab, SvgIcon } from "@mui/material";
import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import { primaryOpacity } from "../../personal-website";

//* Types
export type Photo = { title: string; disciption?: string; url: string };
export type PhotoCarouselProps = {
  photos: Photo[];
  height: string | number;
  width: string | number;
  delaySec?: number;
};

//* Definitions
const time = 5000;

//* Styling
const containerStyle: CSSProperties = {
  position: "relative",
  margin: "0 auto",
};
const imgContStyle: CSSProperties = {
  top: 0,
  left: 0,
  transition: "opacity .5s ease-in",
};
const imageStyles: CSSProperties = {};
const arrowStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: primaryOpacity(25),
};
const leftStyle: CSSProperties = { ...arrowStyle, left: "20px" };
const rightStyle: CSSProperties = { ...arrowStyle, right: "20px" };
const iconStyle: CSSProperties = { color: "black", opacity: "100%" };
const thumbContainerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

//* Helpers

export default function PhotoCarousel({
  photos,
  height,
  width,
  delaySec,
  ...props
}: React.PropsWithChildren<PhotoCarouselProps>): JSX.Element {
  //* Context

  //* State
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timer | undefined>(undefined);

  //* Effects
  // TODO add delay
  useEffect(() => {
    const delayTimer = delaySec ? setTimeout(start, delaySec * 1000) : start();
    return () => {
      stop();
      clearTimeout(delayTimer ?? undefined);
    };
  }, []);

  //* Handlers
  const start = () => {
    setTimer((state) => (state ? state : setInterval(next, time)));
  };
  const stop = () => clearInterval(timer);

  const next = () => {
    console.log(index);
    setIndex((state) => (state >= photos.length - 1 ? 0 : state + 1));
  };
  const previous = () =>
    setIndex((state) => (!state ? photos.length - 1 : state - 1));

  //* Renders
  const photosComps = photos.map((photo, key) => {
    const _containerStyle: CSSProperties = {
      ...imgContStyle,
      zIndex: key * -1,
      opacity: index === key ? 1 : 0,
      position: !key ? "relative" : "absolute",
    };

    return (
      <Box style={_containerStyle} key={photo.title}>
        <Image
          style={imageStyles}
          src={photo.url}
          alt={photo.title}
          width={width}
          height={height}
        />
      </Box>
    );
  });
  return (
    <Box sx={containerStyle}>
      <Fab sx={leftStyle} color="primary" onClick={previous}>
        <SvgIcon sx={iconStyle} fontSize="medium">
          <KeyboardDoubleArrowLeftIcon />
        </SvgIcon>
      </Fab>
      <Fab sx={rightStyle} color="primary" onClick={next}>
        <SvgIcon sx={iconStyle} color="primary" fontSize="medium">
          <KeyboardDoubleArrowRightIcon />
        </SvgIcon>
      </Fab>
      {photosComps}
      <Box sx={thumbContainerStyles}>
        {photos.map((photo, key) => (
          <SvgIcon
            key={key}
            fontSize={key === index ? "medium" : "small"}
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => setIndex(key)}
          >
            <FiberManualRecordIcon />
          </SvgIcon>
        ))}
      </Box>
    </Box>
  );
}
