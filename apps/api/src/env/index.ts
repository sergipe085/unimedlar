import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV == "test") {
    config({
        path: ".env.test"
    })
}
else {
    config()
}

const envSchema = z.object({
    NODE_ENV: z.enum(["DEVELOPMENT", "test", "PRODUCTION"]).default("PRODUCTION"),
    DATABASE_URL: z.string(),
    PEC_DATABASE_USER: z.string(),
    PEC_DATABASE_HOST: z.string(),
    PEC_DATABASE_PORT: z.string(),
    PEC_DATABASE_PASSWORD: z.string(),
    PEC_DATABASE_DB: z.string(),
    JP_HUB_API_KEY: z.string(),
    JP_HUB_API_URL: z.string(),
    PORT: z.string().default("3333"),
})

const _env = envSchema.safeParse(process.env);

if (_env.success == false) {
    const errorMessage = "⚠️ Invalid environment variables! " + _env.error.format()
    console.error("⚠️ Invalid environment variables! ", _env.error.format());
    throw new Error(errorMessage);
}

export const env = _env.data;
