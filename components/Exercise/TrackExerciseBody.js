import React from "react";
import { Input, Col, Row } from "reactstrap";

const getRepsAndWeightRow = (reps, weight) => {
  return (
    <Row>
      <Col className="ml-3">
        <div className="card border-0" style={{boxShadow:"none"}}>
          <div className="row row-flush">
            <div className="col-2 bg-primary-dark text-center align-items-center justify-content-center rounded-left">
              <i className="fas fa-retweet fa-2x mt-2" />
              <div>{reps} Reps</div>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="mb-0 text-muted">
                  <div className="input-group-sm">
                    <Input color="small" placeholder={reps}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col className="mr-3">
        <div className="card border-0" style={{boxShadow:"none"}}>
          <div className="row row-flush">
            <div className="col-2 bg-primary-dark text-center align-items-center justify-content-center rounded-left">
              <i className="fas fa-bars fa-2x mt-2" />
              <div>{weight} lbs</div>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="mb-0 text-muted">
                  <div className="input-group-sm">
                    <Input color="small" placeholder={weight}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default () => {
  return (
    <>
      <div className="pt-3" />
      {getRepsAndWeightRow(10, 120)}
      {getRepsAndWeightRow(10, 120)}
      {getRepsAndWeightRow(9, 110)}
    </>
  );
};
