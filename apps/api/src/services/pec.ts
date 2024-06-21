import { Client } from "pg";
import { env } from "../env";

export const pec_client: Client = new Client({
    user: env.PEC_DATABASE_USER,
    host: env.PEC_DATABASE_HOST,
    port: Number(env.PEC_DATABASE_PORT),
    database: env.PEC_DATABASE_DB,
    password: env.PEC_DATABASE_PASSWORD
});