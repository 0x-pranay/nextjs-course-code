import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy_data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
  const router = useRouter();

  const filterParams = router.query.slug;

  if (!filterParams) {
    return <p className='center'>Loading...</p>;
  }
  // console.log(filterParams[1]);
  const year = +filterParams[0];
  const month = +filterParams[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the choosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All evnets</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
