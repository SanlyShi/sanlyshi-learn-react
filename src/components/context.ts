import { createContext } from "react";
interface ObjCon {
  value?: any;
  setValue?: any;
}
export const MyContext = createContext<ObjCon>({});
