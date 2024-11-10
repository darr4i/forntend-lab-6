function fetchData() {
    const apiUrl = 'https://randomuser.me/api';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка запиту до API');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];

            const userImage = user.picture.large;
            const userCell = user.cell;
            const userCountry = user.location.country;
            const userEmail = user.email;
            const userCoordinates = `Широта: ${user.location.coordinates.latitude}, Довгота: ${user.location.coordinates.longitude}`;

            document.getElementById('userImage').src = userImage;
            document.getElementById('userCell').innerText = userCell;
            document.getElementById('userCountry').innerText = userCountry;
            document.getElementById('userEmail').innerText = userEmail;
            document.getElementById('userCoordinates').innerText = userCoordinates;

            document.querySelector('.result').style.display = 'block';
        })
        .catch(error => {
            console.error('Сталася помилка:', error);
            alert('Не вдалося отримати дані. Спробуйте ще раз.');
        });
}
