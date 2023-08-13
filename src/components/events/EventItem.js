import Button from '../ui/Button';

import classes from './event-item.module.css';

function EventItem(props) {
    console.log(props)
    const { id, title, description, location, city, province, country, startDate, endDate, image, category, organizer } = props;

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h3>{title}</h3>
                    <div className={classes.date}>
                        <date>{startDate} - {endDate}</date>
                    </div>
                </div>
                <div className={classes.address}>
                    <address>{`${location}, ${city}, ${province}, ${country}`}</address>
                </div>
                <div className={classes.description}>
                    <description>{description}</description>
                </div>
                <div className={classes.category}>
                    <category>Category: {category}</category>
                </div>
                <div className={classes.organizer}>
                    <organizer>Organizer: {organizer}</organizer>
                </div>
                <div className={classes.actions}>
                    <addcalendar><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=My Event&details=Event description text&dates=20220305T103000/20220305T184500&location=New York City" target="_blank">Tambah ke Kalender</a></addcalendar>
                    <Button link={exploreLink}>Lihat Event</Button>
                </div>
            </div>

        </li>
    )
}

export default EventItem;