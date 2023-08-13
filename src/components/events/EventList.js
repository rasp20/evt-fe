import EventItem from './EventItem';
import classes from './event-list.module.css';

function EventList(props) {
    const { items } = props;

    return (
        <div className={classes.container}>
            {items.map(event => <EventItem key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                location={event.location}
                city={event.city}
                province={event.province}
                country={event.country}
                startDate={event.start_date}
                endDate={event.end_date}
                image={event.image}
                category={event.category}
                organizer={event.organizer} />)}
        </div>
    )
}

export default EventList;