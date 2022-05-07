import { useHistory } from 'react-router-dom';
import MeetupForm from '../components/meetups/MeetupForm';
// insert firebase url at ../firebaseURL.sample.js file and rename it to firebaseURL.js
import { firebaseURL } from '../firebaseURL';
const NewMeetup = (props) => {
  const history = useHistory();

  const createMeetupHandler = async (meetupData) => {
    fetch(`${firebaseURL}meetups.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetupData),
    });
    await history.replace('/');
  };
  return (
    <section>
      <h1>New Meetup</h1>
      <MeetupForm onCreateMeetup={createMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
