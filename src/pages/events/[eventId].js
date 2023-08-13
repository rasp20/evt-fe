import { useRouter } from 'next/router';
import classes from './event-details.module.css'
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    console.log("333", event)

    if (!event) {
        return <p>No Event Found</p>
    }

    return (
        <div className={classes.container}>
            <li className={classes.item}>
                <img src={'/' + event.image} alt={event.title} />
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h3>{event.title}</h3>
                        <div className={classes.date}>
                            <date>{event.start_date} - {event.end_date}</date>
                        </div>
                    </div>
                    <div className={classes.address}>
                        <address>{`${event.location}, ${event.city}, ${event.province}, ${event.country}`}</address>
                    </div>
                    <div className={classes.description}>
                        <description>{event.description}</description>
                    </div>
                    <div className={classes.category}>
                        <category>Category: {event.category}</category>
                    </div>
                    <div className={classes.organizer}>
                        <organizer>Organizer: {event.organizer}</organizer>
                    </div>
                    <div className={classes.actions}>
                        <addcalendar><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=My Event&details=Event description text&dates=20220305T103000/20220305T184500&location=New York City" target="_blank">Tambah ke Google Kalender</a></addcalendar>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default EventDetailPage;