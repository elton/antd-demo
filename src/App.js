import React, { useState } from "react";
import { DatePicker, message, Alert, Button } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./App.scss";

moment.locale("zh-cn");

const ButtonDemo = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

const DateDemo = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="当前日期"
          description={date ? date.format("YYYY年MM月DD日") : "未选择"}
        />
      </div>
    </div>
  );
};

const App = () => (
  <>
    <p>
      <DateDemo />
    </p>
    <p>
      <ButtonDemo />
    </p>
  </>
);

export default App;
