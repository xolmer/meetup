import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../components/DUMMY_DATA';
const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetups;
