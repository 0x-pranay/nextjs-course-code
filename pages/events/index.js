import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy_data';

function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
