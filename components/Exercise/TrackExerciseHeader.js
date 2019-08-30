import React from "react";
import { Progress } from 'reactstrap';

export default ({name}) => {
  return (
    <div className={`list-group`} style={{cursor:"pointer"}} >
      <div className="list-group-item list-group-item-action">
        <table className="wd-wide">
          <tbody>
            <tr>
              <td className="wd-xs">
                <div className="px-2">
                  <img
                    className="static/img-fluid rounded thumb64"
                    src="/static/img/dummy.png"
                    alt="Dummy"
                  />
                </div>
              </td>
              <td>
                <div className="px-2">
                  <h4 className="mb-2 h3 text-uppercase">{name}</h4>
                  <small className="text-muted">
                    Vestibulum ante ipsum primis in faucibus orci
                  </small>
                </div>
              </td>
              <td className="wd-sm  d-none d-lg-table-cell">
                <div className="px-2">
                  <p className="m-0">Last change</p>
                  <small className="text-muted">4 weeks ago</small>
                </div>
              </td>
              <td className="wd-xs d-none d-lg-table-cell">
                <div className="px-2">
                  <p className="m-0 text-muted">
                    <em className="icon-people mr-2 fa-lg" />
                    26
                  </p>
                </div>
              </td>
              <td className="wd-xs d-none d-lg-table-cell">
                <div className="px-2">
                  <p className="m-0 text-muted">
                    <em className="icon-doc mr-2 fa-lg" />
                    3500
                  </p>
                </div>
              </td>
              <td className="wd-sm">
                <div className="px-2">
                  <Progress
                    className="m-0 progress-xs"
                    value="80"
                    color="success"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
