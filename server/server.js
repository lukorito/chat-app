require("dotenv").config();
const express = require("express");
const http = require("http");
const router = require("./routes");
const cors = require("cors");
const passportSetup = require("./config/passport-auth-setup");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const authCheck = require("./middlewares/authCheck");
const userRouter = require("./controllers/UsersController");

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
};

const dbUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

mongoose
  .connect(dbUrl, options)
  .then(function() {
    console.log("MongoDB is connected");
  })
  .catch(function(e) {
    console.log("Error occured while connecting to database", e);
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [`${process.env.COOKIE_KEY}`],
    name: "chat-app"
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:3000"
  })
);

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", function(socket) {
  console.log(socket.id);
  console.log("socket connected");
  socket.on("message", data => {
    console.log(data);
  });
});

// manager auth routes
app.use("/auth", router);

// manage user routes
app.use(userRouter);

// manage 

// return user object
app.get("/user", authCheck, (req, res) => {
  res.send(req.user);
});

app.get("/", (req, res) => {
  res.send("Hi there");
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
