
function Contact(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
}

function Task(description) {
  this.description = description;
  this.completed = false;
}

let contacts = [];
let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
  const addressForm = document.getElementById('address-form');
  const contactsList = document.getElementById('contacts-list');
  const taskForm = document.getElementById('task-form');
  const tasksList = document.getElementById('tasks-list');

  addressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    if (name && phone && email) {
      const contact = new Contact(name, phone, email);
      contacts.push(contact);
      displayContacts();
      addressForm.reset();
    }
  });

  function displayContacts() {
    contactsList.innerHTML = '';
    contacts.forEach((contact, index) => {
      const li = document.createElement('li');
      li.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;
      contactsList.appendChild(li);
    });
  }

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDesc = document.getElementById('task').value.trim();
    if (taskDesc) {
      const task = new Task(taskDesc);
      tasks.push(task);
      displayTasks();
      taskForm.reset();
    }
  });

  function displayTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.description;
      if (task.completed) {
        li.classList.add('completed');
      }

      li.addEventListener('click', () => {
        task.completed = !task.completed;
        displayTasks();
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.style.marginLeft = '10px';
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        tasks.splice(index, 1);
        displayTasks();
      });

      li.appendChild(deleteButton);
      tasksList.appendChild(li);
    });
  }
});
