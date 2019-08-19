import React from "react";
import { Table, Button } from "reactstrap";
import { Router } from "../../routes";

export default ({ mesos }) => {
  return (
    <Table className="w-100" striped bordered hover responsive>
      <thead>
        <tr>
          <th>Mesocycle</th>
          <th>Progress</th>
          <th>Begin Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {mesos.map(meso => {
          const { name, beginDate, endDate, id } = meso;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete</span>
                  </div>
                </div>
              </td>
              <td>{beginDate.replace("T00:00:00","")}</td>
              <td>{endDate.replace("T00:00:00","")}</td>
              <td align="center"><Button color="primary" onClick={()=>Router.push(`/exercise/plan/${id}`)}>Edit</Button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
