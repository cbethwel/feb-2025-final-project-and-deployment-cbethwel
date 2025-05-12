let index = 0;
const images = ["images/forest.jpg", "images/mountains.jpg", "images/lake.jpg"];

function rotateImages() {
  index = (index + 1) % images.length;
  document.getElementById("slider-img").src = images[index];
}

setInterval(rotateImages, 4000);

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return false;
  }
  alert("Thank you for reaching out!");
  return true;
}

let index = 0;
const images = [
  "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function rotateImages() {
  index = (index + 1) % images.length;
  document.getElementById("slider-img").src = images[index];
}

setInterval(rotateImages, 4000);

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return false;
  }
  alert("Thank you for reaching out!");
  return true;
}
