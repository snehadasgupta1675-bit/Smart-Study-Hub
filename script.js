// TIMER
let time = 25 * 60;
let timer;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById('timer').innerText =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  time = 25 * 60;
  updateDisplay();
}

updateDisplay();

// JOIN STUDY ROOM
function joinRoom() {
  document.getElementById('roomStatus').innerText = 'Joined Successfully';

  alert('Welcome to Smart Study Room!');
}

// TASK MANAGER
let completed = 0;

function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value;

  if(taskText === '') {
    alert('Please enter a task');
    return;
  }

  let li = document.createElement('li');

  li.innerHTML = `
    ${taskText}
    <button onclick="completeTask(this)">Done</button>
  `;

  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}

function completeTask(button) {
  button.parentElement.remove();

  completed++;

  document.getElementById('completedTasks').innerText = completed;
}

// NOTES SAVE
function saveNotes() {
  let notes = document.getElementById('notesBox').value;

  localStorage.setItem('studyNotes', notes);

  alert('Notes Saved Successfully');
}

window.onload = function() {
  let savedNotes = localStorage.getItem('studyNotes');

  if(savedNotes) {
    document.getElementById('notesBox').value = savedNotes;
  }
}