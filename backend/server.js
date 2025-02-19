const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 8005;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    
  res.send("Server is online :)");
});

app.get("/api/products", async (req, res) => {
  try {
    response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {

    console.log("There was an error (Server)", error);
    res.status(500).json({ message: "Error fetching products" });
  }

});

app.listen(port, () => {

  console.log(`Example app listening on http://localhost:${port}`);

});
