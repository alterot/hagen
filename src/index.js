import './style.css';
import mailImg from './mail.png';
import instaImg from './insta.png';

import { createHome } from './start';
import { createMenu } from './menu'; 
import { createLocation } from './location'; 

function createHeader() {
    const header = document.createElement('header');

    const navbar = document.createElement('nav');

    const links = [
        { text: 'HAGEN', module: createHome },
        { text: 'MENY', module: createMenu },
        { text: 'VART FINNS VI?', module: createLocation }
    ];

    links.forEach(linkInfo => {
        const link = document.createElement('a');
        link.textContent = linkInfo.text;

        link.addEventListener('click', () => {
            links.forEach(otherLink => otherLink.link.classList.remove('active'));
            link.classList.add('active');
            loadContent(linkInfo.module);
        });

        linkInfo.link = link;
        navbar.appendChild(link);
    });

    header.appendChild(navbar);

    document.body.appendChild(header);

    links[0].link.classList.add('active');
    loadContent(links[0].module);

    return header;
}

function createFooter() {
  const footer = document.createElement('footer');

  const mailLink = document.createElement('a');
  mailLink.href = 'mailto:hagencocktailbar@gmail.com';
  
  const mailIcon = document.createElement('img');
  mailIcon.src = mailImg;
  mailIcon.alt = 'Letter';
  mailLink.appendChild(mailIcon);

  const instagramLink = document.createElement('a');
  instagramLink.href = 'https://www.instagram.com/hagencocktailbar/';
  instagramLink.target = '_blank';
  
  const instagramIcon = document.createElement('img');
  instagramIcon.src = instaImg;
  instagramIcon.alt = 'Instagram';
  instagramLink.appendChild(instagramIcon);

  footer.appendChild(instagramLink);
  footer.appendChild(mailLink);
  

  return footer;
}

function loadContent(contentModule) {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';
    mainContent.appendChild(contentModule());
}

document.body.appendChild(createHeader());
loadContent(createHome);
document.body.appendChild(createFooter());
  