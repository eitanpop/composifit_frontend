import React from "react";
import dynamic from "next/dynamic";


export default props => {
  const Calendar = dynamic(import("react-calendar"), { ssr: false });

  return <React.Fragment>{<Calendar {...props} />}</React.Fragment>;
};
