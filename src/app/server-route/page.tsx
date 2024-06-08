import "server-only"
import { serverSideFunction } from "@/utils/server-utils";
import { clientSideFunction } from "@/utils/client-utils";
// import ImageSlider from "../components/imageSlider";

export default function ServerRoutePage() {
  console.log("server route rendered");
  const result = serverSideFunction();
  const clientResutl = clientSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      {/* <ImageSlider /> */}
    </div>
  );
}
