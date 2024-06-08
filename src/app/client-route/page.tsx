"use client";
// import ImageSlider from "../components/imageSlider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const result = clientSideFunction();
  console.log("client route rendered");
  return (
    <>
      <h1>{result}</h1>
      {/* <ImageSlider/> */}
    </>
  );
}
