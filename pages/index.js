import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy_data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <div>
        <EventList items={featuredEvents}></EventList>
      </div>
    </div>
  );
}

export default HomePage;
