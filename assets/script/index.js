'use strict';



function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

//======================================================================================//
const emailInput = select('.email');
const passInput = select('.password');
const btnLogin = select('.btn-login');
const notifyPara = select('.notify');
//======================================================================================//


const info = [
    { email: 'a@gmail.com', password: '123' }
];

const stringfiedOne = JSON.stringify(info);
console.log(stringfiedOne);

const stringfiedTwo = JSON.stringify(info, null, '  ');
console.log(stringfiedTwo);

localStorage.setItem('users', JSON.stringify(info));
console.log(localStorage);


onEvent('click', btnLogin, function () {
    const users = JSON.parse(localStorage.getItem('users'));
    for (const user of users) {
        let email = emailInput.value.trim();
        if (emailInput.value == '' || passInput.value == '') {
            notifyPara.innerText = 'Both inputs are required';
        } else if (email === user.email && passInput.value === user.password) {
            window.open('.//home.html')
        } else {
            notifyPara.innerText = 'Wrong Email/Password combination';
        }
    }
})