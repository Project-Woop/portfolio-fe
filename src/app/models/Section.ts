import {Category} from "./Category";

export interface Section {
  id: number;
  name: string;
  categories: Category[];
}
