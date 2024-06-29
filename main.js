fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data', error));

function createCards(users) {
    let container = document.getElementById('user-cards-container');

    users.forEach(user => {
        let card = document.createElement('div');
        card.className = 'user-card';

        let name = document.createElement('h2');
        name.textContent = user.name;

        let username = document.createElement('p');
        username.textContent = 'Username:' + user.username;

        let email = document.createElement('p');
        email.textContent = "Email:" + user.email;

        card.appendChild(name)
        card.appendChild(username)
        card.appendChild(email)

        container.appendChild(card)
    });
}