import React, { useCallback } from "react";
import Router, { withRouter } from "next/router";
import { Container, Row, Col } from "reactstrap";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import Button from "@/components/Cards/Button";

const routeTo = link => {
  Router.push(link);
};

export default () => {
  const routeTo = useCallback(link => () => {
    Router.push(link);
  });
  return (
    <ContentWrapper>
      <Container>
        <Row style={{ height: "80vh" }}>
          <Col xl={{ size: 6 }} offset="2" className="my-auto">
            <Button
              onClick={routeTo("/exercise/wizard")}
              header="Customized"
              text="Let Composifit create your plan using leading scientific data and professional coaches"
              buttonText="Create"
            />
          </Col>
          <Col xl="6" className="my-auto">
            <Button
              onClick={routeTo("/exercise/meso")}
              header="Manual"
              text="Create your own plan by choosing exercises, reps, and weight in a calendar view"
              buttonText="Create"
            />
          </Col>
        </Row>
      </Container>
    </ContentWrapper>
  );
};
