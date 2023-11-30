import './style.css';
import svg from './Assets/newSvg.svg';

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
let inside = document.querySelectorAll('.inside');
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
let stop = 0;
const projects = document.querySelector('.projects');
const left = document.querySelector('.left');
const morning = document.querySelector('.morning');
const dayNow = document.querySelector('.day');
const number = document.querySelector('.number');
const monthNow = document.querySelector('.month');
let mySvg = new Image();
mySvg.src = svg;
mySvg.classList.add('newSvg');

const now = new Date();
const currentTime = now.getHours();
const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthsNames = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
let weekDay = weekDays[now.getDay() - 1];
let currentMonthName = monthsNames[now.getMonth()];

dayNow.textContent = weekDay;
number.textContent = now.getDay(); 
monthNow.textContent = currentMonthName;


if (currentTime >= 6 && currentTime < 12) {
    morning.innerHTML = 'Good Morning, Nate <span class="dot">.</span>';
  } else if (currentTime >= 12 && currentTime < 18) {
    morning.innerHTML = 'Good Afternoon, Nate <span class="dot">.</span>';
  } else if (currentTime >= 18 || currentTime < 6) {
    morning.innerHTML = 'Good Night, Nate <span class="dot">.</span>';
  }



const clear = function clearAllOfTheAddParameters() {
    titleText.value = "";
    descriptionText.value = ""
}

add.addEventListener('click', () => {


    create.classList.add("scaled");
    all.classList.add('colored');
})

