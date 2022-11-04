import React from "react";
import AppArtical from "../AppArtical";
import SkillItem from "./SkillItem";

//* Types
export type SkillsProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Skills({
  ...props
}: React.PropsWithChildren<SkillsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Skills and Hobbies">
      <SkillItem
        title="Basic tool skills"
        details="Tape measure, hammer, miter saw, table saw, power tools, hand tools"
      />
      <SkillItem
        title="Handyman skills"
        details="Painting, tiling, flooring, electric, plumbing, carpentry, hvac"
      />
      <SkillItem
        title="Drywall and finishing skills"
        details="Hanging, taping, floating, sanding"
      />
      <SkillItem
        title="Beginner welding skills"
        details="Flux core welding, grinding, sanding, prepping"
      />
      <SkillItem
        title="Automotive maintenance and repair"
        details="Trouble shooting, engine swap, oil and tire change"
      />
      <SkillItem
        title="Appliance repair and maintenance"
        details="Cupcasions kitchen equipment upkeep"
      />
      <SkillItem
        title="Computer programming skills"
        details="Order by strongest: ts, js, html, css, python, c, c++, sql, php"
      />
      <SkillItem
        title="Arduino microcontrollers"
        details="Arduino manufactures hardware and designs software software enabling users to create interactive electronic objects with microcontrollers written in (C++)"
      />
      <SkillItem
        title="Raspberry pi computers"
        details="RPI is a small low-power, always-on, single-board, lunix computer that I have programmed to auto-backup phone pictures, media center (kodi), home automation hub (home assistant), auto-download TV shows"
      />
      <SkillItem
        title="Home automation knowledge"
        details="My house runs Home Assistant hub locally with Sonoff wifi switches, flashed with Tasmota using MQTT protocol. This way this system is not dependent on a cloud or external internet"
      />
    </AppArtical>
  );
}
