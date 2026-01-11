// Phase 2 - DOM & Browser APIs

// 1. Change H1 text
function changeTitle() {
    document.getElementById('mainTitle').textContent = 'Title Changed!';
}

// 2. Change background color
function changeBackground() {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// 3. Add list item dynamically
let itemCount = 2;
function addListItem() {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    document.getElementById('dynamicList').appendChild(li);
}

// 4. Show/Hide text
function toggleVisibility() {
    const text = document.getElementById('toggleText');
    text.classList.toggle('hidden');
}

// 5. Prevent form submission
document.getElementById('sampleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submission prevented!');
});

// 6. Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchSeconds);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchSeconds = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00';
}

// 7. Image hover
const hoverImage = document.getElementById('hoverImage');
hoverImage.addEventListener('mouseover', () => {
    hoverImage.src = 'https://via.placeholder.com/150/e74c3c/ffffff?text=Hovered!';
});
hoverImage.addEventListener('mouseout', () => {
    hoverImage.src = 'https://via.placeholder.com/150/3498db/ffffff?text=Hover+Me';
});

// 8. setTimeout - delayed alert
function delayedAlert() {
    setTimeout(() => {
        alert('3 seconds have passed!');
    }, 3000);
}

// 9. setInterval - clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 10. Promise
function createPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds!');
        }, 2000);
    });
}

// 11-13. Fetch with async/await and loading indicator
async function fetchData() {
    const loading = document.getElementById('loadingIndicator');
    const result = document.getElementById('fetchResult');

    loading.classList.remove('hidden');
    result.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();

        result.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;
    } catch (error) {
        result.innerHTML = '<p style="color: red;">Error fetching data</p>';
    } finally {
        loading.classList.add('hidden');
    }
}

// 14. Real-time input
document.getElementById('realtimeInput').addEventListener('input', function(e) {
    document.getElementById('realtimeOutput').textContent = e.target.value;
});

// 15-16. CSS class and Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.modal')?.classList.toggle('dark-mode');
}

// 17. Modal window
function openModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// 18. Todo list
const todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (text) {
        todos.push(text);
        renderTodos();
        input.value = '';
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = todos.map((todo, index) => `
        <li>
            ${todo}
            <button onclick="deleteTodo(${index})">Delete</button>
        </li>
    `).join('');
}

// 19-20. LocalStorage
function saveToStorage() {
    const data = document.getElementById('storageInput').value;
    localStorage.setItem('savedData', data);
    alert('Data saved!');
}

function loadFromStorage() {
    const data = localStorage.getItem('savedData');
    document.getElementById('storageOutput').textContent = data || 'No data found';
}

// Load stored data on page load
window.addEventListener('load', () => {
    const storedData = localStorage.getItem('savedData');
    if (storedData) {
        document.getElementById('storageOutput').textContent = storedData;
    }
});
