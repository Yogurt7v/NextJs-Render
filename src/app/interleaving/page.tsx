import { ServerComponentOne } from "../../components/server-component-one";
import { ServerComponentTwo } from "../../components/server-component-two";

export default function Interleaving() {
  return (
    <>
      <h1>Interleaving</h1>
      <ServerComponentOne />
      <ServerComponentTwo />
    </>
  );
}
