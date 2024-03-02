import {Content} from "./Content";

export interface Section {
  id: number;
  name: string;
  contents: Content[];
}
