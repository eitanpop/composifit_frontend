import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

export default () => {
  return (
    <Card>
      <div className="half-float ie-fix-flex">
        <img className="img-fluid" src="/static/img/bg3.jpg" alt="Demo" />
        <div className="half-float-bottom">
          <img
            className="img-thumbnail circle thumb128"
            src="/static/img/user/Eitan.jpg"
            alt="Demo"
          />
        </div>
      </div>

      <CardBody className="text-center">
        <h3 className="m-0">Eitan Poplinger</h3>
        <p className="text-muted">Gold Member</p>
        <div className="pb-2">
          Proin metus justo, commodo in ultrices at, lobortis sit amet dui.
          Fusce dolor purus, adipiscing a tempus at, gravida vel purus.
        </div>
      </CardBody>
      <CardBody className="text-center bg-gray-dark">
        <Row>
          <Col size="4">
            <h3 className="m-0">96k</h3>
            <p className="m-0">Calories Burned</p>
          </Col>
          <Col size="4">
            <h3 className="m-0">102</h3>
            <p className="m-0">Exercise Hours</p>
          </Col>
          <Col size="4">
            <h3 className="m-0">32</h3>
            <p className="m-0">Mindful Hours</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
