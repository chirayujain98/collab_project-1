import express from "express"
// import path from "path"
// import _ from "lodash"

// let reactController = require("../controllers/reactController")
// let { registerController, loginController, logoutController } = require("../controllers/authUserController")
// let { auth, auth_semi } = require("../middlewares/auth")

const apiService = (app: express.Application) => {
    const router = express.Router()

    router.get("/", (req: express.Request, res: express.Response) => {
        if (req.session)
            req.session.yolo = "popo"
        res.send("Hey!")
    })
    // router.post('/register', registerController);

    // router.post('/login', loginController);

    // router.get('/logout', auth, logoutController);

    app.use(router)
}

export default apiService