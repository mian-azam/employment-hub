'use strict';



function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

//======================================================================================//
const check = select('.check');
const peopleDiv = select('.people');
const postHead = select('.post-head');
const notifyPara = select('.notify');

//======================================================================================//

const url = 'https://randomuser.me/api/?nat=CA&results=10&';

const options = {
    method: 'GET',
    mode: 'cors'
};


async function getUsers() {

    try {
        const result = await fetch(url, options);

        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            console.log(data.results);
            const users = data.results

            for (let i = 0; i < users.length; i++) {
                let url = users[i].picture.thumbnail;
                let parentDiv = document.createElement('div');
                parentDiv.classList.add('parent');
                peopleDiv.appendChild(parentDiv);
                let imgDiv = document.createElement('div');
                imgDiv.classList.add('picture');
                parentDiv.appendChild(imgDiv);
                imgDiv.style.background = `#1a1d28 url(${url}) center center / cover no-repeat`;
                let infoDiv = document.createElement('div');
                infoDiv.classList.add('info');
                parentDiv.appendChild(infoDiv);
                let namePara = document.createElement('p');
                namePara.classList.add('name-para');
                namePara.innerText = `${users[i].name.first} ${users[i].name.last}`;
                infoDiv.appendChild(namePara);
                let cityPara = document.createElement('p');
                cityPara.innerText = users[i].location.city;
                infoDiv.appendChild(cityPara);
            }
        }
    } catch {
        console.log('error');
    }
}

getUsers();

//======================================================================================//





