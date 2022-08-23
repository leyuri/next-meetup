import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    address: 'Some address 5, 1234 Some City',
    description: 'This is a firstt meetup!'
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Paris%2C_France.jpg/1024px-Paris%2C_France.jpg',
    address: 'Some address 5, 1234 Some City',
    description: 'This is a second meetup!'
  }
]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage; 