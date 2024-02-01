import { NextResponse } from "next/server";
import { run } from "../../lib/run";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  return NextResponse.json({
    result: run(),
  });
}
