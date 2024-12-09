let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

const readMoreButton = document.querySelector('.read-more');
const dropdownContent = document.querySelector('.dropdown-content');

readMoreButton.addEventListener('click', () =>{
  dropdownContent.style.display = dropdownContent.style.display === 'block'? 'none':'block'
});

const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const firstNameInput = document.getElementById('first-name');
const LastNameInput = document.getElementById('last-tname');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');
const carModelInput = document.getElementById('model');
const passengerInput = document.getElementById('pass');



var date = dateInput.value;
var time = timeInput.value;
var firstName = firstNameInput.value;
var LastName = LastNameInput.value;
var email = emailInput.value;
var phone = phoneNumberInput.value;
var model = carModelInput.value;
var passenger = passengerInput.value;
const message = 'You have been booked a car.'


if (date && time && model && firstName && LastName && passenger && phone && email){
  document.getElementById('book-now').addEventListener('click', function(){
    alert(message)
  })
}




document.querySelectorAll('.subscribe').forEach(function(button){
  button.addEventListener('click', function(){
    alert('Thank you for subscribing! You will receive updates and newsletters from us.');
  });
});











