import React from "react";
import { Row, Col } from "reactstrap";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import ContentHeader from "@/components/Layout/Page/ContentHeader";
import ContentBody from "@/components/Layout/Page/ContentBody";

export default () => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <div>
          Goals
          <small>You can set daily dietary goals here</small>
        </div>
      </ContentHeader>
      <ContentBody className="text-center">
        <Row>
          <Col xs={12} >
            <h2 className="text-thin">My Goals</h2>
            <p>Goals</p>
          </Col>
        </Row>
      </ContentBody>
    </ContentWrapper>
  );
};
