// Skrevet af fra undervisning, men i skrivende stund venter jeg med at bruge det / indsætte egne classes / tilføje classes i html hvor der er behov (til hver figure?) -- for i stedet at gå tilbage til den forrige del af opgaven, som jeg ikke fik gjort færdig

document.querySelector('.destinationlist').addEventListener('click', (e) => {
    let destinationId = e.target.closest("figure").attribute.id.value;
    if (e.element.classList.contains('fa-heart')) {
        if (!localStorage.getItem(destinationId)) {
            localStorage.setItem(destinationId, 'favorit');
            e.target.classList.add("fa-solid");
        } else {
            localStorage.removeItem(destinationId);
            e.target.classList.remove("fa-solid");
        }
    }
});