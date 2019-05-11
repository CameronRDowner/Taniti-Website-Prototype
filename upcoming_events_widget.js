let eventsInput = [["Shipwrecked Movie Premier","May",5],["Summer Luau", "May", 12],["Yacht Club Convention", "May", 15],["Pablo Picasso Art Exhibit", "May", 30]]

class upcomingEvents {
constructor(eventsInput) {
    this.event1 = eventsInput[0];
    this.event2 = eventsInput[1];
    this.event3 = eventsInput[2];
    this.event4 = eventsInput[3];
}
}

let events = new upcomingEvents(eventsInput);

document.getElementById('event1Label').innerHTML = events.event1[0];
document.getElementById('event1date').innerHTML = events.event1[1] + " " + events.event1[2];

document.getElementById('event2Label').innerHTML = events.event2[0];
document.getElementById('event2date').innerHTML = events.event2[1] + " " + events.event2[2];

document.getElementById('event3Label').innerHTML = events.event3[0];
document.getElementById('event3date').innerHTML = events.event3[1] + " " + events.event3[2];

document.getElementById('event4Label').innerHTML = events.event4[0];
document.getElementById('event4date').innerHTML = events.event4[1] + " " + events.event4[2];
