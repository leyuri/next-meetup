import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { username, password } from "../../config/mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import * as mongoose from "mongoose";

interface Meetup {
  meetupData: {
    image: string;
    _id: ObjectId;
    title: string;
    address: string;
    description: string;
  };
}

function MeetupDatails(props: Meetup) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.86k80sc.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups: object[] = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup: any) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const objId = new mongoose.Types.ObjectId(meetupId);

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.86k80sc.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: objId,
  });
  const selectedMeetupJson = JSON.parse(JSON.stringify(selectedMeetup));

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetupJson._id.toString(),
        title: selectedMeetupJson.title,
        address: selectedMeetupJson.address,
        image: selectedMeetupJson.image,
        description: selectedMeetupJson.description,
      },
    },
  };
}

export default MeetupDatails;
