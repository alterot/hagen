import './menu.css';

export function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const menuDescription = document.createElement('p')
    menuDescription.textContent = "Sommaren bjuder på mycket fräschör; mynta, bär, citrus, etc. Men såklart även en hel del klassiker.";
    menuContainer.appendChild(menuDescription);

    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');

    const menuItems = [
        { name: 'Negroni', description: 'Gin, söt vermouth & Campari' },
        { name: 'Mojito', description: 'Ljus rom, lime, socker & mynta' },
        { name: 'Flädermojito', description: 'Ljus rom, mynta från grannen, lime & hemmakokt flädersaft' },
        { name: 'Gold Rush', description: 'Bourbon, honung & citron' },
        { name: 'Gin & Tonic', description: 'Gin. Tonic.' },
        { name: 'Daiquiri', description: 'Ljus rom, lime & socker' },
        { name: 'Last Word', description: 'Gin, Maraschinolikör, Grön Chartreuse & lime' },
        { name: 'Queen´s Dubonnet', description: 'Gin, Dubonnet & citronskiva' },
        { name: 'White Cuban', description: 'Mörk rom, Kahlùa, grädde & choklad' }

       /*  { name: 'Flädermojito', description: 'Ljus rom, mynta från grannen, lime & hemmakokt flädersaft' },
        { name: 'Last Word', description: 'Gin, Maraschinolikör, Grön Chartreuse & lime' },
        { name: 'Queen´s Dubonnet', description: 'Gin, Dubonnet & citronskiva' },
        { name: 'Paper planes', description: 'Bourbon, Aperol, Amaro Nonino & citron' },
        { name: 'Hagen Margaritha', description: 'Tequila Reposado, agavesirap & lime' },
        { name: 'Blueberry Daiquiri', description: 'Ljus rom, socker, lime & blåbär' },
        { name: 'Hagen Old fashioned', description: 'Rågwhisky, karamelliserat socker & bitters' } */
    ];

    menuItems.forEach(item => {
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        menuSection.appendChild(itemName);
        menuSection.appendChild(itemDescription);
    });

    menuContainer.appendChild(menuSection);

    return menuContainer;
}
