import { MongoClient } from "mongodb";
import { username, password } from "../../config/mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${password}@cluster0.86k80sc.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
