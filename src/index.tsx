import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import App from "./App";
declare const BRIGHTNESS: string;
declare const THEME: string;
require(`highlight.js/styles/atom-one-${BRIGHTNESS}.css`);
require(`bootswatch/dist/${THEME}/bootstrap.css`);
require(`katex/dist/katex.css`);
render(<App />, document.getElementById("root"));
