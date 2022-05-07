import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { firebaseURL } from '../firebaseURL';
// import { DUMMY_DATA } from '../components/DUMMY_DATA';
const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${firebaseURL}meetups.json`)
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            ...data[key],
            id: key,
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
