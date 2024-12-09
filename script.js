let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

const readMoreButton = document.querySelector('.read-more');
const dropdownContent = document.querySelector('.dropdown-content');
const formDropDown = document.querySelector('.booking-form')


document.getElementById('read-more').addEventListener('click', function(){
  dropdownContent.style.display = dropdownContent.style.display === 'block'? 'none':'block'
  dropdownContent.classList.add('shadow')

});

document.getElementById('book').addEventListener('click', function(){
  formDropDown.style.display = dropdownContent.style.display === 'block'? 'none':'block'
  formDropDown.classList.add('show')
})


const buttons = document.querySelectorAll('button.subscribe');
buttons.forEach((button) =>{
  button.addEventListener('click', function(){
    alert('Thanks for subscribing, You will receive our news letter and updates')
    this.innerHTML = 'Subscribed'
    
  })
})







