import { Size } from "./Size";
import { Area } from "./Area";

export type RichMenu = {
  size: Size,
  selected: boolean,
  name: string,
  chatBarText: string,
  areas: Area[]
}
