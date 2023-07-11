import express from "express"
import appRoutes from "./routes";

const app = express.Router()

app.use(appRoutes)
appRoutes.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});