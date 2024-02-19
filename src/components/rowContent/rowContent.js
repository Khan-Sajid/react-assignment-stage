import React from "react";

const RowContent = (props) => {
  return <div> {JSON.stringify(props?.data)}</div>;
};

export default RowContent;
