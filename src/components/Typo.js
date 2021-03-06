import { Typography, Divider } from "antd";
import React, { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;

const Typo = () => {
  const [str, setStr] = useState("This is an editable text.");
  return (
    <Typography>
      <Title>介绍</Title>
      <Paragraph>
        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </Paragraph>
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "更多" }}>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
        Ant Design。基于<Text mark>『确定』和『自然』</Text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
        <Text strong>更好的用户体验</Text>。
      </Paragraph>

      <Divider />

      <Title level={2}>设计资源</Title>
      <Paragraph>
        我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text>{" "}
        和<Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <a href="/docs/spec/proximity">设计原则</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">设计模式</a>
          </li>
          <li>
            <a href="/docs/resource/download">设计资源</a>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        按<Text keyboard>Esc</Text>键退出阅读……
      </Paragraph>
      <Divider />

      <Paragraph editable={{ onChange: (str) => setStr(str) }}>{str}</Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: "Hello, Ant Design!" }}>
        Replace copy text.
      </Paragraph>
      <Paragraph copyable={{ icon: <SmileOutlined /> }}>Custom icon.</Paragraph>
      <Paragraph copyable={{ tooltips: ["click here", "you clicked!!"] }}>
        Replace tooltips text.
      </Paragraph>
    </Typography>
  );
};

export default Typo;
