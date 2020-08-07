import React from "react";
import { Divider } from "antd";

import "./App.scss";

import Buttons from "./components/Buttons";
import Icon from "./components/Icon";
import Typo from "./components/Typo";
import Calendar from "./components/Calendar";

const App = () => (
  <>
    <Divider>日历 📅</Divider>
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
  </>
);

export default App;
