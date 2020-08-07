import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";

import { Space } from "antd";
import React from "react";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

const Icon = () => (
  <Space>
    <div className="icons-list">
      <Space>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </Space>
    </div>
    <div className="icons-list">
      <Space>
        <IconFont type="icon-javascript" />
        <IconFont type="icon-java" />
        <IconFont type="icon-shoppingcart" />
        <IconFont type="icon-python" />
      </Space>
    </div>
  </Space>
);

export default Icon;
