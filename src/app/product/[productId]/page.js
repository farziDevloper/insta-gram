/**
 * @author farziDevloper ;
 */
import React from "react";
import { notFound } from "next/navigation";

const productDetails = ({ params }) => {
  //   console.log(params);
  if (params.productId > 120) {
    notFound();
  }
  return <div>product Details page {params.productId}</div>;
};

export default productDetails;
