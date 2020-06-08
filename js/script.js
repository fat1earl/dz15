import { storage } from "./storage";
import { FormNative } from "./form";

const formNode = document.querySelector("form");
new FormNative(formNode);
