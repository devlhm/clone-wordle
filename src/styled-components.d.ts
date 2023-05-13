import { darkTheme } from "./Themes";

type CustomTheme = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}