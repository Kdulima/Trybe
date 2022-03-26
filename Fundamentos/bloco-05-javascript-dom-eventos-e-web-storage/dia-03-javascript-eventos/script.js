function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1__________________________________________________________________________________

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDaysOfTheMonth () {
      let getDaysList = document.querySelector('#days');
      for (let index = 0; index < dezDaysList.length; index += 1) {
          let day = dezDaysList[index];
          let dayItem = document.createElement('li');
          if (day === 24 || day === 31) {
              day.className = 'day holiday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else if (day === 4 || day === 11 || day === 18) {
              dayItem.className = 'day friday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else if (day === 25) {
              dayItem.className = 'day holiday friday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else {
              dayItem.className = 'day';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          }
      }
  }
  createDaysOfTheMonth();

  //Exercicio 2__________________________________________________________________________________

  function createHolidayButton(buttonName) {
let buttonContainer = document.querySelector('.buttons-container');
let newButton = document.createElement('button');
let newButtonID = 'btn-holiday';

newButton.innerHTML = buttonName;
newButton.id = newButtonID;
buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');


//Exercicio 3__________________________________________________________________________________

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();


//Exercicio 4__________________________________________________________________________________

  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
    
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
    }
    createFridayButton('Sexta-feira');


//Exercicio 5__________________________________________________________________________________

function displayFridays(fridayArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('friday')
    let newFridayText = 'SEXTOU o/';
    
  
    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML !== newFridayText) {
            fridays[index].innerHTML = newFridayText;
        } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);


//Exercicio 6__________________________________________________________________________________

function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '25px';
      event.target.style.fontWeight = '400';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '150';
      event.target.style.fontSize = '15px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();


  //Exercicio 7__________________________________________________________________________________

  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

  //Exercicio 8__________________________________________________________________________________

  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');


   //Exercicio 9__________________________________________________________________________________

   function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();


   //Exercicio 10_________________________________________________________________________________

   function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();
