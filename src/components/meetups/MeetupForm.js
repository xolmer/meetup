import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './MeetupForm.module.css';

const MeetupForm = (props) => {
  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const addressInputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;

    const meetupData = {
      title: title,
      description: description,
      image: image,
      address: address,
    };
    props.onCreateMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            ref={titleInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            row="5"
            id="description"
            name="description"
            ref={descriptionInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Image URL"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Create Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
