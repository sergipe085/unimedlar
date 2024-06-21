import { app } from "./app";
import prisma from "./database";
import { env } from "./env";
import { pec_client } from "./services/pec";

async function start() {
  console.log("... CONNECTING TO PRISMA DATABASE ...")
  await prisma.$connect();
  console.log("... !! SUCCESSFULY CONNECTED TO DATABASE !! ... \n")

  console.log("... CONNECTING TO PEC DATABASE ...")
  await pec_client.connect();
  console.log("... !! SUCCESSFULY CONNECTED TO PEC DATABASE !! ... \n")

  console.log("... Starting HTTP Server ...")
  const PORT = env.PORT;


  app.listen(Number(PORT), "0.0.0.0", () => console.log(`... Server running on http://0.0.0.0:${PORT} ...`));
}

start();
