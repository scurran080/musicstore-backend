const express = require("express");

const app = express();
app.use(express.json());

app.use("/api",require("./routes/api"));
app.use("/admin", require("./routes/adminRoute"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
})