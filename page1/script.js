const messages = [
    { roomName: "Meeting Room A", availability: "Available", ongoingEvent: "", eventTime: "" },
    { roomName: "Meeting Room B", availability: "Unavailable", ongoingEvent: "Maintenance", eventTime: "3:00 PM - 4:00 PM" },
    { roomName: "Conference Room X", availability: "Unavailable", ongoingEvent: "Team Meeting", eventTime: "10:00 AM - 11:30 AM" },
    // Add more messages as needed
];

const messageContainer = document.getElementById('message-container');
let currentMessageIndex = 0;

function displayNextMessage() {
    const { roomName, availability, ongoingEvent, eventTime } = messages[currentMessageIndex];
    messageContainer.innerHTML = `
        <p id="room-name">${roomName}</p>
        <p id="availability">${availability}</p>
        <p id="ongoing-event">${ongoingEvent}</p>
        ${ongoingEvent ? `<p id="event-time">${eventTime}</p>` : ''}
    `;

    // Change the color of the availability text based on availability status
    const availabilityText = document.getElementById('availability');
    if (availability.toLowerCase() === 'available') {
        availabilityText.style.color = 'green';
    } else {
        availabilityText.style.color = 'red';
    }

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

// Display the first message immediately
displayNextMessage();

// Change message when the button is clicked
document.getElementById('change-message-btn').addEventListener('click', displayNextMessage);

// Digital clock
function updateDigitalClock() {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

    const formattedDay = now.toLocaleString('en-US', { weekday: 'long' });
    const formattedDate = now.toLocaleString('en-US', dateOptions);
    const formattedTime = now.toLocaleString('en-US', timeOptions);

    document.getElementById('digital-clock').innerHTML = `
        <div id="day">${formattedDay}</div>
        <div id="date">${formattedDate}</div>
        <div id="time">${formattedTime}</div>
    `;
}


// Update digital clock every second
setInterval(updateDigitalClock, 1000);
