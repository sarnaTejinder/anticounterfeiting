import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#a8dadc",
        height: "100%",
      }}
    >
      <div>
        <Row className="mb-3">
          <h1 className="text-center text-light">404</h1>
        </Row>
        <Row className="mb-3">
          <h2 className="text-center">Page Not Found</h2>
        </Row>
        <Row className="text-center">
          <div>
            Let's try going{" "}
            <a
              className="font-weight-bold"
              style={{
                color: "#457b9d",
                fontWeight: 700,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              href="/dashboard"
            >
              home
            </a>{" "}
            and try again from there.
          </div>
        </Row>
      </div>
    </div>
  );
}
