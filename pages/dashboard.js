import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import Profile from "@/components/Cards/Profile";
import Sparkline from "@/components/Cards/Sparkline";
import IconInfo from "@/components/Cards/IconInfo";
import ActionList from "@/components/Cards/ActionList";

export default () => {
  return (
    <ContentWrapper>
      <Row>
        <Col xl="3">
          <Card>
            <CardBody>
              <Profile />
            </CardBody>
          </Card>
        </Col>
        <Col xl="3">
          <Card>
            <CardBody>
              <Sparkline />
              <IconInfo
                title="Protein"
                text="123g / 215g"
                icon="balance-scale"
              />
              <IconInfo
                title="Carbohydrates"
                text="123g / 215g"
                icon="balance-scale"
              />
              <IconInfo title="Fat" text="123g / 215g" icon="balance-scale" />
            </CardBody>
          </Card>
        </Col>
        <Col xl="3">
          <ActionList />
        </Col>
      </Row>
    </ContentWrapper>
  );
};
