import React, { useState, useCallback } from "react";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import { Radar as RadarChart } from "react-chartjs-2";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import Calendar from "@/components/Common/Calendar";
import DayView from "@/components/Exercise/DayView";

const getDateObject = date => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
};
export default () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  return (
    <ContentWrapper>
      <Row>
        <Col xl="3" lg="12">
          <div>
            <Card>
              <CardBody>
                <Calendar
                  onChange={handleDateClick}
                  value={selectedDate}
                  className="border-0"
                />
              </CardBody>
            </Card>
            <br />
            <Card className="d-none d-xl-block">
              <CardHeader>Monthly Weight Volume Distribution</CardHeader>
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
          <DayView date={getDateObject(selectedDate)} className="ml-3" />
        </Col>
      </Row>
    </ContentWrapper>
  );
};
