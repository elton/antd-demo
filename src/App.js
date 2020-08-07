import React from "react";
import { Divider } from "antd";
import Buttons from "./components/Buttons";
import Icon from "./components/Icon";
import Typo from "./components/Typo";
import Calendar from "./components/Calendar";
import Grids from "./components/Grids";

import "./App.scss";

const App = () => (
  <>
    <Divider>
      日历{" "}
      <span role="img" aria-label="Calendar">
        📅
      </span>
    </Divider>
    <p>
      <Calendar />
    </p>
    <Divider>Button</Divider>
    <p>
      <Buttons />
    </p>
    <Divider>Icon</Divider>
    <p>
      <Icon />
    </p>
    <Divider>Typograph</Divider>
    <p>
      <Typo />
    </p>
    <Divider>Grids</Divider>
    <p>
      <Grids />
    </p>
  </>
);

export default App;
