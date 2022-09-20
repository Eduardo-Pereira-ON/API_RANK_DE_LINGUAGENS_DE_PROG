const express = require("express");
const app = express();
const programmingLanguageRouter = require("./routes/linguagens_programacao");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.use("/programming-languages", programmingLanguageRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(PORT, () => {
  console.log(`servidor on em: http://localhost:${PORT}`);
});
