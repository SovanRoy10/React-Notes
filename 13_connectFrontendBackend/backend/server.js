import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// list of 5 jokes
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 4,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 5,
      title: "Another joke",
      content: "This is another joke",
    },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
