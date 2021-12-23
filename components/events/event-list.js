import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;
  return (
    <div className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} event={event}></EventItem>
      ))}
    </div>
  );
}

export default EventList;
