const params = new URLSearchParams(window.location.search);

fetch('./data/' + params.get('id') + '.json')
    .then((response) => response.json())
    .then(data => {
        console.log(data.image);
    })
;