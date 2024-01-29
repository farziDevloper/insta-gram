import React from "react";

const reviewId = ({ params }) => {
  //nesteed dynamic routing for sceen inside the screen.
  return <div>review Id {params.reviewId} </div>;
};

export default reviewId;
