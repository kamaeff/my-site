const express = require("express");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const { fetchMessages } = require("./FetchTg");

const PORT = process.env.PORT || 3001;
dotenv.config();

const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

async function connCreate() {
  return await mysql.createConnection({
    port: process.env.PORT,
    user: "gen_user",
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
  });
}

app.get("/api/users_tg", async (req, res) => {
  const { data_members, channelMessages } = await fetchMessages();

  res.json({ members: data_members, messages: channelMessages });
});
