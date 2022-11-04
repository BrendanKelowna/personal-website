export const links = {
  home: "/",
};
export const primaryColor = "#19734f";
export const primaryOpacity = (hexOpacity: string | number) => {
  const _hexOpacity =
    typeof hexOpacity === "number" ? percentToHex(hexOpacity) : hexOpacity;
  return primaryColor + _hexOpacity;
};
export const percentToHex = (percent: number): string =>
  Math.floor((percent / 100) * 255).toString(16);
