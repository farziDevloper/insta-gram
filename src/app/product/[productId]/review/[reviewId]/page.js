/**
 * The `reviewId` component is a functional component that takes a `params` object as its argument.
 * Inside the component, we use JSX to render a `<div>` element that displays the review ID. The review ID is accessed from the `params` object, which contains the dynamic route parameters.
 */

import React from "react";
import styles from "../../../../../css/newcss.module.css";
import Image from "next/image";
import MyImage from "../../../../../../public/image.jpg";

const reviewId = ({ params }) => {
  //nesteed dynamic routing for sceen inside the screen.
  return (
    <div className={styles.text_size}>
      review Id {params.reviewId} and product id is {params.productId}{" "}
      <Image src={MyImage} />
    </div>
  );
};

export default reviewId;
