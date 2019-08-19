import React, { useState, useCallback } from "react";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import { Radar as RadarChart } from "react-chartjs-2";
import { Query } from "react-apollo";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import Calendar from "@/components/Common/Calendar";
import DayView from "@/components/Exercise/DayView";
import { getMesoDay, getMeso } from "@/graphql/meso";
import withAppSyncData from "@/lib/withAppSyncData";

const getDateObject = date => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
};
const Plan = ({ query }) => {
  const handleDateClick = useCallback(e => {
    setSelectedDate(e);
  });

  console.log(query);

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
  if (!query) return <div>Loading...</div>;
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <ContentWrapper>
      <Query query={getMeso()} variables={{ id: query.id }}>
        {({ data, loading }) => {
          if (loading) return <div>...Loading</div>;
          const {beginDate, endDate} = data.getMeso;
          if (!selectedDate) {
            setSelectedDate(new Date(beginDate));
            return <div>Loading...</div>;
          }
          const { day, month, year } = getDateObject(selectedDate);
          return (
            <Query
              query={getMesoDay()}
              variables={{ id: query.id, date: `${year}-${month}-${day}` }}
            >
              {({ data, loading, refetch }) => {
                if (!data || loading) return <div>Loading...</div>;
                console.log(data)
                const { cardios, exercises } = data.getMesoByDay;                
                return (
                  <Row>
                    <Col xl="3" lg="12">
                      <div>
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
                        <br />
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
                        date={getDateObject(selectedDate)}
                        exercises={exercises}
                        cardios={cardios}
                        mesoId={query.id}
                        className="ml-3"
                        refetch={refetch}
                      />
                    </Col>
                  </Row>
                );
              }}
            </Query>
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
