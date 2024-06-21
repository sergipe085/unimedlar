
import { Router } from "express";
import { create_user_controller } from "./users/create_user_controller";
import { list_activated_users_controller } from "./users/list_activated_users_controller";
import { list_desactivated_users_controller } from "./users/list_desactivated_users_controller";
import { delete_user_controller } from "./users/delete_user_controller";
import { activate_user_controller } from "./users/activate_user_controller";
import { update_user_controller } from "./users/update_user_controller";
import { create_position_controller } from "./positions/create_position_controller";
import { list_positions_controller } from "./positions/list_positions_controller";
import { list_actions_controller } from "./positions/list_actions_controller";
import { list_modules_controller } from "./positions/list_modules_controller";
import { delete_position_controller } from "./positions/delete_position_controller";
import { update_position_controller } from "./positions/update_position_controller";

const admin_user_routes = Router();
admin_user_routes.post("/", create_user_controller);
admin_user_routes.get("/", list_activated_users_controller);
admin_user_routes.get("/desactivateds", list_desactivated_users_controller);
admin_user_routes.delete("/:id", delete_user_controller);
admin_user_routes.put("/ativar/:id", activate_user_controller);
admin_user_routes.put("/update-user/:id", update_user_controller);
//--
const admin_positions_routes = Router();
admin_positions_routes.post("/", create_position_controller);
admin_positions_routes.get("/", list_positions_controller);
admin_positions_routes.get("/actions", list_actions_controller);
admin_positions_routes.get("/modules", list_modules_controller);
admin_positions_routes.delete("/:id", delete_position_controller);
admin_positions_routes.put("/:id", update_position_controller);

export const admin_routes = Router();
admin_routes.use("/user", admin_user_routes);
admin_routes.use("/position", admin_positions_routes);