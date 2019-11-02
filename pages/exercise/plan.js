import React, { useState, useCallback } from "react";
import { Col, Row, Card, CardHeader, CardBody, Input } from "reactstrap";
import { Radar as RadarChart } from "react-chartjs-2";
import { Query } from "react-apollo";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import Calendar from "@/components/Common/Calendar";
import DayView from "@/components/Exercise/DayView";
import { getMesoDay } from "@/graphql/meso";
import withAppSyncData from "@/lib/withAppSyncData";

import MesoRefreshContext from "@/contexts/meso-refresh-context";

const Plan = ({ query }) => {
  const handleDateClick = useCallback(e => {
    setSelectedDate(e);
  });

  const Radar = {
    data: {
      labels: [
        "Neck",
        "Chest",
        "Upper Back",
        "Lower Back",
        "Traps",
        "Lats",
        "Biceps",
        "Triceps",
        "Forearms",
        "Abs",
        "Glutes",
        "Quads",
        "Hamstring",
        "Calves"
      ],
      datasets: [
        {
          label: "Monthly Volume",
          backgroundColor: "rgba(114,102,186,0.2)",
          borderColor: "rgba(114,102,186,1)",
          data: [100, 59, 90, 81, 56, 100, 59, 90, 81, 56, 100, 59, 90, 81]
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  };
  console.log(query);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <ContentWrapper>
      <Query
        query={getMesoDay()}
        variables={{ id: query.id, date: selectedDate }}
      >
        {({ data, loading, refetch }) => {
          if (!data || loading) return <div>Loading...</div>;
          const { name, beginDate, endDate } = data.getMesoByDay.meso;
          if (!selectedDate) {
            setSelectedDate(new Date(beginDate));
            return <div>Loading...</div>;
          }
          const { cardios, exercises } = data.getMesoByDay;
          return (
            <MesoRefreshContext.Provider value={refetch}>
              <Row>
                <Col xl="3" lg="12">
                  <div>
                    <Card>
                      <CardBody>
                        <Input
                          name="mesoName"
                          id="mesoName"
                          value={name}
                          onChange={e => console.log(e.target.value)}
                        />
                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <Calendar
                          onChange={handleDateClick}
                          value={selectedDate}
                          className="border-0"
                          maxDate={new Date(endDate)}
                          minDate={new Date(beginDate)}
                        />
                      </CardBody>
                    </Card>

                    <Card className="d-none d-xl-block">
                      <CardHeader>
                        Monthly Weight Volume Distribution
                      </CardHeader>
                      <CardBody>
                        <RadarChart
                          data={Radar.data}
                          options={Radar.options}
                          width={600}
                          height={300}
                        />
                      </CardBody>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <DayView
                    date={selectedDate}
                    exercises={exercises}
                    cardios={cardios}
                    mesoId={query.id}
                    className="ml-3"
                    refetch={refetch}
                  />
                </Col>
              </Row>
            </MesoRefreshContext.Provider>
          );
        }}
      </Query>
    </ContentWrapper>
  );
};

Plan.getInitialProps = async ({ query }) => {
  return { query };
};
export default withAppSyncData(Plan);
