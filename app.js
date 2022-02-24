const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running...`);
});
