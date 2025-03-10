// script.js

const apiUrl = 'http://localhost:3000/api/events';
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

function updateEventList() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(events => {
            eventList.innerHTML = '';
            events.forEach(event => {
                const li = document.createElement('li');
                li.textContent = `${event.name} - ${event.date} ${event.time}`;
                eventList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const event = {
        name: document.getElementById('event').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        description: document.getElementById('description').value,
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    })
        .then(response => response.json())
        .then(newEvent => {
            updateEventList();
            eventForm.reset();
        })
        .catch(error => console.error('Error:', error));
});

updateEventList();
