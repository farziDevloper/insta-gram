import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  console.log(context?.params?.id);
  return NextResponse.json({ msg: "success" });
};
