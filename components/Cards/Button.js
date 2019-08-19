import React from "react";

export default ({ onClick, header, text, buttonText }) => {
  return (
    <div className="card card-default">
      <div className="card-body text-center">
        <div className="py-4">
          <img
            className="img-fluid rounded-circle img-thumbnail thumb96"
            src="/static/img/user/02.jpg"
            alt="Contact"
          />
        </div>
        <h3 className="m-0 text-bold">{header}</h3>
        <div className="my-3">
          <p>{text}</p>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
