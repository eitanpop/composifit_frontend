import React from "react";

export default () => {
  return (
    <div className="card ">
      <div className="card-header ">
        <div className="card-title">Latest Tracking Activity</div>
      </div>
      <hr />
      {/* START list group */}
      <div className="list-group " style={{ paddingBottom: "10px" }}>
        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-purple" />
                <em className="fas fa-cloud-upload-alt fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-purple m-0" href="">
                  CHICKEN PARMESAN W/ BASIL
                </a>
              </p>
              <p className="m-0">
                <small>
                  <a href="">256 Calories</a>
                </small>
              </p>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2" />
            </div>
          </div>
        </div>
        {/* END list group item */}
        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-info" />
                <em className="far fa-file-alt fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-info m-0" href="">
                  TREADMILL
                </a>
              </p>
              <p className="m-0">
                <small>
                  <a href="">-200 Calories</a>
                </small>
              </p>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2">20m</small>
            </div>
          </div>
        </div>
        {/* END list group item */}
        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-danger" />
                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-danger m-0" href="">
                  MEDITATED - VIPASSANA
                </a>
              </p>
              <p className="m-0">
                <small>
                  <a href="">Jon Kabat Zinn</a>
                </small>
              </p>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2">20m</small>
            </div>
          </div>
        </div>
        {/* END list group item */}
        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-purple" />
                <em className="fas fa-cloud-upload-alt fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-purple m-0" href="">
                  MICHELOB ULTRA
                </a>
              </p>
              <p className="m-0">
                <small>
                  <a href="">85 Calories</a>
                </small>
              </p>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2">15m</small>
            </div>
          </div>
        </div>
        {/* END list group item */}
        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-success" />
                <em className="far fa-clock fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-success m-0" href="">
                  BLOOD WORK RESULTS ARRIVED{" "}
                </a>
              </p>
              <p className="m-0">
                <small>LabTech</small>
              </p>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2" />
            </div>
          </div>
        </div>
        {/* END list group item */}

        {/* START list group item */}
        <div className="list-group-item">
          <div className="media">
            <div className="align-self-start mr-2">
              <span className="fa-stack">
                <em className="fa fa-circle fa-stack-2x text-warning" />
                <em className="fa fa-tasks fa-stack-1x fa-inverse text-white" />
              </span>
            </div>
            <div className="media-body text-truncate">
              <p className="mb-1">
                <a className="text-warning m-0" href="">
                  REACHED 20% OF YOUR GOAL WEIGHT
                </a>
              </p>
              <div className="progress progress-xs m-0">
                <div
                  className="progress-bar bg-warning progress-bar-striped"
                  role="progressbar"
                  aria-valuenow="22"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "22%" }}
                >
                  <span className="sr-only">22% Complete</span>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <small className="text-muted ml-2">1w</small>
            </div>
          </div>
        </div>
        {/* END list group item */}
      </div>
      {/* END list group */}
      {/* START card footer */}
      <div className="card-footer" >
        <a className="text-sm" href="">
          Load more
        </a>
      </div>
      {/* END card-footer */}
    </div>
  );
};
