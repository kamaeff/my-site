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

async function fetchData() {
  try {
    const connection = await connCreate();
    const [users] = await connection.execute(
      "SELECT COUNT(*) as userCount FROM users"
    );
    const [orders] = await connection.execute(
      "SELECT COUNT(*) as ordersCount FROM orders"
    );

    const { userCount } = users[0];
    const { ordersCount } = orders[0];
    connection.end();
    return { userCount, ordersCount };
  } catch (error) {
    console.error("error creating connection" + error);
    return 0;
  }
}

app.get("/api/user_stat", async (req, res) => {
  const result = await fetchData();

  res.json({ message: result });
});

app.get("/api/users_tg", async (req, res) => {
  const { data_members, channelMessages } = await fetchMessages();

  res.json({ members: data_members, messages: channelMessages });
});
