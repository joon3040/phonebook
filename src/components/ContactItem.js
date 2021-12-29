import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ name, phone }) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg="2">
          <img
            className="profile"
            src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
          />
        </Col>
        <Col lg="10">
          <h4>{name}</h4>
          <p>{phone}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
