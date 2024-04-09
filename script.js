// Функция для сохранения данных пользователя
function saveData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const issue = document.getElementById('issue').value;

  userData = {
    name: name,
    age: age,
    gender: gender,
    issue: issue
  };

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById('issue').value = '';

  alert('Данные сохранены!');
}

// Функция для отображения данных пользователя
function displayUserData() {
  const userDataContainer = document.getElementById('userData');
  userDataContainer.innerHTML = '';
  
  for (const key in userData) {
    userDataContainer.innerHTML += `<p><strong>${key}:</strong> ${userData[key]}</p>`;
  }
}

// Функция для редактирования данных пользователя
function editUserData() {
  document.getElementById('name').value = userData.name;
  document.getElementById('age').value = userData.age;
  document.getElementById(userData.gender).checked = true;
  document.getElementById('issue').value = userData.issue;
}

// Функция для удаления данных пользователя
function deleteUserData() {
  userData = {};
  document.getElementById('userData').innerHTML = '';
  alert('Данные удалены!');
}

// Функция для отображения/скрытия панели пользователя
function displayUserPanel() {
  var panel = document.getElementById('userPanel');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    displayUserData(); // Отображение данных пользователя при открытии панели
  } else {
    panel.style.display = 'none';
  }
}

// Назначение обработчиков событий
document.getElementById('saveBtn').addEventListener('click', saveData);
document.getElementById('displayBtn').addEventListener('click', displayUserPanel);
document.getElementById('editBtn').addEventListener('click', editUserData);
document.getElementById('deleteBtn').addEventListener('click', deleteUserData);