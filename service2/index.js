import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // allow cross-origin requests

app.get("/", (req, res) => {
  res.send("Service2 is running!");
});

app.get("/api/goodbye", (req, res) => {
  res.json({ message: "Saying Hello From the Service second which is running on 5001" });
});

app.listen(PORT, () => {
  console.log(`✅ Service2 running on http://localhost:${PORT}`);
});
