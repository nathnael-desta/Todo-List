import './style.css';

const front = document.querySelector(".front");
const dropdown = document.querySelector('.dropdown');

const choose = document.querySelectorAll('.choose');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');

const wrapper = document.querySelector('.wrapper');
const calendarDiv = document.querySelector('.calendarDiv');
const work = document.querySelector('.work');
const excersise = document.querySelector('.excersie');
const health = document.querySelector('.health');
const teams = document.querySelector('.teams');
const chores = document.querySelector('.chores');
const school = document.querySelector('.school');
const creativity = document.querySelector('.creativity');
const inside = document.querySelectorAll('.inside');
const choose2 = document.querySelectorAll('.choose2');
const mode2 = document.querySelector('.mode2');
const set2 = document.querySelector('.set2');
const front2 = document.querySelector('.front2');
let visible = 0;
const tagInput = document.querySelector('.tagInput');
const dropdown2 = document.querySelector('.dropdown2');
const container = document.querySelector('.container')
const add = document.querySelector('.add');
const send = document.querySelector('.send');
const send2 = document.querySelector('.send2');
const cancel = document.querySelector('.cancel');
const all = document.querySelector('.all');
const create = document.querySelector('.create');
const closeSvg = document.querySelectorAll('.inside svg');

const titleText = document.querySelector('.titletext');
const descriptionText = document.querySelector('.descriptiontext');
const set = document.querySelector('.set');
const shown = document.querySelector('.shown');
const inside2 = document.querySelectorAll('.inside2');



add.addEventListener('click', () => {


    create.classList.add("scaled");
    all.classList.add('colored');
})

cancel.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send2.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

front.addEventListener('click', toggleDropdown);

choose.forEach(item => {
    item.addEventListener('click', replacer);
})


function toggleDropdown() {
    dropdown.classList.toggle('show');
    front.classList.toggle('outliner');
}

document.addEventListener('click', function(event) {
    let target = event.target;

    if (!front.contains(target)){
        dropdown.classList.remove('show');
        front.classList.remove('outliner');
    }

})



function replacer() {
    let chosen = this.firstElementChild;
    set.innerHTML = chosen.innerHTML;

    if (chosen.innerHTML == "Trivial") {
        l1.classList.remove('hide');
        l2.classList.add('hide');
        l3.classList.add('hide');
        l4.classList.add('hide');
    } else if (chosen.innerHTML == "Easy") {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.add('hide');
        l4.classList.add('hide');
    } else if (chosen.innerHTML == "Medium") {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.remove('hide');
        l4.classList.add('hide');
    } else {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.remove('hide');
        l4.classList.remove('hide');
    }

}

let day = 0;
let month = 0;
let year = 0;


const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


const renderCalendar = () => {
    wrapper.classList.toggle('hide');
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;






    let list = document.querySelectorAll('li');
    list.forEach(li => {
        li.addEventListener('click', () => {

            day = li.textContent;

            let picked = currentDate.textContent.split(' ')

            month = picked[0];
            year = picked[1];

            renderCalendar();

            shown.innerHTML = `${day} ${month} ${year}`;
            wrapper.classList.toggle('hide');


        })
    })

}

calendarDiv.addEventListener('click', renderCalendar);

document.addEventListener('click', function(event) {
    let target = event.target;

    if (!calendarDiv.contains(target)){
        wrapper.classList.add('hide');
    }

})

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});



container.addEventListener('click', () => {
    dropdown2.classList.toggle('hide');
    container.classList.toggle('outlinerS');
})

document.addEventListener('click', function(event) {
    let target = event.target;

    if (!front2.contains(target)){
        dropdown2.classList.add('hide');
        container.classList.remove('outlinerS');
    }

})



choose2.forEach(item => {

    item.addEventListener('click', () => {



        inside.forEach(tag => {


            let word = item.childNodes[1].textContent;
            let insert = tag.childNodes[1].textContent;





            if (word == insert) {
                tag.classList.toggle('hide');
                set2.classList.add('hide');

            }

        })
    });

})

closeSvg.forEach(svg => {
    svg.addEventListener('click', () => {
        svg.parentElement.classList.toggle('hide');
    })
})

inside.forEach(tag => {
    tag.childNodes[2].addEventListener('click', () => {
        tag.parentNode.classList.toggle('hide');

        if (tag.classList.contains("hide")) {
            visible--
        } else {
            visible++
        }


    })

})




tagInput.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        let newDiv = document.createElement('div');

        newDiv.classList.add('inside2');
        newDiv.textContent = tagInput.value;
        tagInput.value = "";


        let parentDiv = document.createElement('div');
        parentDiv.classList.add('inside');

        let svgElement = document.createElement('img');
        svgElement.src = './Assets/x.svg';

        svgElement.classList.add('special')
        svgElement.style.width = "13px";
        svgElement.style.height = "auto";
        svgElement.style.fill = "red";



        newDiv.appendChild(svgElement);
        parentDiv.appendChild(newDiv);

        mode2.appendChild(parentDiv);

    }
})



setInterval(() => {
    let computedHeight = getComputedStyle(mode2).height;

    let parts = computedHeight.split(/(\d+)/)
    let final = parseInt(parts[1]) + 6;
    final += parts[2];
    document.documentElement.style.setProperty('--div-a-height', final)





})



// actual storage and usage of inserted values



send.addEventListener('click',addTask);



const getTitle = () => {
    return {
        title: titleText.value
    }
}

const getDescription = () => {
    return {
        description: descriptionText.value
    }
}

const getDifficulty = () => {
    return {
        difficulty: set.textContent
    }
}

const getDate = () => {
    let [day, month, year] = shown.textContent.split(' ');
    return {
        day,
        month,
        year
    }
}

const getTags = () => {
    let tags = [];
    inside.forEach(item => {
        if (!item.classList.contains('hide')) {
            tags.push(item.childNodes[1].textContent);
        }
    });
    return {
        tags 
    }

}

function addTask() {
    let newTask = task();
    console.log(newTask);
    
    
    
    
    
}

const task = () => {
    return Object.assign(
        {},
        getTitle(),
        getDescription(),
        getDifficulty(),
        getDate(),
        getTags(),
    )
}

