import foxImg from './fox.png';

export function createLocation() {
    const locationSection = document.createElement('section');

    const paragraph = document.createElement('p');
    paragraph.textContent = "Måste du fråga kan vi tyvärr inte berätta.";

    const fox = document.createElement('img');
    fox.id = 'fox-img';
    fox.src = foxImg;
    fox.alt = 'Fox with Cocktail';

    locationSection.appendChild(paragraph);

    return locationSection;
}