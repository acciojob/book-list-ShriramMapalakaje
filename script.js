//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Add book to list
    addBookToList(title, author, isbn);

    // Clear fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

function addBookToList(title, author, isbn) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
    `;

    list.appendChild(row);
}

// Handle Deletion using Event Delegation
document.getElementById('book-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});