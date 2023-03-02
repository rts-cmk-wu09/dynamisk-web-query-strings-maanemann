const params = new URLSearchParams(window.location.search);
const place = document.querySelector('.place');

fetch('./data/' + params.get('id') + '.json')
    .then((response) => response.json())
    .then(data => {
        console.log(data.image);
        place.innerHTML = `
            <img src="img/${data.image}" alt="Picture of the place">
        `;
    })
;