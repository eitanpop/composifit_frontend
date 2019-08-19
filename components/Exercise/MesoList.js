import React from 'react'
import { Table } from 'reactstrap'

export default () => {
    return ( <Table className="w-100" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Mesocycle</th>
            <th>Progress</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nunc luctus, quam non condimentum ornare</td>
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
            <td>05/05/2014</td>
          </tr>
          <tr>
            <td>Integer in convallis felis.</td>
            <td>
              <div className="progress progress-xs">
                <div
                  className="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                >
                  <span className="sr-only">20% Complete</span>
                </div>
              </div>
            </td>
            <td>15/05/2014</td>
          </tr>
          <tr>
            <td>
              Nullam sit amet magna vestibulum libero dapibus iaculis.
            </td>
            <td>
              <div className="progress progress-xs">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                >
                  <span className="sr-only">50% Complete</span>
                </div>
              </div>
            </td>
            <td>05/10/2014</td>
          </tr>
        </tbody>
      </Table>)
}
