import { Button, Radio, Space, Tooltip } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";

function Buttons() {
  const [size, setSize] = useState("large");

  const NormalButton = () => (
    <>
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
    </>
  );
  const SizeButton = () => (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space>
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
      </Space>
      <br />
      <br />
      <Space>
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button
          type="primary"
          shape="circle"
          icon={<DownloadOutlined />}
          size={size}
        />
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={size}
        />
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={size}
        >
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </Space>
    </>
  );
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
  return (
    <>
      <NormalButton />
      <br />
      <br />
      <SizeButton />
      <br />
      <br />
      <IconButton />
    </>
  );
}

export default Buttons;
