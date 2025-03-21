const express = require("express");
const cors = require("cors");
const numbersRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 9876; // Ensure the port is defined

app.use(cors());
app.use(express.json());

// Route for numbers
app.use("/numbers", numbersRouter);

// Default route for testing
app.get("/", (req, res) => {
    res.send("Average Calculator API is Running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
