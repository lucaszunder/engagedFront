import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const NotLoggedLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-5"
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm="12"
        tag="main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
          <img
            id="main-logo"
            className="d-inline-block align-top mr-1"
            style={{ maxWidth: "100%" }}
            src={require("../images/logo.png")}
            alt="fullstack Challenge"
          />
          <p style={{margin: '0'}}>FullStack Challenge</p>
        </div>
        {children}
      </Col>
    </Row>
  </Container>
);

NotLoggedLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

NotLoggedLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default NotLoggedLayout;
