import './style.css';

const front = document.getElementsByClassName("front");
const dropdown = document.getElementsByClassName('dropdown');

console.log(front);
console.log(document)

for (let i = 0; i < front.length; i++) {
    front[i].addEventListener('click', toggleDropdown);
  }

function toggleDropdown() {
    for (let i = 0; i < front.length; i++) {
        dropdown[i].classList.toggle('show');
      }   
}