cancel.addEventListener('click', () => {
    clear();
    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send.addEventListener('click', () => {
    if (send.classList.contains('opaque')){
        return;
    }
    
    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send2.addEventListener('click', () => {
    if (send2.classList.contains('opaque')){
        return;
    }
    create.classList.remove("scaled");
    all.classList.remove('colored');
})

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!(add.contains(target) || create.contains(target))) {
        create.classList.remove('scaled');
        all.classList.remove('colored');
    }

})


front.addEventListener('click', toggleDropdown);

choose.forEach(item => {
    item.addEventListener('click', replacer);
})


function toggleDropdown() {
    dropdown.classList.toggle('show');
    front.classList.toggle('outliner');
}

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!front.contains(target)) {
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

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!calendarDiv.contains(target)) {
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


// actual storage and usage of inserted values

const getTitle = () => {
    let thisTitle = titleText.value;
    return {
        title: thisTitle
    }
}

const getDescription = () => {
    let thisDescription = descriptionText.value;
    return {
        description: thisDescription
    }
}

const getDifficulty = () => {
    let difficult = set.textContent;
    console.log(difficult);
    let colorChoice;
    if (difficult == "Trivial") {
        colorChoice = "#5471D8"
    } else if(difficult == "Easy") {
        colorChoice = "#6ad854"
    } else if(difficult == "Medium"){
        colorChoice = "#fcb059"
    } else  {
        colorChoice = "#d85454"
    }
    return {
        difficult,
        colorChoice
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
    let main = [];
    let tags = [];
    inside.forEach(item => {
        if (item.classList.contains('picker')){
            main.push(item.childNodes[1].textContent)
        }
        if (!item.classList.contains('hide')) {
            tags.push(item.childNodes[1].textContent);
        }
    });
    if (main.length == 0) {
        main = ['General'];
    }
    return {
        tags,
        main
    }

}







choose2.forEach(item => {

    item.addEventListener('click', () => {



        inside.forEach(tag => {


            let word = item.childNodes[1].textContent;
            let insert = tag.childNodes[1].textContent;





            if (word == insert) {
                tag.classList.toggle('hide');
                if (tag.classList.contains('picker')){
                    tag.classList.remove('picker');
                    stop = 0;
                }
                //set2.classList.add('hide');

            }

        })

        let count = 0;
        inside.forEach(tag => {

            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }
        

        inside.forEach(tag => {
            if (stop){}
            else if (!tag.classList.contains('hide') && !tag.classList.contains('set2')) {
                tag.classList.add('picker');
                stop++;
            }

        })
    });


})




closeSvg.forEach(svg => {
    svg.addEventListener('click', () => {
        svg.parentElement.classList.toggle('hide');

        if (svg.parentElement.classList.contains('picker')){
            svg.parentElement.classList.remove('picker');
            stop = 0;
        }

        inside.forEach(tag => {
            if (stop){}
            else if (!tag.classList.contains('hide') && !tag.classList.contains('set2')) {
                tag.classList.add('picker');
                stop++;
            }

        })

        let count = 0;
        inside.forEach(tag => {
            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }

        
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
        newDiv.classList.add('made');

        let insideText = document.createElement('div');
        insideText.classList.add('inside2');
        insideText.textContent = tagInput.value;
        tagInput.value = "";


        let parentDiv = document.createElement('div');
        parentDiv.classList.add('inside');

        let svgElement = document.createElement('img');
        svgElement.src = './Assets/x.svg';

        svgElement.classList.add('special')
        svgElement.style.width = "13px";
        svgElement.style.height = "auto";
        svgElement.style.fill = "red";


        newDiv.appendChild(insideText);
        newDiv.appendChild(svgElement);

        parentDiv.appendChild(newDiv);

        mode2.appendChild(parentDiv);

    }

    let inside = document.querySelectorAll('.inside');
    
    let count = 0;
        inside.forEach(tag => {
            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }
})



setInterval(() => {
    let computedHeight = getComputedStyle(mode2).height;

    let parts = computedHeight.split(/(\d+)/)
    let final = parseInt(parts[1]) + 6;
    final += parts[2];
    document.documentElement.style.setProperty('--div-a-height', final)





})



titleText.addEventListener('input', () => {
    if(titleText.value == "") {
        send.classList.add('opaque');
        send2.classList.add('opaque');
    } else {
        send.classList.remove('opaque');
        send2.classList.remove('opaque');
    }
})


const allProjects = [];


send.addEventListener('click', addTask);
send2.addEventListener('click', addTask);

let requiredEmpty = true;





function addTask() {
    if (this.classList.contains('opaque')){
        return
    }

    let newTask = task();

    
    if (checkIfMade(allProjects, newTask.main)) {
        allProjects[parseInt(checkIfMade(allProjects, newTask.main))].appendChild(makeDetails(newTask));
    } else {
        allProjects.push(makeProject(newTask));
    }


    projectRender();

    let centerButtonDiv = document.querySelectorAll('.centerButton');

    const closeTask = function closeTaskInsideOfProjectAndProjectIfEmpty() {
        console.log(this.parentNode.parentNode.classList.add('finished'));
    }
    
    centerButtonDiv.forEach(item => {
        item.addEventListener('click', closeTask);
    })
    clear();
}

container.addEventListener('click', () => {
    dropdown2.classList.toggle('hide');
    container.classList.toggle('outlinerS');
})

document.addEventListener('click', function (event) {
    let target = event.target;

    requiredEmpty = getTitle().title == "";
    

    if (!front2.contains(target) && !requiredEmpty) {
    
        dropdown2.classList.add('hide');
        container.classList.remove('outlinerS');
    }

})



function projectRender() {
    for (let index = 0; index < allProjects.length; index++) {
        projects.appendChild(allProjects[index]);
    }
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

let counter = 0;

const makeProject = (task) => {
    let project = document.createElement('div');
    project.classList.add('project')
    let className = `p${counter}`;
    counter++;
    project.classList.add(className);

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = task.main[0];
    project.appendChild(title);

    let item = document.createElement('div');
    item.classList.add('item');
    project.appendChild(item);

    let left = document.createElement('div');
    left.classList.add('left');
    left.style.backgroundColor = task.colorChoice;
    item.appendChild(left);

    let right = document.createElement('div');
    right.classList.add('right');
    item.appendChild(right);
    
    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');
    
    left.appendChild(centerButton);

    // add SVG shit here
    
    centerButton.appendChild(mySvg.cloneNode(true));

    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.textContent = task.title;
    right.appendChild(todo);

    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent = task.description;
    right.appendChild(description);

    let due = document.createElement('div');
    due.classList.add('due');
    due.textContent = `${task.month} `;

    let num = document.createElement('span');
    num.classList.add('num');
    num.textContent = task.day;
    due.appendChild(num);
    right.appendChild(due);

    

    return project;
}

const makeDetails = (task) => {

    let item = document.createElement('div');
    item.classList.add('item');

    let left = document.createElement('div');
    left.classList.add('left');
    left.style.backgroundColor = task.colorChoice;
    item.appendChild(left);

    let right = document.createElement('div');
    right.classList.add('right');
    item.appendChild(right);
    
    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');
    
    left.appendChild(centerButton);

    // add SVG shit here

    
    centerButton.appendChild(mySvg.cloneNode(true));

    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.textContent = task.title;
    right.appendChild(todo);

    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent = task.description;
    right.appendChild(description);

    let due = document.createElement('div');
    due.classList.add('due');
    due.textContent = `${task.month} `;

    let num = document.createElement('span');
    num.classList.add('num');
    num.textContent = task.day;
    due.appendChild(num);
    right.appendChild(due);

    return item;

}

function checkIfMade(projects, projectName) {
    for (let index = 0; index < projects.length; index++) {
        if (projects[index].childNodes[0].textContent == projectName) {
            return index + "";
        }
    }
    return false;
}

/*
let left = document.createElement('div');
    left.classList.add('left');

    let right = document.createElement('div');
    right.classList.add('right');

    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');

    let svgElement = document.createElement('img');
    svgElement.src = './Assets/check-bold.svg';

    let todo = document.createElement('div');
    todo.classList.add('todo');
*/

