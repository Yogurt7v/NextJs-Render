import "server-only"
import { serverSideFunction } from "@/utils/server-utils";
// import ImageSlider from "../components/imageSlider";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      {/* <ImageSlider /> */}
    </div>
  );
}
