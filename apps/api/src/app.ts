import "express-async-errors"
import express from "express"
import cors from "cors";
import errorHandler from "./utils/error-handler";
import { SYSTEM_MODULE } from "@prisma/client";
import { admin_routes } from "./modules/admin/http/controllers/routes";
import { auth_routes } from "./modules/auth/http/controllers/routes";
import { who_is_me_controller } from "./modules/auth/http/controllers/who_is_me_controller";
import { checkModulePermission } from "./modules/auth/http/middlewares/check-module-permission";
import { expressCheckAuth } from "./modules/auth/http/middlewares/express-check-auth";
import { PrismaUsuariosRepository } from "./modules/auth/repositories/prisma/users-repository-prisma";
import { CNS_routes } from "./modules/cns/http/routes";
import { noticias_routes, noticias_routes_public } from "./modules/noticias/http/routes";
import { prefeito_routes } from "./modules/prefeito/http/routes";
import { saude_routes } from "./modules/saude/http/routes";
import { modulos_routes } from "./modules/modulos/submodules/http/routes";
import { cadastro_routes } from "./modules/users/http/routes";
import { z } from "zod";
import { processEvent } from "./services/jphub/jphub";
import { ouvidoriaRoutes } from "./modules/ouvidoria2/http/routes";

export const app = express();

app.use(cors({
  origin: "*"
}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json())

const usersRepository = new PrismaUsuariosRepository();

app.use("/api", auth_routes)

app.use("/api/noticias", noticias_routes_public);

app.use("/api/*", 
  (req, res, next) => expressCheckAuth(req, res, next, usersRepository)
)

app.post("/api/webhooks/jphub", async (req, res) => {
  const schema = z.object({
    event: z.string(),
    data: z.any()
  })

  const { event, data } = schema.parse(req.body);
  
  await processEvent(event, data);

  return res.end();
})

app.get("/api/me", who_is_me_controller);

app.use("/api/admin", checkModulePermission(SYSTEM_MODULE.NONE), admin_routes);
app.use("/api/prefeito", prefeito_routes);
app.use("/api/saude", saude_routes);
app.use("/api/cadastros", cadastro_routes);
app.use("/api/CNS", CNS_routes);
app.use("/api/noticias", noticias_routes);
app.use('/api/ouvidoria', modulos_routes)
app.use('/api/ouvidoria-chamados', ouvidoriaRoutes)

app.use(errorHandler)


