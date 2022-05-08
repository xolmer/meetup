import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { firebaseURL } from '../firebaseURL';

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${firebaseURL}meetups.json`);
      const responseData = await response.json();

      const loadedMeetups = [];
      for (const key in responseData) {
        loadedMeetups.push({
          ...responseData[key],
          id: key,
        });
      }
      setLoadedMeetups(loadedMeetups);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading...</p> : <MeetupList meetups={loadedMeetups} />}
    </section>
  );
};
export default AllMeetups;
