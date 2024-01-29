/**
 * The `reviewId` component is a functional component that takes a `params` object as its argument.
 * Inside the component, we use JSX to render a `<div>` element that displays the review ID. The review ID is accessed from the `params` object, which contains the dynamic route parameters.
 */

import React from "react";

const reviewId = ({ params }) => {
  //nesteed dynamic routing for sceen inside the screen.
  return <div>review Id {params.reviewId} </div>;
};

export default reviewId;
