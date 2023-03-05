import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "올바른 정보를 입력해 주세요." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.2nwm1ot.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "데이터베이스에 연결할 수 없습니다." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "메시지를 전송할 수 없습니다." });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "메시지가 전송되었습니다.", message: newMessage });
  }
}
