import { createContext } from "react";
import { ContentWindowContext } from "./interfaces";

const WindowContext = createContext<ContentWindowContext | undefined>(undefined)

export default WindowContext