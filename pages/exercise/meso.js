import React, { useState } from "react";
import { Router } from "../../routes";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Collapse
} from "reactstrap";
import { DateRangePicker } from "react-date-range";
import { Mutation, Query } from "react-apollo";

import withAppSyncData from "../../lib/withAppSyncData";
import { createMeso, getMesos } from "../../graphql/meso";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import ContentHeader from "@/components/Layout/Page/ContentHeader";
import ContentBody from "@/components/Layout/Page/ContentBody";

import MesoList from "@/components/Exercise/MesoList";

export default withAppSyncData(() => {
  const [isDateRangeOpen, setDateRangeOpen] = useState(false);
  const [isCloneOpen, setCloneOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const handleRangeChange = date => {
    setSelectionRange(date.selection);
  };

  const saveMeso = createMeso => {
    return () => {
      createMeso({
        variables: {
          name,
          beginDate: selectionRange.startDate,
          endDate: selectionRange.endDate
        }
      });
    };
  };
  console.log("Router", Router);
  return (
    <ContentWrapper>
      <ContentHeader>
        <div>
          Mesocycle
          <small>You can create or copy your mesocycle here</small>
        </div>
      </ContentHeader>
      <ContentBody>
        <Row>
          <Col lg={{ size: "12", offset: 0 }} md={{ size: "8", offset: 2 }}>
            <Card>
              <CardBody>
                <div>
                  <Button
                    color="primary"
                    onClick={() => {
                      setCloneOpen(false);
                      setDateRangeOpen(!isDateRangeOpen);
                    }}
                  >
                    <span className="">CREATE A NEW MESOCYCLE</span>
                  </Button>
                  &nbsp; - or - &nbsp;
                  <Button
                    color="primary"
                    onClick={() => {
                      setCloneOpen(!isCloneOpen);
                      setDateRangeOpen(false);
                    }}
                  >
                    <span className="">EDIT A MESOCYCLE</span>
                  </Button>
                </div>

                <div>
                  {" "}
                  <Collapse isOpen={isDateRangeOpen}>
                    <br />
                    <Form className="text-left">
                      <FormGroup>
                        <Label for="mesoName" className="h4 text-left">
                          Mesocycle Name
                        </Label>
                        <Input
                          name="mesoName"
                          id="mesoName"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </FormGroup>
                    </Form>
                    <hr className="mt-4" />
                    <DateRangePicker
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      direction="horizontal"
                      ranges={[selectionRange]}
                      onChange={handleRangeChange}
                    />
                    <br />
                    <Mutation
                      mutation={createMeso()}
                      onCompleted={data =>
                        Router.push(`/exercise/plan/${data.createMeso}`)
                      }
                    >
                      {(createMeso, { data }) => {
                        if (data) return <></>;
                        return (
                          <Button
                            color="primary"
                            onClick={saveMeso(createMeso)}
                          >
                            <span className="">SAVE</span>
                          </Button>
                        );
                      }}
                    </Mutation>
                  </Collapse>
                  <Collapse isOpen={isCloneOpen}>
                    <br />
                    <Query
                      query={getMesos("id", "name", "beginDate", "endDate")}
                    >
                      {({ loading, data }) => {
                        return (
                          <>
                            {loading ? (
                              <div>Loading...</div>
                            ) : (
                              <MesoList mesos={data.getMesos} />
                            )}
                          </>
                        );
                      }}
                    </Query>
                  </Collapse>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
      </ContentBody>
    </ContentWrapper>
  );
});
