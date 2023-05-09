import React from "react";
import { Col, Row } from "react-bootstrap";

export default function IconText({
  icon,
  text,
  left = true,
  active = 0,
  labelStyle,
  ...props
}) {
  return (
    <Row className="d-inline-block align-middle" {...props}>
      <Col className="d-flex gap-2">
        {left && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {icon}
          </div>
        )}
        <span style={labelStyle}>{text}</span>
        {!left && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            className={`${active === 0 ? "" : active ? "" : "text-muted"}`}
          >
            {icon}
          </div>
        )}
      </Col>
    </Row>
  );
}
