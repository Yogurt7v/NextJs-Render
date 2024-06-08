import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";
export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf8");
  return (
    <>
      <div>Server Component One</div>
      <ServerComponentTwo />
    </>
  );
};
