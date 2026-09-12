import { Router } from "express";   
import { register,login,logout,profile, verifyToken } from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";
// Import the validateSchema middleware and the register and login schemas
// This middleware validates the request body against a given schema using Zod.
import { validateSchema } from "../middlewares/validator.middleware.js";
// Import the register and login schemas from the auth.schema.js file
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router();

//Cuando se haga una peticion post a login se ejecuta el controller asignado:
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout",logout);
//Antes de que llegue a profile se ejecuta validateToken, si es valido se ejecuta profile
router.get("/verify",verifyToken);
router.get("/profile",validateToken,profile);
export default router;