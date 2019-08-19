import Ract from "react";

export default ({icon, title, text}) => {
  return (
    <div className="card flex-row align-items-center align-items-stretch border-0">
      <div className="col-3 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
      <i style={{fontSize:"1.5rem"}} className={`fas fa-${icon}`}></i>
      </div>
      <div className="col-9 py-2 bg-primary rounded-right">
        <div className="h3 my-2">{text}</div>
        <div className="text-uppercase">{title}</div>
      </div>
    </div>
  );
};
