// 1. JavaScript Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded!");

// 2. Data Types and Operators
const eventName = "Music Festival";
const eventDate = "2025-08-12";
let availableSeats = 50;
console.log(`${eventName} on ${eventDate} — ${availableSeats} seats left.`);

// 3. Conditionals and Loops
const events = [
  { name: "Music Festival", date: "2025-08-12", seats: 10 },
  { name: "Tech Meetup", date: "2024-01-10", seats: 0 }
];

function showEvents() {
  const list = document.getElementById("event-list");
  list.innerHTML = "";
  events.forEach(event => {
    const isFuture = new Date(event.date) > new Date();
    const hasSeats = event.seats > 0;
    if (isFuture && hasSeats) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${event.name}</strong> on ${event.date} — ${event.seats} seats`;
      list.appendChild(div);
    }
  });
}
showEvents();

// 4. Functions and Closures
function registerUser(eventName) {
  try {
    const eventObj = events.find(e => e.name === eventName);
    if (eventObj && eventObj.seats > 0) {
      eventObj.seats--;
      alert(`Registered for ${eventName}!`);
      showEvents();
    } else {
      throw new Error("Event full or not found.");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
}

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};
const workshop = new Event("Baking Workshop", "2025-10-01", 5);
console.log(Object.entries(workshop));

// 6. Arrays and Methods
let eventArray = [
  { name: "Music Jam", type: "music" },
  { name: "Baking Workshop", type: "food" }
];
console.log(eventArray.filter(e => e.type === "music"));
console.log(eventArray.map(e => `Event: ${e.name}`));

// 7. DOM Manipulation
const form = document.getElementById("registerForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const selectedEvent = form.elements.event.value;
  console.log(`Registering ${name} for ${selectedEvent}`);
  registerUser(selectedEvent);
  mockPostData({ name, email, selectedEvent });
});

// 8. Event Handling
form.elements.name.addEventListener("keydown", (e) => {
  if (e.key === "Enter") alert("Submitting soon...");
});

// 9. Async JS
async function fetchEvents() {
  document.getElementById("message").innerText = "Loading events...";
  await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay
  document.getElementById("message").innerText = "Events loaded!";
}
fetchEvents();

// 10. Modern JS Features
function displayEvent({ name, date }) {
  console.log(`Event: ${name}, Date: ${date}`);
}
displayEvent({ name: "Yoga Session", date: "2025-09-01" });

// 11. Forms
// Already implemented in form submit event listener above

// 12. Fetch API Simulation
function mockPostData(data) {
  document.getElementById("message").innerText = "Submitting registration...";
  setTimeout(() => {
    console.log("Submitted data:", data);
    document.getElementById("message").innerText = "Registration complete!";
  }, 1000);
}
