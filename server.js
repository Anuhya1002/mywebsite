const express = require("express");
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const connectDB = require("./data/db");

app.prepare().then(() => {
  const server = express();

  // Enable CORS
  server.use(cors());

  server.get("/users", async (req, res) => {
    try {
      const db = await connectDB();
      const userscollection = db.collection("users");
      const users = await userscollection.find({}).toArray();
      res.json(users);
      console.log(users);
    } catch (error) {
      console.log("error");
    }
  });

  // Define the API endpoint for users
  server.get("/api/users", (req, res) => {
    const users = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
    res.json(users); // Return the user list as JSON
  });

  // Handle Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
