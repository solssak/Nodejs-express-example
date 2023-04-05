const express = require("express");
const app = express();
const port = 3000;

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.send({ sound: "멍멍" });
  } else if (name == "cat") {
    res.send({ sound: "야옹" });
  } else if (name == "pig") {
    res.send({ sound: "돼지" });
  } else {
    res.json({ sound: "없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
