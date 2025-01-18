document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const trainNumber = document.getElementById("trainNumber").value;
  const date = document.getElementById("date").value;
  const seats = document.getElementById("seats").value;

  window.location.href = `/success?name=${name}&trainNumber=${trainNumber}`;
});
