import { Router } from "express";
import { login_controller } from "./login_controller";
import { change_password_controller } from "./change_password_controller";
import { create_admin_controller } from "./create_admin_controller";
import { who_is_me_controller } from "./who_is_me_controller";
import { create_user_controller } from "./create_user_controller";

export const auth_routes = Router();

auth_routes.post("/create-admin", create_admin_controller);
auth_routes.post("/login", login_controller);
auth_routes.put("/change-password", change_password_controller);
auth_routes.post("/create-user", create_user_controller);
