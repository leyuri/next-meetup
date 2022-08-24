import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDatails() {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
      }
      title={"A First Meetup"}
      address={"Some Street 5, Some City"}
      description={"The meetup description"}
    />
    // <Fragment>
    //   <img
    //     src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
    //     alt="This is a first meetup"
    //   ></img>
    //   <h1>A First Meetup</h1>
    //   <address>Some Street 5, Some City</address>
    //   <p>The meetup description</p>
    // </Fragment>
  );
}

export default MeetupDatails;
