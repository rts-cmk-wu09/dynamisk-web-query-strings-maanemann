const params = new URLSearchParams(window.location.search);
const place = document.querySelector('.place');

fetch('./data/' + params.get('id') + '.json')
    .then((response) => response.json())
    .then(data => {
        // console.log(data.image);
        place.innerHTML = `
            <section class="place__imgCont">
                <img src="img/${data.image}" alt="Picture of the place">
                <div class="place__favCont">
                    <i class="fa-solid fa-heart"></i>
                    <span>
                        Favorit
                    </span>
                </div>
            </section>
            <section class="place__textCont">
                <p class="place__destination">
                    ${data.destination}
                </p>
                <h1 class="palce__title">
                    ${data.title}
                </h1>
                <p class="place__subtitle">
                    ${data.subtitle}
                </p>
                <p class="place__text">
                    ${data.text}
                </p>
                <h2 class="place__faciTitle">
                    Faciliteter
                </h2>
                <ul class="place__faciList"></ul>
            </section>
        `;
        data.facilities.forEach(facility => {
            // console.log(facility);
            const list = document.querySelector('.place__faciList');
            const punkt = document.createElement("li");
            punkt.append(facility);
            list.append(punkt);
        });
    })
;