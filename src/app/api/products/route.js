import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  //   console.log(searchParams.get("search"));
  return NextResponse.json({ msg: "success" });
};

export const POST = async (req, res) => {
  // this method is used to handle requests to the server for post request
  //   const reqBody = await req.json();
  // console.log(reqBody);

  // now we are handling formdata which is sent from frontend  or any other server
  const formData = await req.formData();
  console.log(formData.get("name"));

  return NextResponse.json({ msg: "success post api" });
};
