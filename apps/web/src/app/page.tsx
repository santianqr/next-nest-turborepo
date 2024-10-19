import { trpc } from "./trpc";
import Clientside from "./Clientside";

export default async function Home() {
  const response = await trpc.hello.query({ });
  return <div>
    <p>Server side: {response}</p>
    <Clientside />
  </div>;
}
