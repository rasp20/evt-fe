const DUMMY_EVENTS = [
    {
        id: 'event1',
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        location: 'GBK',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        country: 'ID',
        start_date: '2023-08-05 16:00',
        end_date: '2023-08-05 22:00',
        image: 'images/event-img.jpeg',
        category:'Konser',
        organizer: 'Mas Elon',
        isFeatured: true
    },
    {
        id: 'event2',
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        location: 'GBK',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        country: 'ID',
        start_date: '2023-08-05 16:00',
        end_date: '2023-08-05 22:00',
        image: 'images/event-img.jpeg',
        organizer: 'Mas Elon',
        category:'Konser',
        isFeatured: false
    },
    {
        id: 'event3',
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        location: 'GBK',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        country: 'ID',
        start_date: '2023-08-05 16:00',
        end_date: '2023-08-05 22:00',
        image: 'images/event-img.jpeg',
        organizer: 'Mas Elon',
        category:'Konser',
        isFeatured: false
    },
    {
        id: 'event4',
        title: 'Event 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        location: 'GBK',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        country: 'ID',
        start_date: '2023-08-05 16:00',
        end_date: '2023-08-05 22:00',
        image: 'images/event-img.jpeg',
        organizer: 'Mas Elon',
        category:'Konser',
        isFeatured: true
    }
]

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    })

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}