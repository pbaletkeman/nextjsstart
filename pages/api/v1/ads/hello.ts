import type { NextApiRequest, NextApiResponse } from "next";

import { StatusCodes } from "http-status-codes";

type ResponseData = {
  message: string;
  url: string;
};

export default function HelloTest(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const queryString = req.query;
  console.log("queryString");
  console.log(queryString);
  if (queryString.hasOwnProperty("name")) {
    console.log(queryString.name);
  }
  if (req.method === "POST") {
    // Process a POST request
    res.status(StatusCodes.CREATED).json({ message: "POST", url: queryString });
    console.log("POST");
  } else if (req.method === "GET") {
    // Process a GET request
    res.status(StatusCodes.OK).json({ message: "GET", url: queryString });
    console.log("GET");
  } else if (req.method === "PUT") {
    // Process a PUT request
    console.log("PUT");
    res.status(StatusCodes.ACCEPTED).json({ message: "PUT", url: queryString });
  } else if (req.method === "DELETE") {
    console.log("DELETE");
    // Process a DELETE request
    res.status(StatusCodes.NO_CONTENT).end();
  }
}
