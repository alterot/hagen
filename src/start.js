import foxImg from './fox.png';

export function createHome() {
    const homeSection = document.createElement('section');

    const heading = document.createElement('h1');
    heading.textContent = "Välkommen till HAGEN!";

    const paragraph = document.createElement('p');
    paragraph.textContent = "I HAGEN blandar vi drinkar av högsta kvalitet, med råvaror så lokalt vi kan få dem (typ nyplockad mynta från grannens pallkrage, svarta vinbär från våra egna buskar och fläder från dungen i kvarteret). Om du saknar något på menyn, var inte blyg att fråga. Vi ska nog kunna lösa något du gillar \u2764";

    const fox = document.createElement('img');
    fox.id = 'fox-img';
    fox.src = foxImg;
    fox.alt = 'Fox with Cocktail';

    homeSection.appendChild(heading);
    homeSection.appendChild(paragraph);
    homeSection.appendChild(fox);

    return homeSection;
}