import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Dialog, Fab, Modal, SvgIcon } from "@mui/material";
import Image from "next/image";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { PhotoObj } from "../../Article";
import { primaryOpacity } from "../../personal-website";

//* Types
export type Photo = PhotoObj;
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
  //margin: "0 auto",
};
const imgContStyle: CSSProperties = {
  top: 0,
  left: 0,
  transition: "opacity .25s ease-in",
};
const imageStyles: CSSProperties = {};
const arrowStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: primaryOpacity(25),
  transition: "opacity .25s",
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
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  //BUG state is stale and start/stop running 2 times onMouseOver and on MouseLeave
  // const [timer, setTimer] = useState<NodeJS.Timer | undefined>(undefined);
  const timerRef = useRef<NodeJS.Timer | undefined>(undefined);

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
    setShow(false);
    timerRef.current = timerRef.current ?? setInterval(next, time);

    // setTimer((state) => {
    //   console.log("start old timer", state);
    //   const newState = state ?? setInterval(next, time)
    //   console.log("", newState);
    //   return newState;
    // });
    // setTimer((state) => state ?? setInterval(next, time));
  };
  const stop = () => {
    setShow(true);
    clearInterval(timerRef.current);
    timerRef.current = undefined;

    // setTimer((state) => {
    //   console.log("stop old timer", state);
    //   clearInterval(state);
    //   console.log("stop new timer", undefined);
    //   return undefined;
    // });

    // setTimer((state) => {
    //   clearInterval(state);
    //   return undefined;
    // });
  };

  const next = () => {
    if (open) return;
    setIndex((state) => (state >= photos.length - 1 ? 0 : state + 1));
  };
  const previous = () => {
    setIndex((state) => (!state ? photos.length - 1 : state - 1));
  };

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
          src={photo.href}
          alt={photo.title}
          width={width}
          height={height}
        />
      </Box>
    );
  });
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          onClick={() => setOpen(false)}
          sx={{
            outline: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={imageStyles}
            src={photos[index].href}
            alt={photos[index].title}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Modal>
      <Box
        sx={{ ...containerStyle, maxWidth: width }}
        onMouseOver={stop}
        onMouseLeave={start}
      >
        <Fab
          sx={leftStyle}
          style={{ opacity: show ? 1 : 0 }}
          // style={{ opacity: timer ? 0 : 1 }}
          color="primary"
          onClick={previous}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   previous();
          // }}
        >
          <SvgIcon sx={iconStyle} fontSize="medium">
            <KeyboardDoubleArrowLeftIcon />
          </SvgIcon>
        </Fab>
        <Fab
          sx={rightStyle}
          style={{ opacity: show ? 1 : 0 }}
          // style={{ opacity: timer ? 0 : 1 }}
          color="primary"
          onClick={next}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   next();
          // }}
        >
          <SvgIcon sx={iconStyle} color="primary" fontSize="medium">
            <KeyboardDoubleArrowRightIcon />
          </SvgIcon>
        </Fab>
        <Box onClick={() => setOpen(true)}>{photosComps}</Box>
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
    </>
  );
}
