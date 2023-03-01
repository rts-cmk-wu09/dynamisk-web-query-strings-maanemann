const places = document.querySelector('.places-grid');

fetch('./data/destinations.json')
    .then((response) => response.json())
    .then(data => {
        // console.log(data.destinations[0]);
        data.destinations.forEach(destination => {
            places.innerHTML += `
            <figure id="${destination.id}">
                <img src="./img/${destination.image}" alt="" />
                <div>
                    <i class="fa-solid fa-heart"></i>
                    <a href="destination.html?id=${destination.id}">
                        More
                    </a>
                </div>
            </figure>
            `
        });
    })
    ;

////////////////////////////////////////////////////////////////

// const params = new URLSearchParams(window.location.search);
// params.append('name', 'John');
// params.append('age', '30');

// // const queryString = params.toString(); // "name=John&age=30"

// console.log(queryString);

// // assume the URL is http://example.com/?name=John&age=30

// const naame = params.get('name'); // "John"
// const age = params.get('age'); // "30"

// console.log(naame);