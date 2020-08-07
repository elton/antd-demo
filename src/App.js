import React, { useState } from "react";
import {
  DatePicker,
  message,
  Alert,
  Button,
  Tooltip,
  Divider,
  Space,
} from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import { SearchOutlined } from "@ant-design/icons";
import "./App.scss";

import SizeButton from "./components/SizeButton";
import Icon from "./components/Icon";
import Typo from "./components/Typo";

moment.locale("zh-cn");

const ButtonDemo = () => (
  <Space>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
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
    <div style={{ width: 400, margin: "10px auto" }}>
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

const IconButton = () => (
  <Space>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
  </Space>
);

const App = () => (
  <>
    <Divider>日历 📅</Divider>
    <p>
      <DateDemo />
    </p>
    <Divider>Button</Divider>
    <p>
      <ButtonDemo />
    </p>
    <p>
      <SizeButton />
    </p>
    <p>
      <IconButton />
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
