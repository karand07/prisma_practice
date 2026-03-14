import { Router } from "express";
import { prisma } from "../lib/Prisma.js";
const userRouter = Router();
userRouter.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userExist = await prisma.user.findUnique({
        where: {
            username
        }
    });
    if (userExist) {
        res.json({
            error: "Username already exists"
        });
    }
    const usercreated = await prisma.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        message: "user created successfully",
        username,
        password
    });
});
export default userRouter;
