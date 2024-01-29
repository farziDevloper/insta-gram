import React from "react";

// docs component receives an object "params" as a prop
// "params" contains information about the current route
const docs = ({ params }) => {
  // check the length of the "dynamicMultipleRouting" array in the "params" object
  if (params.dynamicMultipleRouting.length === 1) {
    return <div>docs with single querry</div>;
  }
  if (params.dynamicMultipleRouting.length === 2) {
    return <div>docs with double querry</div>;
  }
  if (params.dynamicMultipleRouting.length === 3) {
    return <div>docs with three querry</div>;
  }
  // if the length is not 1, 2, or 3, return a div with the text "docs"
  return <div>docs</div>;
};

export default docs;
