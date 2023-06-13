export const express = require("express");
export const server = express();
export const path = require("path");
const PORT = process.env.PORT || 5030;

server.use("/", express.static(path.join(__dirname, "/public")));

server.use("/", require("./routes/root"));

server.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 resource not found" });
  } else {
    res.type("text").send("404 resource not found");
  }
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
