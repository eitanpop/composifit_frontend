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
          Settings
          <small>You can set your portal settings here</small>
        </div>
      </ContentHeader>
      <ContentBody className="text-center">
        <Row>
          <Col xs={12} >
            <h2 className="text-thin">Settings</h2>
            <p>Settings</p>
          </Col>
        </Row>
      </ContentBody>
    </ContentWrapper>
  );
};
