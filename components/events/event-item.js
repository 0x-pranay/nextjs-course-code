import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '../ui/button';

import CalendarIcon from '../ui/icons/calendar-icon';
import AddressIcon from '../ui/icons/address-icon';
import RightArrowIcon from '../ui/icons/rigth-arrow-icon';

function EventItem(props) {
  const { title, image, date, id, location } = props.event;
  const humanReadableDate = new Date(date).toLocaleDateString('en-IN');
  return (
    <li className={classes.item}>
      <img src={image} alt={title}></img>
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <CalendarIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon></AddressIcon>
            <address>{location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
