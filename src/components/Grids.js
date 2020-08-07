import React from "react";
import { Row, Col, Divider } from "antd";

const style = { background: "#0092ff", padding: "8px 0" };

const Rows = () => (
  <Row gutter={[16, 24]}>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
  </Row>
);

const JustifyColumns = () => (
  <>
    <Divider orientation="left">Justify columns</Divider>
    <Row justify="space-around">
      <Col span={4}>
        <div style={style}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={style}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={style}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={style}>col-4</div>
      </Col>
    </Row>
  </>
);

const PercentageColumns = () => (
  <>
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={2}>
        <div style={style}>2 / 5</div>
      </Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider orientation="left">Fill rest</Divider>
    <Row>
      <Col flex="100px">
        <div style={style}>100px</div>
      </Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
    <Divider orientation="left">Raw flex style</Divider>
    <Row>
      <Col flex="1 1 200px">
        <div style={style}>1 1 200px</div>
      </Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>
  </>
);

const Grids = () => (
  <>
    <Rows />
    <JustifyColumns />
    <PercentageColumns />
  </>
);

export default Grids;
