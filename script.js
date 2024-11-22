// Get DOM elements
const themeSelect = document.getElementById('theme-select');
const listStyleSelect = document.getElementById('list-style-select');
const dynamicList = document.getElementById('dynamic-list');

// Items for the dynamic list
const listItems = ['Jasmeet Kaur', 'Parmeet Kaur', 'Palvinder singh', 'Kawaljeet Kaur', 'Jasjeet Singh'];

// Set default preferences if not in localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('listStyle') || 'bullet';
    
    // Apply saved preferences
    document.body.classList.add(savedTheme);
    dynamicList.classList.add(savedListStyle);

    // Set the correct select options
    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;

    // Populate the list
    listItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        dynamicList.appendChild(li);
    });
});

// Event listeners for changing preferences
themeSelect.addEventListener('change', (event) => {
    const theme = event.target.value;
    document.body.classList.remove('light', 'dark', 'darkgreen');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
});

listStyleSelect.addEventListener('change', (event) => {
    const listStyle = event.target.value;
    dynamicList.classList.remove('bullet', 'checkmark', 'roman');
    dynamicList.classList.add(listStyle);
    localStorage.setItem('listStyle', listStyle);
});
