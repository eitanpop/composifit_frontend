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
          Wizard
          <small>
            Allow the experts at Composifit to come up with a tailered diet plan
          </small>
        </div>
      </ContentHeader>
      <ContentBody className="text-center">
        <Row>
          <Col xs={12}>
        
          </Col>
        </Row>
      </ContentBody>
    </ContentWrapper>
  );
};
